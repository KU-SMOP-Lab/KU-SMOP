/* ================================================================
   POPUP COMPONENT — SMOP Lab
   ================================================================

   세 종류의 팝업을 화면에 띄웁니다.

     · 공지 팝업  (구석에 떠 있는 창)        → 내용은 data/popup/notice.js
     · 축하 팝업  (가운데 큰 창, 사진+글)    → 내용은 data/popup/celebration.js
     · 이미지 팝업 (직접 만든 현수막 이미지) → 내용은 data/popup/banner.js

   ✏️  페이지에 팝업을 넣는 방법
   ─────────────────────────────────────────────────────────────
   원하는 페이지의 </body> 바로 위에, 쓰고 싶은 팝업의 데이터 파일과
   이 파일을 함께 불러오면 됩니다. (popup.js 가 항상 맨 마지막)

       <script src="data/popup/notice.js"></script>
       <script src="data/popup/celebration.js"></script>
       <script src="data/popup/banner.js"></script>
       <script src="components/popup.js"></script>

   필요한 종류만 골라 넣어도 됩니다.
   하위 폴더의 페이지(members/ 등)라면 경로 앞에 ../ 를 붙이세요.

   ⚠️  이 파일은 수정할 필요가 없습니다.
       내용·표시 여부는 data/popup/ 안의 파일에서 바꾸세요.
================================================================ */

