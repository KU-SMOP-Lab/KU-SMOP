/* ================================================================
   PROFESSOR DATA FILE — SMOP Lab
   ================================================================
   교수님 페이지(홈페이지 > PROFESSOR)의 모든 내용이 이 파일에 있습니다.
   이 파일만 고치면 되고, 다른 파일은 건드릴 필요가 없습니다.

   ── 이 파일의 구성 ─────────────────────────────────────────
     기본 정보    이름 · 직함 · 사진 · 연락처   → 페이지 왼쪽에 표시
     bio          소개 문단                     → Biography
     education    학력                          → Education
     career       경력                          → Experience
     awards       수상                          → Awards
     services     학회 편집위원 · 위원회 활동   → 기타 경력

   ── 수정할 때 지켜야 할 것 ─────────────────────────────────
   1. 글자는 반드시 큰따옴표 "..." 로 감쌉니다.
   2. 각 줄 끝과 항목 끝의 쉼표( , )를 빠뜨리지 마세요.
      → 이 두 가지가 어긋나면 페이지 내용이 안 나옵니다.
        (그런 경우 화면 위에 빨간 안내창이 떠서 알려줍니다)
   3. 항목을 지우고 싶으면 그 줄 맨 앞에 // 를 붙이면 화면에서 사라집니다.
   4. 목록(education, career, awards, services)은
      { ... }, 한 덩어리가 화면의 한 줄입니다.
      적은 순서 그대로 화면에 표시되므로, 새 항목은 보통 맨 위에 넣습니다.
   5. 수정한 뒤에는 professor/index.html 을 더블클릭해 화면을 꼭 확인하세요.

   ※ 목록이 비어 있으면(예: awards: []) 그 섹션 자체가 화면에 안 나옵니다.
================================================================ */

