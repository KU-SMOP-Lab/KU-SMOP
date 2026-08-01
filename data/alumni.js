/* ================================================================
   ALUMNI DATA FILE — SMOP Lab
   ================================================================

   졸업생 추가 방법:
   {
     name:     "Name",
     nameKr:   "한국어 이름",   // 없으면 null
     year:     2024,            // 졸업 연도 (숫자)
     month:    2,               // 졸업 월 (숫자) — 화면에 "2024.02"로 표시됨
     yearLabel:"2013–2015",     // (선택) 연구교수 전용 기간 표시 — 이걸 쓰면 month는 빼세요
     degree:   "박사",           // "박사" / "석사" / "학사" / "연구교수" 중 하나만 적기
     position: "현재 소속 / 직위",       // (선택) 없으면 줄 자체를 빼면 됨
     thesis:   "졸업논문 제목",          // (선택) 없으면 줄 자체를 빼면 됨
     photo:    null,   // 사진 파일이 생기면 "images/members/alumni/파일명.jpg" 형태로 교체
   }

   position과 thesis는 적을 것만 적으면 됩니다.
   (둘 다 적어도 되고, 하나만 적어도 되고, 둘 다 없어도 됨)

   ★ 연구교수처럼 재직 기간으로 표시할 사람:
   yearLabel에 표시할 문구를 적고, year에는 정렬용으로 마지막 연도를 숫자로 적으세요.
   degree 자리에 "연구교수"라고 적으면 배지로 표시됩니다.
   예시:
   { name:"Name", nameKr:"이름", year:2015, yearLabel:"2013–2015",
     degree:"연구교수", position:"현재 소속", photo:null },

================================================================ */

