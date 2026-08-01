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

  // ↓↓ 아래는 예시 항목들입니다 — 실제 활동/사진으로 교체하세요 ↓↓

  { title:"SMOP Lab Group Photo 2025", date:"2025",
    category:"lab-life", photos:[] },

  { title:"Award Ceremony", date:"2025",
    category:"celebrations", photos:[] },

  { title:"Conference Presentation", date:"NeurIPS 2025",
    category:"conferences", photos:[] },

  { title:"Lab Dinner", date:"2025",
    category:"lab-life", photos:[] },

  { title:"Field Research Survey", date:"2024",
    category:"field-trips", photos:[] },

  { title:"Graduation Celebration", date:"2024",
    category:"celebrations", photos:[] },

];
