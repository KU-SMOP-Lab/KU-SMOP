/* ================================================================
   PUBLICATIONS 조합 파일 — SMOP Lab
   ================================================================

   ※ 이 파일은 직접 수정하지 마세요!
   논문 추가/수정은 카테고리별 파일에서 하세요:

   - international_journals.js  국제 저널 (학회 논문 포함)
   - domestic_journals.js       국내 저널
   - books.js                   Book Chapters
   - patents.js                 특허

   이 파일은 위 4개 파일의 데이터를 합쳐서
   연도 내림차순 정렬 + 번호(id) 자동 부여를 처리합니다.
   HTML에서는 반드시 카테고리 파일들을 먼저 로드한 뒤
   이 파일을 마지막에 로드해야 합니다.

================================================================ */

const PUBLICATIONS = (() => {

  // 파일 하나가 깨져도 나머지는 표시되도록 방어 처리
  const prep = (arr, defaults) =>
    (Array.isArray(arr) ? arr : []).map(p => ({
      ...p,
      type:      p.type      || defaults.type,
      yearLabel: p.yearLabel || defaults.yearLabel || String(p.year),
    }));

  const intl     = prep(typeof INTERNATIONAL_JOURNALS !== "undefined" ? INTERNATIONAL_JOURNALS : null, { type:"journal" });
  const domestic = prep(typeof DOMESTIC_JOURNALS      !== "undefined" ? DOMESTIC_JOURNALS      : null, { type:"domestic" });
  const books    = prep(typeof BOOK_CHAPTERS          !== "undefined" ? BOOK_CHAPTERS          : null, { type:"book-chapter", yearLabel:"Book Chapters" });
  const patents  = prep(typeof PATENTS                !== "undefined" ? PATENTS                : null, { type:"patent",       yearLabel:"Patents" });

  // 저널·학회 논문: 연도 내림차순 정렬 후 1, 2, 3... 자동 번호
  const regular = [...intl, ...domestic].sort((a, b) => b.year - a.year);
  regular.forEach((p, i) => { p.id = String(i + 1); });

  // Book Chapters / 특허: 파일에 적힌 순서 유지, BC1... / P1... 자동 번호
  books.forEach((p, i)   => { p.id = "BC" + (i + 1); });
  patents.forEach((p, i) => { p.id = "P"  + (i + 1); });

  return [...regular, ...books, ...patents];
})();
