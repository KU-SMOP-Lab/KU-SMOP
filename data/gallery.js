/* ================================================================
   GALLERY DATA FILE — SMOP Lab
   ================================================================

   활동(이벤트) 하나에 사진 여러 장을 올리는 구조입니다.

   사진 추가 방법:
   1. 사진 파일들을 images/gallery/ 아래에 넣기
      (활동별로 폴더를 만들면 관리 편함: images/gallery/2026-winter-mt/1.jpg ...)
   2. 아래 GALLERY 배열 맨 앞(최신 활동이 위)에 추가:

   {
     title:    "활동 이름",              // 예: "2026 동계 MT"
     date:     "2026.02",               // 자유 형식 (예: "2025.10 · 제주")
     category: "lab-life" | "conferences" | "field-trips" | "celebrations",
     photos: [
       "images/gallery/폴더명/사진1.jpg",
       "images/gallery/폴더명/사진2.jpg",
       // ... 몇 장이든 가능. 첫 번째 사진이 제일 앞에 표시됨
     ],
   }

   ※ photos 를 [] 로 비워두면 "사진 준비 중" 자리표시자가 표시됩니다.
   ※ 화면에는 배열에 적힌 순서 그대로 (최신 활동이 위) 표시됩니다.

================================================================ */

const GALLERY = [

  // 각 활동의 photos 는 사진 파일을 폴더에 넣은 뒤 경로를 추가하세요.
  // 예: photos: [ "images/gallery/2603_동계MT/1.jpg", ... ]

  // ── 2026 ──────────────────────────────────────────────────────
  { title:"7월 정구홍 박사님 세미나 및 MT", date:"2026",
    category:"field-trips",
    photos:[
      "images/gallery/2605_세미MT/260722_세미MT_1.jpg",
      "images/gallery/2605_세미MT/260722_세미MT_2.jpg",
    ] },

  { title:"3월 연구실 풋살", date:"2026",
    category:"lab-life", photos:[] },

  { title:"동계 MT", date:"2026",
    category:"field-trips", photos:[] },

  { title:"BK21 Creative Graduate 시상식 및 글로벌 난제 해결형 프로그램 수여식", date:"2026",
    category:"celebrations", photos:[] },

  { title:"TRB Annual Meeting 포스터 발표 @Washington D.C., USA", date:"2026",
    category:"conferences", photos:[] },

  // ── 2025 ──────────────────────────────────────────────────────
  { title:"공공기술기반 시장연계 창업탐색 사업 대표수료", date:"2025",
    category:"lab-life", photos:[] },

  { title:"크리스마스 Secret Santa", date:"2025",
    category:"lab-life", photos:[] },

  { title:"NeurIPS 포스터 발표 @San Diego, CA, USA", date:"2025",
    category:"conferences", photos:[] },

  { title:"ACM SIGSPATIAL 포스터 발표 @Minneapolis, MN, USA", date:"2025",
    category:"conferences", photos:[] },

  { title:"Tarun Rambha 교수님 세미나", date:"2025",
    category:"lab-life", photos:[] },

  { title:"하계 MT", date:"2025",
    category:"field-trips", photos:[] },

  { title:"교통학회 회장상 & 최우수상", date:"2025",
    category:"celebrations", photos:[] },

  // ── 2024 ──────────────────────────────────────────────────────
  { title:"크리스마스 Secret Santa", date:"2024",
    category:"lab-life", photos:[] },

  { title:"지속가능원 체인지메이커스 최우수상", date:"2024",
    category:"celebrations", photos:[] },

  { title:"홈커밍데이", date:"2024",
    category:"lab-life", photos:[] },

  { title:"하계 MT", date:"2024",
    category:"field-trips", photos:[] },

  { title:"한국자동차연구원 Future Mobility 아이디어 경진대회 우수상", date:"2024",
    category:"celebrations", photos:[] },

  { title:"Lijun Sun 교수님, 최성진 교수님 세미나", date:"2024",
    category:"lab-life", photos:[] },

  { title:"Pateek Bansal 교수님 세미나", date:"2024",
    category:"lab-life", photos:[] },

  { title:"춘계ITS 우수논문상", date:"2024",
    category:"celebrations", photos:[] },

  { title:"서울시지역사회공헌 우수상", date:"2024",
    category:"celebrations", photos:[] },

  // ── 2023 ──────────────────────────────────────────────────────
  { title:"체인지메이커스 수상", date:"2023",
    category:"celebrations", photos:[] },

  { title:"크리스마스 Secret Santa", date:"2023",
    category:"lab-life", photos:[] },

  // ── 2022 ──────────────────────────────────────────────────────
  { title:"경주 교통학회", date:"2022",
    category:"conferences", photos:[] },

  { title:"봄맞이 연구실 단체사진", date:"2022",
    category:"lab-life", photos:[] },

  { title:"2022.08.22 오윤석 박사 졸업", date:"2022",
    category:"celebrations", photos:[] },

];
