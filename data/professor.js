/* ================================================================
   PROFESSOR DATA FILE — SMOP Lab
   ================================================================
   교수님 프로필 정보를 여기서만 수정하세요.
   HTML 파일은 건드릴 필요 없습니다.
================================================================ */

const PROFESSOR = {

  /* ── 기본 정보 ──────────────────────────────────────────────── */
  name:   "Seungmo Kang",
  nameKr: "강승모",
  title:  "Professor<br>School of Civil, Environmental and Architectural Engineering<br>Korea University",
  photo:  "images/professor/강승모.jpg",
  email:  "s_kang@korea.ac.kr",
  phone:  "+82-2-3290-4862",
  office: "Seoul, Korea",

  /* ── Biography ──────────────────────────────────────────────
     문단 배열로 작성. 각 항목이 하나의 <p> 태그가 됩니다.
  ─────────────────────────────────────────────────────────── */
  bio: [
    `Professor Kang's research interests lie in developing mathematical models to address
     challenging problems that arise in the fields of transportation planning and logistics.
     The overall theme of his research is to improve passengers and freight movement efficiency
     in complex transportation systems, by the better provision of least-cost vehicle routes,
     allocation of limited infrastructure resources, and characterization of performance and
     behavior of various system elements.`,
  ],

  /* ── Education ──────────────────────────────────────────────
     형식: { degree, school, field, year }
  ─────────────────────────────────────────────────────────── */
  education: [
    { degree:"Ph.D.", school:"University of Illinois at Urbana-Champaign", field:"Civil Engineering", year:"2008" },
    { degree:"M.S.",  school:"Seoul National University", field:"Civil Engineering (Urban Engineering Major)", year:"2000" },
    { degree:"B.S.",  school:"Seoul National University", field:"Civil Engineering (Urban Engineering Major)", year:"1998" },
  ],

  /* ── Experience ─────────────────────────────────────────────
     형식: { period, role, org }
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

  /* ── Awards ─────────────────────────────────────────────────
     형식: { year, name, org }
  ─────────────────────────────────────────────────────────── */
  awards: [
    { year:"Apr. 2020", name:"Certificate of Achievement",              org:"World Road Association (PIARC)" },
    { year:"Mar. 2019", name:"Minister's Citation (국토교통부 장관표창)", org:"Ministry of Land, Infrastructure and Transport, Republic of Korea" },
    { year:"May 2016",  name:"Crimson Professor Award of Excellence",   org:"Korea University TechnoComplex Foundation" },
    { year:"Feb. 2014", name:"Best Research Paper Award (대한교통학회 학술상)", org:"Korea Society of Transportation" },
  ],

  /* ── 기타 경력 (학회 편집위원 · 위원회 활동) ──────────────────
     형식: { period, role, org }
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
