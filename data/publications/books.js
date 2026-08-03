/* ================================================================
   BOOK CHAPTERS — SMOP Lab
   ================================================================

   새 항목 추가하는 방법:
   최신 항목을 배열 맨 위에 추가하세요 (화면에 배열 순서대로 표시).
   번호(BC1, BC2, ...)는 자동으로 매겨집니다.

   복사해서 쓰는 템플릿:
   { year:2026,
     title:"챕터 제목",
     authors:["성, 이름","이름 성","Seungmo Kang"],
              // 1저자만 "성, 이름", 나머지는 "이름 성" 순서
              // "Seungmo Kang" / "Kang, Seungmo"는 자동 bold
              // ※ "Silverstein, Claire E." 처럼 쉼표가 들어간 이름은
              //   반드시 따옴표 하나 안에 넣으세요 (나누면 두 사람으로 표시됨)
     venue:"in 편저자 (ed.) 책 제목 · 출판사, pp. XX–XX · 2026",
     tags:["Book Chapter"] },

================================================================ */

const BOOK_CHAPTERS = [

  { year:2019,
    title:"Macroscopic Fundamental Diagram Validation for Collision Formation on Freeway Networks",
    authors:["Silverstein, Claire E.","Samer H. Hamdar","Seungmo Kang","Kitae Jang"],
    venue:"in Samer H. Hamdar (ed.) Traffic and Granular Flow '17 · Springer, pp. 107–116 · 2019",
    tags:["Book Chapter"] },

  { year:2009,
    title:"Optimizing the Biofuel Infrastructure: Transportation Networks and Biorefinery Locations in Illinois",
    authors:["Seungmo Kang","Hayri Önal","Yanfeng Ouyang","Jürgen Scheffran","Ü. Deniz Tursun"],
    venue:"in Madhu Khanna et al. (eds.) Handbook of Bioenergy Economics and Policy · Springer, pp. 151–173 · 2009",
    tags:["Book Chapter"] },

  { year:2007,
    title:"Location-Based Services: Enabling Technologies and a Concierge Service Model",
    authors:["Seungmo Kang","Tschangho John Kim","Sung-Gheel Jang"],
    venue:"in Harvey Miller (ed.) Societies and Cities in the Age of Instant Access · Springer, pp. 227–239 · 2007",
    tags:["Book Chapter"] },

];
