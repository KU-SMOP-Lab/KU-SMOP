/* ================================================================
   NEWS DATA FILE — SMOP Lab
   ================================================================

   연구실 소식(글)과 활동 사진을 한 곳에서 관리합니다.
   News 페이지와 홈 화면의 Recent News가 모두 이 파일을 사용합니다.

   ── 새 소식 추가하는 방법 ──────────────────────────────────────
   아래 NEWS 배열 맨 앞(최신순)에 추가하세요.

   ① 글만 올릴 때
   { date:"2026.08", title:"소식 제목",
     desc:"소식 내용",
     photos:[] },

   ② 사진만 올릴 때
   { date:"2026.08", title:"활동 이름", desc:"",
     photos:[
       "images/gallery/2607_홈커밍데이/260828_홈커밍데이_1.jpg",
       "images/gallery/2607_홈커밍데이/260828_홈커밍데이_2.jpg",
     ] },

   ③ 글과 사진을 같이 올릴 때
   { date:"2026.08", title:"활동 이름",
     desc:"소식 내용",
     photos:[
       "images/gallery/2607_홈커밍데이/260828_홈커밍데이_1.jpg",
     ] },

   ── 사진 추가하는 방법 ────────────────────────────────────────
   1. images/gallery/ 아래에 활동 폴더를 만들고 사진을 넣기
      폴더 이름 규칙: 연도 2자리 + 순번 2자리 + 활동명
      예) images/gallery/2603_동계MT/26동계MT_1.jpg
   2. 위 형식대로 photos 배열에 경로를 적기

   ── 알아두면 좋은 것 ──────────────────────────────────────────
   ※ date 는 "2026.08" 또는 "2026" 처럼 적습니다.
     연도별 구분은 date 앞 4자리에서 자동으로 뽑아 쓰므로
     따로 지정할 것이 없습니다.
   ※ desc 를 "" 로 비우면 글 없이 사진만 표시됩니다.
   ※ photos 를 [] 로 비우면 사진 없이 글만 표시됩니다.
   ※ 사진은 적은 순서대로 표시되고, 클릭하면 크게 볼 수 있습니다.
   ※ 세로로 긴 사진은 자동으로 인식되어 세로 칸에 표시됩니다.
   ※ 사진 경로는 확장자 대소문자(.jpg / .JPG)까지 파일명과 똑같이 적어야 합니다.
   ※ 홈 화면에는 맨 앞 4건만 표시됩니다.

   ⚠️  사진 원본은 연구실 서버(일반행정폴더) 연구실홈페이지 경로에 보관하고,
      홈페이지에는 압축본(500KB 이하)만 올려주세요.

================================================================ */