const ALUMNI = [
  // 예시 1 — 현재 직장만: { name:"Name", nameKr:"한국이름", year:2024, degree:"Ph.D.", position:"Current position", photo: null },
  // 예시 2 — 논문 주제만: { name:"Name", nameKr:"한국이름", year:2024, degree:"M.S.", thesis:"Thesis title", photo: null },
  {
     name:     "Shin Hyoung Park",
     nameKr:   "박신형",
     year:     2011,                 // 정렬용 (기간의 마지막 연도)
     yearLabel:"2010–2011",          // 화면에 표시되는 기간
     degree:   "연구교수",           // ※ 직함 맞는지 확인 필요
     position: "서울시립대학교 교수",       // (선택) 없으면 줄 자체를 빼면 됨
     photo:    null,   // 사진 파일이 생기면 "images/members/alumni/파일명.jpg" 형태로 교체
   },
   {
     name:     "Dongkyu Oh",
     nameKr:   "오동규",   // 없으면 null
     year:     2013,            // 졸업 연도 (숫자)
     yearLabel:"2012–2013",  // (선택) 연구교수 전용 — 쓰려면 // 를 지우고, month 줄은 삭제
     degree:   "연구교수",           // ← "박사" / "석사" / "학사" / "연구교수" 중 하나로 바꾸기
     position: "한국철도기술연구원 선임연구원",       // (선택) 없으면 줄 자체를 빼면 됨
     photo:    null,   // 사진 파일이 생기면 "images/members/alumni/파일명.jpg" 형태로 교체
   },
   {
     name:     "Mohammad Hadi Almasi",
     nameKr:   "무하마드 하디 알마시",   // 없으면 null
     year:     2017,            // 졸업 연도 (숫자)
     yearLabel:"2016–2017",  // (선택) 연구교수 전용 — 쓰려면 // 를 지우고, month 줄은 삭제
     degree:   "연구교수",           // ← "박사" / "석사" / "학사" / "연구교수" 중 하나로 바꾸기
     position: "Islamic Azad University, Gorgan Branch 교수",       // (선택) 없으면 줄 자체를 빼면 됨
     photo:    null,   // 사진 파일이 생기면 "images/members/alumni/파일명.jpg" 형태로 교체
   },
   {
     name:     "Yoon-Young Choi",
     nameKr:   "최윤영",   // 없으면 null
     year:     2018,            // 졸업 연도 (숫자)
     yearLabel:"2018",  // (선택) 연구교수 전용 — 쓰려면 // 를 지우고, month 줄은 삭제
     degree:   "연구교수",           // ← "박사" / "석사" / "학사" / "연구교수" 중 하나로 바꾸기
     position: "삼성화재 자동차보험부문 모빌리티사업부",       // (선택) 없으면 줄 자체를 빼면 됨
     photo:    null,   // 사진 파일이 생기면 "images/members/alumni/파일명.jpg" 형태로 교체
   },
   {
     name:     "Young-Hyun Seo",
     nameKr:   "서영현",   // 없으면 null
     year:     2022,            // 졸업 연도 (숫자)
     yearLabel:"2020–2022",  // (선택) 연구교수 전용 — 쓰려면 // 를 지우고, month 줄은 삭제
     degree:   "연구교수",           // ← "박사" / "석사" / "학사" / "연구교수" 중 하나로 바꾸기
     position: "SK Telecom",       // (선택) 없으면 줄 자체를 빼면 됨
     photo:    null,   // 사진 파일이 생기면 "images/members/alumni/파일명.jpg" 형태로 교체
   },
   {
     name:     "Yoonseok Oh",
     nameKr:   "오윤석",   // 없으면 null
     year:     2024,            // 졸업 연도 (숫자)
     yearLabel:"2022 · 2022-2024",  // (선택) 연구교수 전용 — 쓰려면 // 를 지우고, month 줄은 삭제
     degree:   "박사 · 연구교수",           // ← "박사" / "석사" / "학사" / "연구교수" 중 하나로 바꾸기
     position: "삼성화재 자동차보험부문 모빌리티사업부",       // (선택) 없으면 줄 자체를 빼면 됨
     photo:    null,   // 사진 파일이 생기면 "images/members/alumni/파일명.jpg" 형태로 교체
   },
   {
     name:     "Sujin Park",
     nameKr:   "박수진",   // 없으면 null
     year:     2025,            // 졸업 연도 (숫자)
     yearLabel:"2022–2025",  // (선택) 연구교수 전용 — 쓰려면 // 를 지우고, month 줄은 삭제
     degree:   "연구교수",           // ← "박사" / "석사" / "학사" / "연구교수" 중 하나로 바꾸기
     position: "남양주 시정연구원 연구위원",       // (선택) 없으면 줄 자체를 빼면 됨
     photo:    null,   // 사진 파일이 생기면 "images/members/alumni/파일명.jpg" 형태로 교체
   },
   {
     name:     "Minho Lee",
     nameKr:   "이민호",   // 없으면 null
     year:     2013,            // 졸업 연도 (숫자)
     month:    2,               // 졸업 월 (숫자) — 화면에 "2024.02"로 표시됨
     degree:   "석사",           // ← "박사" / "석사" / "학사" / "연구교수" 중 하나로 바꾸기
     position: "서울연구원",       // (선택) 없으면 줄 자체를 빼면 됨
     photo:    null,   // 사진 파일이 생기면 "images/members/alumni/파일명.jpg" 형태로 교체
   },
   {
     name:     "Yerang Shin",
     nameKr:   "신예랑",   // 없으면 null
     year:     2014,            // 졸업 연도 (숫자)
     month:    2,               // 졸업 월 (숫자) — 화면에 "2024.02"로 표시됨
     degree:   "석사",           // ← "박사" / "석사" / "학사" / "연구교수" 중 하나로 바꾸기
     position: "샘표식품",       // (선택) 없으면 줄 자체를 빼면 됨
     photo:    null,   // 사진 파일이 생기면 "images/members/alumni/파일명.jpg" 형태로 교체
   },
   {
     name:     "Jongwook Park",
     nameKr:   "박종욱",   // 없으면 null
     year:     2015,            // 졸업 연도 (숫자)
     month:    2,               // 졸업 월 (숫자) — 화면에 "2024.02"로 표시됨
     degree:   "석사",           // ← "박사" / "석사" / "학사" / "연구교수" 중 하나로 바꾸기
     position: "경찰청",       // (선택) 없으면 줄 자체를 빼면 됨
     photo:    null,   // 사진 파일이 생기면 "images/members/alumni/파일명.jpg" 형태로 교체
   },
   {
     name:     "Cheongrae Kim",
     nameKr:   "김청래",   // 없으면 null
     year:     2015,            // 졸업 연도 (숫자)
     month:    2,               // 졸업 월 (숫자) — 화면에 "2024.02"로 표시됨
     degree:   "석사",           // ← "박사" / "석사" / "학사" / "연구교수" 중 하나로 바꾸기
     position: "한국도로공사",       // (선택) 없으면 줄 자체를 빼면 됨
     photo:    null,   // 사진 파일이 생기면 "images/members/alumni/파일명.jpg" 형태로 교체
   },
   {
     name:     "Umji Park",
     nameKr:   "박엄지",   // 없으면 null
     year:     2016,            // 졸업 연도 (숫자)
     month:    8,               // 졸업 월 (숫자) — 화면에 "2024.02"로 표시됨
     degree:   "석사",           // ← "박사" / "석사" / "학사" / "연구교수" 중 하나로 바꾸기
     position: "경찰청",       // (선택) 없으면 줄 자체를 빼면 됨
     photo:    null,   // 사진 파일이 생기면 "images/members/alumni/파일명.jpg" 형태로 교체
   },
   {
     name:     "Yegin Na",
     nameKr:   "나예진",   // 없으면 null
     year:     2017,            // 졸업 연도 (숫자)
     month:    8,               // 졸업 월 (숫자) — 화면에 "2024.02"로 표시됨
     degree:   "석사",           // ← "박사" / "석사" / "학사" / "연구교수" 중 하나로 바꾸기
     position: "스튜디오 갈릴레이",       // (선택) 없으면 줄 자체를 빼면 됨
     photo:    null,   // 사진 파일이 생기면 "images/members/alumni/파일명.jpg" 형태로 교체
   },
   {
     name:     "YUAN YIN",
     nameKr:   "윤우연",   // 없으면 null
     year:     2017,            // 졸업 연도 (숫자)
     month:    8,               // 졸업 월 (숫자) — 화면에 "2024.02"로 표시됨
     degree:   "석사",           // ← "박사" / "석사" / "학사" / "연구교수" 중 하나로 바꾸기
     position: "아트박스",       // (선택) 없으면 줄 자체를 빼면 됨
     photo:    null,   // 사진 파일이 생기면 "images/members/alumni/파일명.jpg" 형태로 교체
   },
   {
     name:     "Heeseung Shon",
     nameKr:   "손희승",   // 없으면 null
     year:     2019,            // 졸업 연도 (숫자)
     month:    2,               // 졸업 월 (숫자) — 화면에 "2024.02"로 표시됨
     degree:   "석사",           // ← "박사" / "석사" / "학사" / "연구교수" 중 하나로 바꾸기
     position: "University of Illinois at Chicago (UIC) Postdoctoral Researcher",       // (선택) 없으면 줄 자체를 빼면 됨
     photo:    null,   // 사진 파일이 생기면 "images/members/alumni/파일명.jpg" 형태로 교체
   },
   {
     name:     "Hyunkeun Bae",
     nameKr:   "배현근",   // 없으면 null
     year:     2019,            // 졸업 연도 (숫자)
     month:    8,               // 졸업 월 (숫자) — 화면에 "2024.02"로 표시됨
     degree:   "석사",           // ← "박사" / "석사" / "학사" / "연구교수" 중 하나로 바꾸기
     position: "과학기술정책연구원",       // (선택) 없으면 줄 자체를 빼면 됨
     photo:    null,   // 사진 파일이 생기면 "images/members/alumni/파일명.jpg" 형태로 교체
   },
   {
     name:     "Jinju Kim",
     nameKr:   "김진주",   // 없으면 null
     year:     2020,            // 졸업 연도 (숫자)
     month:    8,               // 졸업 월 (숫자) — 화면에 "2024.02"로 표시됨
     degree:   "석사",           // ← "박사" / "석사" / "학사" / "연구교수" 중 하나로 바꾸기
     position: "한국교통연구원",       // (선택) 없으면 줄 자체를 빼면 됨
     photo:    null,   // 사진 파일이 생기면 "images/members/alumni/파일명.jpg" 형태로 교체
   },
   {
     name:     "Sungmin Kim",
     nameKr:   "김성민",   // 없으면 null
     year:     2023,            // 졸업 연도 (숫자)
     month:    2,               // 졸업 월 (숫자) — 화면에 "2024.02"로 표시됨
     degree:   "석사",           // ← "박사" / "석사" / "학사" / "연구교수" 중 하나로 바꾸기
     position: "라온로드",       // (선택) 없으면 줄 자체를 빼면 됨
     photo:    null,   // 사진 파일이 생기면 "images/members/alumni/파일명.jpg" 형태로 교체
   },
   {
     name:     "Hoonyong Shim",
     nameKr:   "심훈용",   // 없으면 null
     year:     2024,            // 졸업 연도 (숫자)
     month:    2,               // 졸업 월 (숫자) — 화면에 "2024.02"로 표시됨
     degree:   "석사",           // ← "박사" / "석사" / "학사" / "연구교수" 중 하나로 바꾸기
     position: "KT",       // (선택) 없으면 줄 자체를 빼면 됨
     thesis:   "대리운전 데이터를 활용한 시공간 특성 분석 및 예약 가격 최적화",          // (선택) 없으면 줄 자체를 빼면 됨
     photo:    null,   // 사진 파일이 생기면 "images/members/alumni/파일명.jpg" 형태로 교체
   },
   {
     name:     "Hyun Park",
     nameKr:   "박현",   // 없으면 null
     year:     2025,            // 졸업 연도 (숫자)
     month:    2,               // 졸업 월 (숫자) — 화면에 "2024.02"로 표시됨
     degree:   "석사",           // ← "박사" / "석사" / "학사" / "연구교수" 중 하나로 바꾸기
     position: "한국교통연구원",       // (선택) 없으면 줄 자체를 빼면 됨
     thesis:   "퀵커머스 서비스의 물류비용 절감을 위한 동기 및 비동기 환적 배송 문제",          // (선택) 없으면 줄 자체를 빼면 됨
     photo:    null,   // 사진 파일이 생기면 "images/members/alumni/파일명.jpg" 형태로 교체
   },
   {
     name:     "Hyunhoo Joh",
     nameKr:   "조현후",   // 없으면 null
     year:     2025,            // 졸업 연도 (숫자)
     month:    8,               // 졸업 월 (숫자) — 화면에 "2024.02"로 표시됨
     degree:   "석사",           // ← "박사" / "석사" / "학사" / "연구교수" 중 하나로 바꾸기
     position: "KDI 공공투자관리센터",       // (선택) 없으면 줄 자체를 빼면 됨
     thesis:   "유동적 재배치, 이질적 차량군 및 다중 규격 컨테이너를 고려한 ADMM 기반 시간 의존적 내륙 컨테이너 운송 최적화",          // (선택) 없으면 줄 자체를 빼면 됨
     photo:    null,   // 사진 파일이 생기면 "images/members/alumni/파일명.jpg" 형태로 교체
   },
   {
     name:     "Siwon Jang",
     nameKr:   "장시원",   // 없으면 null
     year:     2026,            // 졸업 연도 (숫자)
     month:    2,               // 졸업 월 (숫자) — 화면에 "2024.02"로 표시됨
     degree:   "석사",           // ← "박사" / "석사" / "학사" / "연구교수" 중 하나로 바꾸기
     // position: "TBD",       // (선택) 없으면 줄 자체를 빼면 됨
     thesis:   "중간 집적 시설과 시간 창을 고려한 다계층 아크 라우팅 문제 기반의 폐기물 수거 경로 최적화",          // (선택) 없으면 줄 자체를 빼면 됨
     photo:    null,   // 사진 파일이 생기면 "images/members/alumni/파일명.jpg" 형태로 교체
   },
   {
     name:     "Seunghun Baek",
     nameKr:   "백승훈",
     year:     2026,            // 졸업 연도 (숫자)
     month:    2,               // 졸업 월 → 화면에 "2026.02"로 표시
     degree:   "석사",           // ※ 실제 학위로 바꾸기 ("박사" / "석사" / "학사")
     position: "현대글로비스",       // (선택) 없으면 줄 자체를 빼면 됨
     thesis:   "비호환성을 고려한 승객과 물품을 동시에 운송하는 최적 Ride-Sharing 문제 해결을 위한 강화학습 기반 Adaptive Large Neighborhood Search 알고리즘 개발",          // (선택) 없으면 줄 자체를 빼면 됨
     photo:    null,   // 사진 파일이 생기면 "images/members/alumni/파일명.jpg" 형태로 교체
   }
];
