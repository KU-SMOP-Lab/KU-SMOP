/* ================================================================
   MEMBERS DATA FILE — SMOP Lab
   ================================================================

   현재 멤버 추가 방법 (CURRENT_MEMBERS):
   {
     name:     "English Name",
     nameKr:   "한국어 이름",
     role:     "phd",   // "postdoc" / "phd" / "phdcourse" / "masters" / "undergrad" 중 하나만 적기
                        // 해당 role에 아무도 없으면 그 항목은 화면에 표시되지 않고,
                        // 멤버를 추가하면 자동으로 다시 나타납니다
     interest: "관심분야1, 관심분야2, ...",
               // "Research Interest:" 접두어는 써도 되고 안 써도 됨 (화면에서 자동 처리)
               // 카드에는 "RESEARCH INTERESTS" 라벨 아래 내용만 표시됨
     email:    "email@korea.ac.kr",
     photo:    "images/members/current/파일명.jpg",  // 없으면 null
               // 사진 파일은 images/members/current/ 폴더에 넣으세요
               // 확장자 대소문자(.jpg / .JPG)까지 파일명과 똑같이 적어야 합니다
     links: [
       // 개인 링크 목록 — 카드의 이메일 아래에 아이콘+이름 칩 버튼으로 표시됨
       // 없으면 links: [] 로 비워두면 됨 (칩이 아예 안 나타남)
       //
       // type은 아래 4가지 중에서만 골라 쓰세요 (칩 색상·아이콘이 자동 적용):
       //   "linkedin"      → 파란색 LinkedIn 칩
       //   "github"        → 검은색 GitHub 칩
       //   "googlescholar" → 파란색 Scholar 칩
       //   "website"       → 남색 Website 칩 (개인 홈페이지, 블로그 등 기타 링크)
       //
       // 필요한 것만 골라서 넣으면 됨 (전부 다 넣을 필요 없음):
       { type: "linkedin", url: "https://linkedin.com/in/username" },
       { type: "github",   url: "https://github.com/username" },
       { type: "googlescholar", url: "https://scholar.google.com/citations?user=..." },
       { type: "website",  url: "https://개인홈페이지.com" },
     ],
   }

   졸업생(알럼나이)은 이 파일이 아니라 data/alumni.js 에서 관리합니다.
   (작성 방법도 그 파일 맨 위에 적혀 있음)

================================================================ */

const CURRENT_MEMBERS = [

  // ── Postdoctoral Researchers ───────────────────────────────────
  // (현재 0명 — 멤버가 없는 항목은 페이지에 자동으로 표시되지 않고,
  //  여기에 멤버를 추가하면 해당 섹션이 자동으로 다시 나타남)

  // ── Ph.D. Candidates ──────────────────────────────────────────
  {
    name:     "Hun Jeong",
    nameKr:   "정헌",
    role:     "phd",
    //interest: "Research Interest: [Add here]",
    //email:    "[email]@korea.ac.kr",
    photo:    "images/members/current/정헌.jpg",
    links:    [],
  },
  {
    name:     "Haru Min",
    nameKr:   "민하루",
    role:     "phd",
    //interest: "Research Interest: [Add here]",
    email:    "mm1nha@naver.com",
    photo:    "images/members/current/민하루.jpg",
    links:    [],
  },
     {
    name:     "Hyuncheol Park",
    nameKr:   "박현철",
    role:     "phd",
    interest: "Research Interest: Transportation Planning, Demand-Responsive Transport(DRT), On-Demand Mobility",
    email:    "hc_park@korea.ac.kr",
    photo:    "images/members/current/박현철.jpg",
    links:    [],
  },
     {
    name:     "Junhee Lee",
    nameKr:   "이준희",
    role:     "phd",
    interest: "Research Interest: Transportation Planning, Public Transportation, Accelerated Rail Transit Operation & Optimization",
    email:    "jhlee0789@korea.ac.kr",
    photo:    "images/members/current/이준희.jpg",
    links:    [],
  },
     {
    name:     "Taisung Woo",
    nameKr:   "우태성",
    role:     "phd",
    //interest: "Research Interest: [Add here]",
    //email:    "[email]@korea.ac.kr",
    photo:    null,
    links:    [],
  },
     {
    name:     "Seunghee Ryu",
    nameKr:   "유승희",
    role:     "phd",
    interest: "Research Interest: Mobility Data Intelligence, Public Transportation, Intelligent Transportation Systems, Optimization",
    email:    "seunghee38@korea.ac.kr",
    photo:    "images/members/current/유승희.jpg",
    links:    [],
  },
     {
    name:     "Wongyun Choi",
    nameKr:   "최원균",
    role:     "phd",
    interest: "Research Interest: Public Transport Planning, Sustainable Transportation, International Development Cooperation",
    email:    "hippotimbo@korea.ac.kr",
    photo:    "images/members/current/최원균.jpg",
    links:    [{ type: "linkedin", url: "https://www.linkedin.com/in/choi-wongyun" }],
  },
     {
    name:     "Donghoon Kwon",
    nameKr:   "권동훈",
    role:     "phd",
    interest: "Research Interest: Traffic Simulation, Urban Mobility",
    email:    "fermathooni88@korea.ac.kr",
    photo:    "images/members/current/권동훈.jpg",
    links:    [{ type: "website",  url: "https://sites.google.com/view/donghoonkwon/" }],
  },
     {
    name:     "Sanghyeok Kang",
    nameKr:   "강상혁",
    role:     "phd",
    interest: "Research Interest: Transportation Planning, Optimization, Public Transportation",
    email:    "kssh9071@korea.ac.kr",
    photo:    "images/members/current/강상혁.jpg",
    links:    [],
  },

  // ── Ph.D. Course ──────────────────────────────────────────────
  {
    name:     "Hyeontae Lim",
    nameKr:   "임현태",
    role:     "phdcourse",
    //interest: "Research Interest: [Add here]",
    email:    "jameslht@korea.ac.kr",
    photo:    "images/members/current/임현태.jpg",
    links:    [],
  },

  // ── Master's Course ───────────────────────────────────────────
  {
    name:     "Eunbit Oh",
    nameKr:   "오은빛",
    role:     "masters",
    interest: "Research Interest: Locations & Routing Optimization, Data Analysis",
    email:    "1004oeb@korea.ac.kr",
    photo:    "images/members/current/오은빛.jpg",
    links:    [],
  },
  {
    name:     "Doyeon Kim",
    nameKr:   "김도연",
    role:     "masters",
    interest: "Research Interest: Location optimization with gis",
    email:    "dodo171709@gmail.com",
    photo:    "images/members/current/김도연.jpg",
    links:    [],
  },
  {
    name:     "Joowan Kim",
    nameKr:   "김주완",
    role:     "masters",
    interest: "Research Interest: Transportation Planning & Optimization, Data Analysis",
    email:    "kj010622@korea.ac.kr",
    photo:    "images/members/current/김주완.jpg",
    links:    [],
  },
  {
    name:     "Minseo Park",
    nameKr:   "박민서",
    role:     "masters",
    //interest: "Research Interest: [Add here]",
    email:    "miinseo324@korea.ac.kr",
    photo:    "images/members/current/박민서.jpg",
    links:    [],
  },

  // ── Undergraduate Researchers ──────────────────────────────────
  // (현재 0명 — 멤버가 없는 항목은 페이지에 자동으로 표시되지 않고,
  //  여기에 멤버를 추가하면 해당 섹션이 자동으로 다시 나타남)

];