const PROFESSOR = {

  /* ── 기본 정보 ──────────────────────────────────────────────
     페이지 왼쪽(사진 아래)에 표시됩니다.
     title 안의 <br> 은 "여기서 줄을 바꾼다"는 뜻입니다.
     사진을 바꾸려면 새 사진을 images/professor/ 폴더에 넣고
     아래 photo 의 파일 이름을 그 파일과 똑같이 적으세요.
     (.jpg / .JPG 처럼 대소문자까지 같아야 합니다)
  ─────────────────────────────────────────────────────────── */
  name:   "Seungmo Kang",
  nameKr: "강승모",
  title:  "Professor<br>School of Civil, Environmental and Architectural Engineering<br>Korea University",
  photo:  "images/professor/강승모.jpg",
  email:  "s_kang@korea.ac.kr",
  phone:  "+82-2-3290-4862",
  office: "Seoul, Korea",

  /* ── Biography (소개) ───────────────────────────────────────
     ` ` (백틱) 로 감싼 덩어리 하나가 화면의 한 문단입니다.
     문단을 추가하려면 아래처럼 덩어리를 하나 더 쓰고 쉼표로 구분하세요.

       bio: [
         `첫 번째 문단입니다.`,
         `두 번째 문단입니다.`,
       ],

     문장 안에서 <em>기울임</em>, <strong>굵게</strong> 를 쓸 수 있습니다.
  ─────────────────────────────────────────────────────────── */
  bio: [
    `Professor Kang's research interests lie in developing mathematical models to address
     challenging problems that arise in the fields of transportation planning and logistics.
     The overall theme of his research is to improve passengers and freight movement efficiency
     in complex transportation systems, by the better provision of least-cost vehicle routes,
     allocation of limited infrastructure resources, and characterization of performance and
     behavior of various system elements.`,
  ],

  /* ── Education (학력) ───────────────────────────────────────
     복사해서 쓰는 한 줄:
     { degree:"Ph.D.", school:"학교 이름", field:"전공", year:"2008" },

     degree  왼쪽 회색 칸에 들어가는 학위 (Ph.D. / M.S. / B.S.)
     year    연도는 숫자가 아니라 "2008" 처럼 따옴표 안에 적습니다
  ─────────────────────────────────────────────────────────── */
  education: [
    { degree:"Ph.D.", school:"University of Illinois at Urbana-Champaign", field:"Civil Engineering", year:"2008" },
    { degree:"M.S.",  school:"Seoul National University", field:"Civil Engineering (Urban Engineering Major)", year:"2000" },
    { degree:"B.S.",  school:"Seoul National University", field:"Civil Engineering (Urban Engineering Major)", year:"1998" },
  ],

  /* ── Experience (경력) ──────────────────────────────────────
     복사해서 쓰는 한 줄:
     { period:"Mar. 2026 – present", role:"직함", org:"소속 기관" },

     period  왼쪽 칸의 기간. 형식은 자유이며 적은 그대로 표시됩니다.
             (현재 진행 중이면 "– present" 로 적습니다)
     role    직함     org  소속 기관
     새 경력은 보통 맨 위에 추가합니다.
  ─────────────────────────────────────────────────────────── */
  career: [
    { period:"Sep. 2019 – present",    role:"Professor",                          org:"Korea University" },
    { period:"2025 – 2027",            role:"Vice President",                     org:"Korean Society of Transportation" },
    { period:"Jan. 2025 – present",    role:"Associate Dean, University College", org:"Korea University" },
    { period:"Sep. 2014 – Aug. 2019",  role:"Associate Professor",                org:"Korea University" },
    { period:"Mar. 2010 – Aug. 2014",  role:"Assistant Professor",                org:"Korea University" },
    { period:"Jan. 2023 – Dec. 2023",  role:"Visiting Scholar",                   org:"Institute of Transport Studies, University of California at Irvine" },
    { period:"May 2008 – Jan. 2010",   role:"Postdoctoral Research Associate",    org:"Energy Biosciences Institute, University of Illinois at Urbana-Champaign" },
    { period:"Jan. 2004 – May 2008",   role:"Teaching and Research Assistant",    org:"University of Illinois at Urbana-Champaign" },
    { period:"Aug. 2000 – Jun. 2003",  role:"Civil Engineering Supervisor",       org:"Republic of Korea Navy" },
    { period:"Mar. 1998 – Feb. 2000",  role:"Research Assistant",                 org:"Seoul National University" },
  ],

  /* ── Awards (수상) ──────────────────────────────────────────
     복사해서 쓰는 한 줄:
     { year:"Mar. 2026", name:"상 이름", org:"주는 기관" },

     year  "2026" 처럼 연도만 적어도 되고, "Mar. 2026" 처럼 월까지 적어도 됩니다.
     새 수상은 보통 맨 위에 추가합니다.
  ─────────────────────────────────────────────────────────── */
  awards: [
    { year:"Apr. 2020", name:"Certificate of Achievement",              org:"World Road Association (PIARC)" },
    { year:"Mar. 2019", name:"Minister's Citation (국토교통부 장관표창)", org:"Ministry of Land, Infrastructure and Transport, Republic of Korea" },
    { year:"May 2016",  name:"Crimson Professor Award of Excellence",   org:"Korea University TechnoComplex Foundation" },
    { year:"Feb. 2014", name:"Best Research Paper Award (대한교통학회 학술상)", org:"Korea Society of Transportation" },
  ],

  /* ── 기타 경력 (학회 편집위원 · 위원회 활동) ──────────────────
     복사해서 쓰는 한 줄:
     { period:"2026 – 2028", role:"직책", org:"기관 이름" },

     국문·영문 모두 가능하며, 적은 순서 그대로 표시됩니다.
     예) { period:"2026 – 2028", role:"이사", org:"한국도시부동산학회" },
  ─────────────────────────────────────────────────────────── */
  services: [
    { period:"2020 – present", role:"Associate Editor",                     org:"Asian Transport Studies" },
    { period:"2020 – present", role:"Topic Editor, Editorial Board",        org:"Applied Sciences (SCIE)" },
    { period:"2020 – present", role:"Review Editor, Editorial Board",       org:"Frontiers in Future Transportation" },
    { period:"2017 – 2020",    role:"Associate Editor",                     org:"International Journal of Urban Sciences (SSCI)" },
    { period:"2016 – 2019",    role:"National Member (대한민국 대표), TC B.3", org:"World Road Association (PIARC)" },

    { period:"2026 – 2028",       role:"결함기술분석전문위원회 위원",        org:"한국교통안전공단" },
    { period:"2026 – 2028",       role:"이사",                              org:"한국도시부동산학회" },
    { period:"2026 – 2028",       role:"서울지방국토관리청 기술자문위원회 위원", org:"국토교통부" },
    { period:"2026 – 2027",       role:"대한교통학회지 편집위원장",          org:"대한교통학회" },
    { period:"2026",              role:"서울서리풀 1,2 공공주택지구 총괄 계획가", org:"LH" },
    { period:"2025 – 2027",       role:"자율주행자동차 사고조사위원회 위원",  org:"국토교통부" },
    { period:"2025 – 2026",       role:"기술자문위원회 도로 및 교통 분야 위원", org:"LH" },
    { period:"2013 – 2017, 2025", role:"설계심의분과위원",                   org:"한국도로공사" },
    { period:"2021 – 2022",       role:"중앙건설기술심의위원회 설계심의분과위원", org:"국토교통부" },
    { period:"2021 – 2022",       role:"총무이사",                          org:"한국공학교육학회" },
    { period:"2019 – present",    role:"사업개발 분야 전문심의·평가위원",     org:"한국철도공사" },
    { period:"2019 – present",    role:"주한미군이전사업단 사업관리 자문위원", org:"국방부" },
    { period:"2019 – present",    role:"국민생명지키기추진단 교통안전전문가협의회 위원", org:"국무조정실" },
    { period:"2019 – present",    role:"민간투자사업 평가위원",              org:"서울특별시" },
    { period:"2019 – present",    role:"이사",                              org:"대한토목학회" },
    { period:"2018 – present",    role:"상임이사",                          org:"대한교통학회" },
    { period:"2018 – 2020",       role:"기술심사평가위원",                   org:"LH공사" },
    { period:"2018 – 2020",       role:"교통영향평가 심의위원",              org:"서울특별시" },
    { period:"2017 – present",    role:"건설디자인위원",                     org:"SH공사" },
    { period:"2014 – present",    role:"설계자문위원회 위원",                org:"새만금개발청" },
    { period:"2011 – 2019",       role:"대중교통시책평가위원",               org:"교통안전공단" },
  ],

};
