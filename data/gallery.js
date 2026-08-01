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

  // ── 2026 ──────────────────────────────────────────────────────
  { title:"7월 정구홍 박사님 세미나 및 MT", date:"2026",
    category:"field-trips",
    photos:[
      "images/gallery/2605_세미MT/260722_세미MT_1.jpg",
      "images/gallery/2605_세미MT/260722_세미MT_2.jpg",
    ] },

  { title:"3월 연구실 풋살", date:"2026",
    category:"lab-life",
    photos:[
      "images/gallery/2604_풋살/3월_연구실_풋살.jpg",
    ] },

  { title:"동계 MT", date:"2026",
    category:"field-trips",
    photos:[
      "images/gallery/2603_동계MT/26동계MT_1.jpg",
      "images/gallery/2603_동계MT/26동계MT_2.jpg",
      "images/gallery/2603_동계MT/26동계MT_3.jpg",
      "images/gallery/2603_동계MT/26동계MT_4.jpg",
    ] },

  { title:"BK21 Creative Graduate 시상식 및 글로벌 난제 해결형 프로그램 수여식", date:"2026",
    category:"celebrations",
    photos:[
      "images/gallery/2602_BK21_시상식/26_BK21_시상식.jpg",
    ] },

  { title:"TRB Annual Meeting 포스터 발표 @Washington D.C., USA", date:"2026",
    category:"conferences",
    photos:[
      "images/gallery/2601_TRB/26_trb_1.jpg",
      "images/gallery/2601_TRB/26_trb_2.jpg",
    ] },

  // ── 2025 ──────────────────────────────────────────────────────
  { title:"공공기술기반 시장연계 창업탐색 사업 대표수료", date:"2025",
    category:"lab-life",
    photos:[
      "images/gallery/2507_텍스코어/25_텍스코어.jpg",
    ] },

  { title:"크리스마스 Secret Santa", date:"2025",
    category:"lab-life",
    photos:[
      "images/gallery/2506_시크릿산타/25_시크릿산타_1.jpg",
      "images/gallery/2506_시크릿산타/25_시크릿산타_2.jpg",
    ] },

  { title:"NeurIPS 포스터 발표 @San Diego, CA, USA", date:"2025",
    category:"conferences",
    photos:[
      "images/gallery/2505_NeurlPS/2025neurips.jpg",
    ] },

  { title:"ACM SIGSPATIAL 포스터 발표 @Minneapolis, MN, USA", date:"2025",
    category:"conferences",
    photos:[
      "images/gallery/2504_ACM/donghoon-acmsig-2025-1-1.jpg",
      "images/gallery/2504_ACM/donghoon-acmsig-2025-2-2.jpg",
    ] },

  { title:"Tarun Rambha 교수님 세미나", date:"2025",
    category:"lab-life",
    photos:[
      "images/gallery/2503_Tarun_Rambha_교수님_세미나/25_Tarun_Rambha_교수님세미나_1.jpg",
      "images/gallery/2503_Tarun_Rambha_교수님_세미나/25_Tarun_Rambha_교수님세미나_2.jpg",
    ] },

  { title:"하계 MT", date:"2025",
    category:"field-trips",
    photos:[
      "images/gallery/2502_하계MT/25_하계MT_1.jpg",
      "images/gallery/2502_하계MT/25_하계MT_2.jpg",
    ] },

  { title:"교통학회 회장상 & 최우수상", date:"2025",
    category:"celebrations",
    photos:[
      "images/gallery/2501_교통학회_수상/25_교통학회_1.jpg",
      "images/gallery/2501_교통학회_수상/25_교통학회_2.jpg",
      "images/gallery/2501_교통학회_수상/25_교통학회_3.jpg",
      "images/gallery/2501_교통학회_수상/25_교통학회_4.jpg",
    ] },

  // ── 2024 ──────────────────────────────────────────────────────
  { title:"크리스마스 Secret Santa", date:"2024",
    category:"lab-life",
    photos:[
      "images/gallery/2409_시크릿산타/24_시크릿산타.jpg",
    ] },

  { title:"지속가능원 체인지메이커스 최우수상", date:"2024",
    category:"celebrations",
    photos:[
      "images/gallery/2408_체인지메이커스_수상/24_체인지메이커스_1.png",
      "images/gallery/2408_체인지메이커스_수상/24_체인지메이커스_2.png",
    ] },

  { title:"홈커밍데이", date:"2024",
    category:"lab-life",
    photos:[
      "images/gallery/2407_홈커밍데이/24_홈커밍데이.jpg",
    ] },

  { title:"하계 MT", date:"2024",
    category:"field-trips",
    photos:[
      "images/gallery/2406_하계MT/24_하계MT_1.jpg",
      "images/gallery/2406_하계MT/24_하계MT_2.jpg",
      "images/gallery/2406_하계MT/24_하계MT_3.jpg",
      "images/gallery/2406_하계MT/24_하계MT_4.jpg",
    ] },

  { title:"한국자동차연구원 Future Mobility 아이디어 경진대회 우수상", date:"2024",
    category:"celebrations",
    photos:[
      "images/gallery/2405_Future_Mobility_수상/24_퓨처모빌리티_1.jpg",
      "images/gallery/2405_Future_Mobility_수상/24_퓨처모빌리티_2.jpg",
    ] },

  { title:"Lijun Sun 교수님, 최성진 교수님 세미나", date:"2024",
    category:"lab-life",
    photos:[
      "images/gallery/2404_Lijun_Sun_교수님_최성진교수님_세미나/24_Lijun_Sun_최성진_교수님_세미나_1.png",
      "images/gallery/2404_Lijun_Sun_교수님_최성진교수님_세미나/24_Lijun_Sun_최성진_교수님_세미나_2.png",
    ] },

  { title:"Pateek Bansal 교수님 세미나", date:"2024",
    category:"lab-life",
    photos:[
      "images/gallery/2403_Pateek_Bansal_교수님_세미나/24_Pateek_Bansal_교수님_세미나_1.jpg",
      "images/gallery/2403_Pateek_Bansal_교수님_세미나/24_Pateek_Bansal_교수님_세미나_2.jpg",
    ] },

  { title:"춘계ITS 우수논문상", date:"2024",
    category:"celebrations",
    photos:[
      "images/gallery/2402_춘계ITS_수상/24_춘계ITS.jpg",
    ] },

  { title:"서울시지역사회공헌 우수상", date:"2024",
    category:"celebrations",
    photos:[
      "images/gallery/2401_서울시지역사회공헌_수상/24_서울시지역사회공헌_우수상.jpg",
    ] },

  // ── 2023 ──────────────────────────────────────────────────────
  { title:"체인지메이커스 수상", date:"2023",
    category:"celebrations",
    photos:[
      "images/gallery/2302_체인지메이커스_수상/23_체인지메이커스_1.jpg",
      "images/gallery/2302_체인지메이커스_수상/23_체인지메이커스_2.jpg",
    ] },

  { title:"크리스마스 Secret Santa", date:"2023",
    category:"lab-life",
    photos:[
      "images/gallery/2301_시크릿산타/23_시크릿산타.jpg",
    ] },

  // ── 2022 ──────────────────────────────────────────────────────
  { title:"경주 교통학회", date:"2022",
    category:"conferences",
    photos:[
      "images/gallery/2203_경주_교통학회/22_경주교통학회_1.jpg",
      "images/gallery/2203_경주_교통학회/22_경주교통학회_2.jpg",
      "images/gallery/2203_경주_교통학회/22_경주교통학회_3.jpg",
      "images/gallery/2203_경주_교통학회/22_경주교통학회_4.jpg",
      "images/gallery/2203_경주_교통학회/22_경주교통학회_5.jpg",
      "images/gallery/2203_경주_교통학회/22_경주교통학회_6.jpg",
      "images/gallery/2203_경주_교통학회/22_경주교통학회_7.jpg",
      "images/gallery/2203_경주_교통학회/22_경주교통학회_8.jpg",
    ] },

  { title:"봄맞이 연구실 단체사진", date:"2022",
    category:"lab-life",
    photos:[
      "images/gallery/2202_봄맞이_연구실_단체사진/22_봄맞이_연구실단체사진_1.jpg",
      "images/gallery/2202_봄맞이_연구실_단체사진/22_봄맞이_연구실단체사진_2.jpg",
    ] },

  { title:"2022.08.22 오윤석 박사 졸업", date:"2022",
    category:"celebrations",
    photos:[
      "images/gallery/2201_오윤석_박사_졸업/22_오박사님_졸업_1.jpg",
      "images/gallery/2201_오윤석_박사_졸업/22_오박사님_졸업_2.jpg",
    ] },

];
