/* ================================================================
   NAV COMPONENT — SMOP Lab
   ================================================================

   ✏️  네비게이션 메뉴 수정 방법:
   ─────────────────────────────────────────────────────────────
   ▸ 메뉴 항목 추가/삭제/이름 변경 → 아래 NAV_ITEMS 배열 수정
   ▸ 각 항목:
       label : 화면에 표시될 메뉴 이름
       key   : 폴더 이름과 동일하게 작성 (home 제외)
               예) "members/" 폴더 → key: "members"
   ▸ 순서 변경 → 배열 순서 바꾸면 됨
   ▸ 새 페이지 추가 시:
       1. 해당 폴더 + index.html 생성
       2. 아래 배열에 항목 추가
       → 모든 페이지에 자동 반영

   ⚠️  이 파일 외에는 수정 불필요 (active 상태 자동 감지)
================================================================ */

const NAV_ITEMS = [
  { label: "Professor",    key: "professor" },
  { label: "Members",      key: "members" },
  { label: "Publications", key: "publications" },
  { label: "Projects",     key: "projects" },
  { label: "Gallery",      key: "gallery" },
  { label: "Contact",      key: "contact" },
];

// ── 아래는 수정하지 마세요 ──────────────────────────────────────

(function () {
  // URL에서 현재 페이지 감지 (예: /smop-lab/members/alumni/ → currentKey="members", depth=2)
  const knownKeys = NAV_ITEMS.map(i => i.key).filter(k => k !== "home");
  const segs = window.location.pathname.replace(/\/$/, "").split("/").filter(Boolean);
  // 파일을 직접 열었을 때(.../members/index.html)도 폴더 기준으로 계산되도록 파일명 제거
  if (segs.length && segs[segs.length - 1].includes(".")) segs.pop();
  const lastSeg = segs[segs.length - 1] || "";
  const prevSeg = segs[segs.length - 2] || "";

  let currentKey = "home", depth = 0;
  if (knownKeys.includes(lastSeg))      { currentKey = lastSeg; depth = 1; }
  else if (knownKeys.includes(prevSeg)) { currentKey = prevSeg; depth = 2; }

  // 깊이에 따라 루트까지의 상대 경로 prefix 결정
  const prefix = depth === 0 ? "" : "../".repeat(depth);

  const items = NAV_ITEMS.map(i => {
    const href = i.key === "home" ? (prefix || "./") : `${prefix}${i.key}/`;
    const active = i.key === currentKey ? ' class="active"' : "";
    return `<li><a href="${href}"${active}>${i.label}</a></li>`;
  }).join("");

  document.getElementById("nav-root").innerHTML = `
    <nav class="navbar">
      <div class="nav-inner">
        <a href="${prefix || "./"}" class="nav-logo">
          <img src="${prefix}images/smop_logo.png" alt="SMOP Lab" class="nav-logo-img">
        </a>
        <button class="nav-toggle" onclick="document.querySelector('.nav-links').classList.toggle('open')" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-links">${items}</ul>
      </div>
    </nav>`;
})();