(function () {

  // ── 루트까지의 상대 경로 계산 (하위 폴더 페이지에서도 링크·사진이 맞도록) ──
  const knownKeys = ["professor", "members", "publications", "projects", "gallery", "contact"];
  const segs = window.location.pathname.replace(/\/$/, "").split("/").filter(Boolean);
  if (segs.length && segs[segs.length - 1].includes(".")) segs.pop();
  const lastSeg = segs[segs.length - 1] || "";
  const prevSeg = segs[segs.length - 2] || "";
  let depth = 0;
  if (knownKeys.includes(lastSeg))      depth = 1;
  else if (knownKeys.includes(prevSeg)) depth = 2;
  const prefix = "../".repeat(depth);

  const url = u => (/^(https?:)?\/\/|^mailto:/.test(u) ? u : prefix + u);

  // ── "오늘 하루 보지 않기" 저장/확인 ──
  const isHidden = key => {
    try { const v = localStorage.getItem(key); return v && Date.now() < Number(v); }
    catch (e) { return false; }          // 브라우저가 저장을 막아도 팝업은 정상 표시
  };
  const hideToday = key => {
    try {
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);     // 오늘 자정까지
      localStorage.setItem(key, String(midnight.getTime()));
    } catch (e) { /* 저장 실패해도 닫기는 정상 동작 */ }
  };

  const mount = html => {
    const wrap = document.createElement("div");
    wrap.innerHTML = html.trim();
    const el = wrap.firstElementChild;
    document.body.appendChild(el);
    return el;
  };

  const footHtml = `
    <div class="pop-foot">
      <label class="pop-today"><input type="checkbox"> 오늘 하루 보지 않기</label>
      <button type="button" class="pop-close">닫기</button>
    </div>`;

  // 닫기 동작 연결 (✕ / 닫기 버튼 / Esc)
  function bindClose(el, key, onClose) {
    const close = () => {
      const chk = el.querySelector(".pop-today input");
      if (chk && chk.checked) hideToday(key);
      el.remove();
      if (onClose) onClose();
    };
    el.querySelectorAll(".pop-x, .pop-close").forEach(b => b.addEventListener("click", close));
    document.addEventListener("keydown", e => {
      if (e.key === "Escape" && document.body.contains(el)) close();
    });
    return close;
  }

  /* ═══════════ 공지 팝업 — 구석에 떠 있는 창 ═══════════ */
  if (typeof NOTICE !== "undefined" && NOTICE.show) {
    const key = "smop-notice-" + (NOTICE.version || 1);
    if (!isHidden(key)) {
      const side = NOTICE.position === "right" ? "pop-corner-right" : "pop-corner-left";
      const linkHtml = (NOTICE.link && NOTICE.link.url)
        ? `<a class="pop-link" href="${url(NOTICE.link.url)}">${NOTICE.link.label || "자세히 보기"}</a>`
        : "";
      const el = mount(`
        <div class="pop-corner ${side}" role="dialog" aria-label="공지">
          <button type="button" class="pop-x" aria-label="닫기">✕</button>
          ${NOTICE.label ? `<p class="pop-label">${NOTICE.label}</p>` : ""}
          <p class="pop-title">${NOTICE.title || ""}</p>
          <p class="pop-body">${NOTICE.body || ""}</p>
          ${linkHtml}
          ${footHtml}
        </div>`);
      bindClose(el, key);
    }
  }

  /* ═══════════ 축하 팝업 — 가운데 큰 창 ═══════════ */
  if (typeof CELEBRATION !== "undefined" && CELEBRATION.show) {
    const key = "smop-celebration-" + (CELEBRATION.version || 1);
    if (!isHidden(key)) {
      const people = (CELEBRATION.people || []).map(p => `
        <div class="pop-person">
          ${p.photo ? `<img src="${url(p.photo)}" alt="${p.name}">`
                    : `<div class="pop-person-noimg">${(p.name || "").slice(0, 1)}</div>`}
          <p class="pop-person-name">${p.name || ""}</p>
          ${p.degree ? `<p class="pop-person-degree">${p.degree}</p>` : ""}
        </div>`).join("");

      const el = mount(`
        <div class="pop-dim" role="dialog" aria-modal="true" aria-label="축하">
          <div class="pop-card">
            <button type="button" class="pop-x" aria-label="닫기">✕</button>
            <div class="pop-card-top">
              ${CELEBRATION.emoji ? `<p class="pop-emoji">${CELEBRATION.emoji}</p>` : ""}
              <p class="pop-card-title">${CELEBRATION.title || ""}</p>
              ${CELEBRATION.subtitle ? `<p class="pop-card-sub">${CELEBRATION.subtitle}</p>` : ""}
            </div>
            <div class="pop-card-body">
              ${people ? `<div class="pop-people">${people}</div>` : ""}
              ${CELEBRATION.message ? `<p class="pop-message">${CELEBRATION.message}</p>` : ""}
            </div>
            ${footHtml}
          </div>
        </div>`);

      document.body.style.overflow = "hidden";                  // 뒤 화면 스크롤 잠금
      const close = bindClose(el, key, () => { document.body.style.overflow = ""; });
      el.addEventListener("click", e => { if (e.target === el) close(); });   // 바깥 클릭 시 닫기
    }
  }

  /* ═══════════ 이미지 팝업 — 직접 만든 현수막 이미지 ═══════════ */
  if (typeof BANNER !== "undefined" && BANNER.show && BANNER.image) {
    const key = "smop-banner-" + (BANNER.version || 1);
    if (!isHidden(key)) {
      const w = BANNER.width || 800;
      const img = `<img class="pop-banner-img" src="${url(BANNER.image)}" alt="${BANNER.alt || ""}">`;
      const picture = (BANNER.link && BANNER.link.url)
        ? `<a href="${url(BANNER.link.url)}">${img}</a>` : img;

      if (BANNER.position === "corner") {
        const el = mount(`
          <div class="pop-banner pop-banner-corner" style="max-width:${w}px" role="dialog" aria-label="공지 이미지">
            <button type="button" class="pop-x" aria-label="닫기">✕</button>
            ${picture}
            ${footHtml}
          </div>`);
        bindClose(el, key);
      } else {
        const el = mount(`
          <div class="pop-dim" role="dialog" aria-modal="true" aria-label="공지 이미지">
            <div class="pop-banner" style="max-width:${w}px">
              <button type="button" class="pop-x" aria-label="닫기">✕</button>
              ${picture}
              ${footHtml}
            </div>
          </div>`);
        document.body.style.overflow = "hidden";
        const close = bindClose(el, key, () => { document.body.style.overflow = ""; });
        el.addEventListener("click", e => { if (e.target === el) close(); });
      }
    }
  }

})();