const NEWS = [

  // ── 2026 ──────────────────────────────────────────────────────
  { date:"2026.08", title:"홈커밍데이", desc:"",
    photos:[
      "images/gallery/2607_홈커밍데이/260828_홈커밍데이_3.jpg",
      "images/gallery/2607_홈커밍데이/260828_홈커밍데이_1.jpg",
      "images/gallery/2607_홈커밍데이/260828_홈커밍데이_2.jpg",
    ] },

  { date:"2026.08", title:"2026년 이공분야 학술지원사업 선정 - 유승희",
    desc:"유승희 박사과정이 한국연구재단 2026년 이공분야 학술연구지원사업(박사과정생연구장려금지원)에 선정되었다.",
    photos:[] },

  { date:"2026.08", title:"8월 연구실 풋살", desc:"",
    photos:[
      "images/gallery/2606_8월_풋살/8월_연구실_풋살.jpg",
    ] },

  { date:"2026.07", title:"7월 정구홍 박사님 세미나 및 MT", desc:"",
    photos:[
      "images/gallery/2605_세미MT/260722_세미MT_1.jpg",
      "images/gallery/2605_세미MT/260722_세미MT_2.jpg",
    ] },

  { date:"2026.03", title:"3월 연구실 풋살", desc:"",
    photos:[
      "images/gallery/2604_풋살/3월_연구실_풋살.jpg",
    ] },

  { date:"2026.02", title:"동계 MT", desc:"",
    photos:[
      "images/gallery/2603_동계MT/26동계MT_1.jpg",
      "images/gallery/2603_동계MT/26동계MT_2.jpg",
      "images/gallery/2603_동계MT/26동계MT_3.jpg",
      "images/gallery/2603_동계MT/26동계MT_4.jpg",
    ] },

  { date:"2026.02", title:"BK21 Creative Graduate 시상식 및 글로벌 난제 해결형 프로그램 수여식", desc:"",
    photos:[
      "images/gallery/2602_BK21_시상식/26_BK21_시상식.jpg",
    ] },

  { date:"2026.01", title:"TRB Annual Meeting 포스터 발표 @Washington D.C., USA", desc:"",
    photos:[
      "images/gallery/2601_TRB/26_trb_1.jpg",
      "images/gallery/2601_TRB/26_trb_2.jpg",
    ] },

  // ── 2025 ──────────────────────────────────────────────────────
  { date:"2025", title:"공공기술기반 시장연계 창업탐색 사업 대표수료", desc:"",
    photos:[
      "images/gallery/2507_텍스코어/25_텍스코어.jpg",
    ] },

  { date:"2025.12", title:"크리스마스 Secret Santa", desc:"",
    photos:[
      "images/gallery/2506_시크릿산타/25_시크릿산타_1.jpg",
      "images/gallery/2506_시크릿산타/25_시크릿산타_2.jpg",
    ] },

  { date:"2025.12", title:"NeurIPS 포스터 발표 @San Diego, CA, USA", desc:"",
    photos:[
      "images/gallery/2505_NeurlPS/2025neurips.jpg",
    ] },

  { date:"2025.11", title:"ACM SIGSPATIAL 포스터 발표 @Minneapolis, MN, USA", desc:"",
    photos:[
      "images/gallery/2504_ACM/donghoon-acmsig-2025-1-1.jpg",
      "images/gallery/2504_ACM/donghoon-acmsig-2025-2-2.jpg",
    ] },

  { date:"2025", title:"Tarun Rambha 교수님 세미나", desc:"",
    photos:[
      "images/gallery/2503_Tarun_Rambha_교수님_세미나/25_Tarun_Rambha_교수님세미나_1.jpg",
      "images/gallery/2503_Tarun_Rambha_교수님_세미나/25_Tarun_Rambha_교수님세미나_2.jpg",
    ] },

  { date:"2025", title:"하계 MT", desc:"",
    photos:[
      "images/gallery/2502_하계MT/25_하계MT_1.jpg",
      "images/gallery/2502_하계MT/25_하계MT_2.jpg",
    ] },

  { date:"2025.02", title:"교통학회 회장상 & 최우수상", desc:"",
    photos:[
      "images/gallery/2501_교통학회_수상/25_교통학회_1.jpg",
      "images/gallery/2501_교통학회_수상/25_교통학회_2.jpg",
      "images/gallery/2501_교통학회_수상/25_교통학회_3.jpg",
      "images/gallery/2501_교통학회_수상/25_교통학회_4.jpg",
    ] },

  // ── 2024 ──────────────────────────────────────────────────────
  { date:"2024.12", title:"크리스마스 Secret Santa", desc:"",
    photos:[
      "images/gallery/2409_시크릿산타/24_시크릿산타.jpg",
    ] },

  { date:"2024", title:"지속가능원 체인지메이커스 최우수상", desc:"",
    photos:[
      "images/gallery/2408_체인지메이커스_수상/24_체인지메이커스_1.png",
      "images/gallery/2408_체인지메이커스_수상/24_체인지메이커스_2.png",
    ] },

  { date:"2024", title:"홈커밍데이", desc:"",
    photos:[
      "images/gallery/2407_홈커밍데이/24_홈커밍데이.jpg",
    ] },

  { date:"2024", title:"하계 MT", desc:"",
    photos:[
      "images/gallery/2406_하계MT/24_하계MT_1.jpg",
      "images/gallery/2406_하계MT/24_하계MT_2.jpg",
      "images/gallery/2406_하계MT/24_하계MT_3.jpg",
      "images/gallery/2406_하계MT/24_하계MT_4.jpg",
    ] },

  { date:"2024", title:"한국자동차연구원 Future Mobility 아이디어 경진대회 우수상", desc:"",
    photos:[
      "images/gallery/2405_Future_Mobility_수상/24_퓨처모빌리티_1.jpg",
      "images/gallery/2405_Future_Mobility_수상/24_퓨처모빌리티_2.jpg",
    ] },

  { date:"2024", title:"Lijun Sun 교수님, 최성진 교수님 세미나", desc:"",
    photos:[
      "images/gallery/2404_Lijun_Sun_교수님_최성진교수님_세미나/24_Lijun_Sun_최성진_교수님_세미나_1.png",
      "images/gallery/2404_Lijun_Sun_교수님_최성진교수님_세미나/24_Lijun_Sun_최성진_교수님_세미나_2.png",
    ] },

  { date:"2024", title:"Pateek Bansal 교수님 세미나", desc:"",
    photos:[
      "images/gallery/2403_Pateek_Bansal_교수님_세미나/24_Pateek_Bansal_교수님_세미나_1.jpg",
      "images/gallery/2403_Pateek_Bansal_교수님_세미나/24_Pateek_Bansal_교수님_세미나_2.jpg",
    ] },

  { date:"2024", title:"춘계ITS 우수논문상", desc:"",
    photos:[
      "images/gallery/2402_춘계ITS_수상/24_춘계ITS.jpg",
    ] },

  { date:"2024", title:"서울시지역사회공헌 우수상", desc:"",
    photos:[
      "images/gallery/2401_서울시지역사회공헌_수상/24_서울시지역사회공헌_우수상.jpg",
    ] },

  // ── 2023 ──────────────────────────────────────────────────────
  { date:"2023", title:"체인지메이커스 수상", desc:"",
    photos:[
      "images/gallery/2302_체인지메이커스_수상/23_체인지메이커스_1.jpg",
      "images/gallery/2302_체인지메이커스_수상/23_체인지메이커스_2.jpg",
    ] },

  { date:"2023.12", title:"크리스마스 Secret Santa", desc:"",
    photos:[
      "images/gallery/2301_시크릿산타/23_시크릿산타.jpg",
    ] },

  // ── 2022 ──────────────────────────────────────────────────────
  { date:"2022", title:"경주 교통학회", desc:"",
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

  { date:"2022", title:"봄맞이 연구실 단체사진", desc:"",
    photos:[
      "images/gallery/2202_봄맞이_연구실_단체사진/22_봄맞이_연구실단체사진_1.jpg",
      "images/gallery/2202_봄맞이_연구실_단체사진/22_봄맞이_연구실단체사진_2.jpg",
    ] },

  { date:"2022.08", title:"2022.08.22 오윤석 박사 졸업", desc:"",
    photos:[
      "images/gallery/2201_오윤석_박사_졸업/22_오박사님_졸업_1.jpg",
      "images/gallery/2201_오윤석_박사_졸업/22_오박사님_졸업_2.jpg",
    ] },

];
