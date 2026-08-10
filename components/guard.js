/* ================================================================
   GUARD — 데이터 파일 오류 안내
   ================================================================

   data/ 폴더의 파일을 수정하다가 쉼표나 따옴표를 빠뜨리면
   원래는 페이지가 아무 설명 없이 백지로 나옵니다.

   이 파일은 그럴 때 화면 위에 "어느 파일에 문제가 있는지"를
   한글로 알려주는 안내창을 띄웁니다.

   ⚠️  이 파일은 수정할 필요가 없습니다.
       모든 페이지의 <head> 안에서 가장 먼저 불러옵니다.
================================================================ */

(function () {
  var shown = false;

  window.addEventListener("error", function (e) {
    // 이미지 로딩 실패 등은 제외하고, 스크립트 오류만 처리
    if (!e.message || shown) return;
    shown = true;

    var file = "데이터 파일";
    if (e.filename) {
      var parts = e.filename.split("/").filter(Boolean);
      file = parts.slice(-2).join("/");
      if (file.indexOf("data") !== 0 && parts.length >= 3) {
        file = parts.slice(-3).join("/");
      }
    }

    var box = document.createElement("div");
    box.setAttribute("role", "alert");
    box.style.cssText = [
      "position:fixed", "top:0", "left:0", "right:0", "z-index:99999",
      "background:#fef2f2", "border-bottom:3px solid #b91c1c",
      "color:#7f1d1d", "padding:1.1rem 1.4rem",
      "font-family:'Noto Sans KR',sans-serif", "font-size:.95rem",
      "line-height:1.75", "box-shadow:0 3px 14px rgba(0,0,0,.15)"
    ].join(";");

    box.innerHTML =
      '<div style="max-width:900px;margin:0 auto">' +
        '<strong style="font-size:1.05rem">페이지 내용을 불러오지 못했습니다</strong><br>' +
        '<b>' + file + '</b> 파일에 문법 오류가 있는 것 같습니다. ' +
        '방금 고친 부분에서 <b>쉼표(,)</b>나 <b>따옴표(")</b>가 빠지지 않았는지 확인해 주세요.<br>' +
        '<span style="font-size:.85rem;color:#9a3412">오류 내용: ' + String(e.message) + '</span>' +
      '</div>';

    function attach() {
      if (document.body) document.body.insertBefore(box, document.body.firstChild);
      else document.addEventListener("DOMContentLoaded", attach);
    }
    attach();
  }, true);
})();
