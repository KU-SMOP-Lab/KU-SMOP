/* ================================================================
   INTERNATIONAL JOURNALS — SMOP Lab
   ================================================================

   새 논문 추가하는 방법:
   아래 배열의 아무 위치에나 추가해도 됩니다 (연도 기준 자동 정렬).
   번호(id)도 자동으로 매겨지니 신경 쓰지 마세요.

   복사해서 쓰는 템플릿:
   { year:2026,
     title:"논문 제목",
     authors:["저자1","저자2","Kang, Seungmo"],   // "Kang, Seungmo"는 자동 bold
     venue:"저널명 · Vol. XX, pp. XX–XX",
     tags:["International Journal","SCI"] },      // "SCI" | "SSCI" 등

   선택 항목:
   accepted:true                → venue 뒤에 "Accepted" 표시
   yearLabel:"2016–2017"        → 연도 묶음 표시가 필요할 때만
   type:"conference"            → 학회 논문일 때만 (기본값은 "journal")

================================================================ */

const INTERNATIONAL_JOURNALS = [

  // ── 2026 ──────────────────────────────────────────────────────
  { year:2026,
    title:"Pickup and Delivery Problem with Synchronous and Asynchronous Transshipment for Q-Commerce Delivery",
    authors:["Park, Hyun", "Park, Hyuncheol", "Kang, Seungmo"],
    venue:"Transportation Research Record", accepted:true,
    tags:["International Journal","SCI"] },

  { year:2026,
    title:"Diffusion process-based model for Network Trajectory Propagation",
    authors:["Sleiman, Wissam","Haque, Mohaiminul","Amin, Mohammad Saiful","Beigi, Pedram","Khoueiry, Michel","Kang, Seungmo","Hamdar, Samer"],
    venue:"IEEE Transactions on Intelligent Transportation Systems", accepted:true,
    tags:["International Journal","SCI"] },

  // ── 2025 ──────────────────────────────────────────────────────
  { year:2025,
    title:"BO4Mob: Bayesian Optimization Benchmarks for High-Dimensional Urban Mobility Problem",
    authors:["Ryu, Seunghee","Kwon, Donghoon","Choi, Seongjin","Deshwal, Aryan","Kang, Seungmo","Osorio, Carolina"],
    venue:"NeurIPS 2025",
    tags:["Conference"], type:"conference" },

  { year:2025,
    title:"Optimizing shelter locations for bus evacuation",
    authors:["Woo, Seong-Jong","Kang, Seungmo"],
    venue:"IET Intelligent Transport Systems · Vol. 19, Issue 1, e70020",
    tags:["International Journal","SCI"] },

  { year:2025,
    title:"Multiobjective Transit Network Design with Travel Time Reliability",
    authors:["Park, Su Jin","Kang, Seungmo"],
    venue:"IEEE Access · Vol. 13, pp. 47938–47954",
    tags:["International Journal","SCI"] },

  // ── 2024 ──────────────────────────────────────────────────────
  { year:2024,
    title:"Development of Optimal Real-Time Metro Operation Strategy",
    authors:["Oh, Yoonseok","Kwak, Ho-Chan","Kang, Seungmo"],
    venue:"IET Intelligent Transport Systems · Vol. 18, Issue 12, pp. 2440–2458",
    tags:["International Journal","SCI"] },

  { year:2024,
    title:"Differential Dynamics of Transit Use Resilience During COVID-19",
    authors:["Choi, Won Gyun","Ryu, Seunghee","Jung, Paul H.","Kang, Seungmo"],
    venue:"IEEE Access · Vol. 12, pp. 8721–8743",
    tags:["International Journal","SCI"] },

  // ── 2022 ──────────────────────────────────────────────────────
  { year:2022,
    title:"Multi-objective Approach to Transit Network Design with Variable Demand",
    authors:["Park, Su Jin","Kang, Seungmo","Byon, Young-Ji","Kho, Seung-Young"],
    venue:"Journal of Advanced Transportation · Vol. 2022, Article ID 5887985",
    tags:["International Journal","SCI"] },

  { year:2022,
    title:"Rebalancing Docked Bicycle Sharing System",
    authors:["Seo, Young-Hyun","Kim, Dong-Kyu","Kang, Seungmo","Byon, Young-Ji","Kho, Seung-Young"],
    venue:"Journal of Advanced Transportation · Vol. 2022, Article ID 2780711",
    tags:["International Journal","SCI"] },

  // ── 2021 ──────────────────────────────────────────────────────
  { year:2021,
    title:"Urban Transit Network Optimization under Variable Demand",
    authors:["Almasi, Mohammad Hadi","Oh, Yoonseok","Sadollah, Ali","Byon, Young-Ji","Kang, Seungmo"],
    venue:"International Journal of Sustainable Transportation · Vol. 15, Issue 5, pp. 386–406",
    tags:["International Journal","SSCI"] },

  // ── 2020 ──────────────────────────────────────────────────────
  { year:2020,
    title:"Investigation of Effects of Inherent Variation on Urban Travel Speed Prediction",
    authors:["Park, Ho-Chul","Kang, Seungmo","Kho, Seung-Young","Kim, Dong-Kyu"],
    venue:"ASCE Journal of Transportation Engineering, Part A · Vol. 146, Issue 5, 04020027",
    tags:["International Journal","SCI"] },

  { year:2020,
    title:"Dwell Time Estimation using Real-Time Train Operation",
    authors:["Oh, Yoonseok","Byon, Young-Ji","Song, Ji Young","Kwak, Ho-Chan","Kang, Seungmo"],
    venue:"Applied Sciences · Vol. 10, Issue 2, No. 476",
    tags:["International Journal","SCI"] },

  { year:2020,
    title:"An Optimal Screening Method of Hotspot Identification",
    authors:["Lee, Jinwoo","Chung, Koohong","Papakonstantinou, Ilia","Kang, Seungmo","Kim, Dong-Kyu"],
    venue:"Accident Analysis and Prevention · Vol. 135, Article 105357",
    tags:["International Journal","SCI"] },

  // ── 2019 ──────────────────────────────────────────────────────
  { year:2019,
    title:"Enhanced Application of Principal Component Analysis in Machine Learning",
    authors:["Choi, Yoon-Young","Shon, Heeseung","Byon, Young-Ji","Kim, Dong-Kyu","Kang, Seungmo"],
    venue:"Applied Sciences · Vol. 9, Issue 10, No. 2149",
    tags:["International Journal","SCI"] },

  // ── 2018 ──────────────────────────────────────────────────────
  { year:2018,
    title:"Optimal Coordination Strategy for Integrated Multimodal Transit",
    authors:["Almasi, Mohammad Hadi","Sadollah, Ali","Oh, Yoonseok","Kim, Dong-Kyu","Kang, Seungmo"],
    venue:"Sustainability · Vol. 10, Issue 3, No. 734",
    tags:["International Journal","SCI"] },

  // ── 2016–2017 ─────────────────────────────────────────────────
  { year:2017, yearLabel:"2016–2017",
    title:"Evaluating the Impact of Sudden Collapse of Major Freeway Connectors",
    authors:["Oh, Yoonseok","Chung, Koohong","Kim, Cheolsun","Park, Shin Hyoung","Kang, Seungmo"],
    venue:"Applied Sciences · Vol. 7, Issue 7, No. 726 · 2017",
    tags:["International Journal","SCI"] },

  { year:2016, yearLabel:"2016–2017",
    title:"Meta-Heuristic Approaches for High-Demand Facility Locations",
    authors:["Hwang, Taesung","Lee, Minho","Lee, Chungwon","Kang, Seungmo"],
    venue:"Journal of Environmental Engineering and Landscape Management · Vol. 24, Issue 4, pp. 233–244 · 2016",
    tags:["International Journal","SCI"] },

  { year:2016, yearLabel:"2016–2017",
    title:"Evaluating and Addressing Regression to the Mean Phenomenon",
    authors:["Lee, Jinwoo","Chung, Koohong","Kang, Seungmo"],
    venue:"Accident Analysis and Prevention · Vol. 97, pp. 49–56 · 2016",
    tags:["International Journal","SCI"] },

  { year:2016, yearLabel:"2016–2017",
    title:"Optimization of Improved Intermodal Transit Model",
    authors:["Almasi, Mohammad Hadi","Sadollah, Ali","Kang, Seungmo","Karim, Mohamed Rehan"],
    venue:"Sustainability · Vol. 8, Issue 6, No. 537 · 2016",
    tags:["International Journal","SCI"] },

  { year:2016, yearLabel:"2016–2017",
    title:"Dynamically Determining the Toll Plaza Capacity",
    authors:["Kim, Cheolsun","Kim, Dong-Kyu","Kho, Seung-Young","Kang, Seungmo","Chung, Koohong"],
    venue:"Applied Sciences · Vol. 6, Issue 3, No. 87 · 2016",
    tags:["International Journal","SCI"] },

  { year:2016, yearLabel:"2016–2017",
    title:"Measurement of Desirable Minimum One-Way Bike Lane Width",
    authors:["Lee, Chungwon","Shin, Hee Cheol","Kang, Seungmo","Lee, Jung-Beom"],
    venue:"KSCE Journal of Civil Engineering · Vol. 20, Issue 2, pp. 881–889 · 2016",
    tags:["International Journal","SCI"] },

  // ── 2013–2015 ─────────────────────────────────────────────────
  { year:2015, yearLabel:"2013–2015",
    title:"Spatial Analysis Methods for Identifying Hazardous Locations",
    authors:["Park, Shin Hyoung","Jang, Kitae","Kim, Dong-Kyu","Kho, Seung-Young","Kang, Seungmo"],
    venue:"Scientia Iranica · Vol. 22, No. 4, pp. 1594–1603 · 2015",
    tags:["International Journal"] },

  { year:2015, yearLabel:"2013–2015",
    title:"Network Forensic Evidence Generation and Verification Scheme",
    authors:["Kim, Hyungseok","Kim, Eunjin","Kang, Seungmo","Kim, Huy Kang"],
    venue:"Telecommunication Systems · Vol. 60, Issue 2, pp. 261–273 · 2015",
    tags:["International Journal","SCI"] },

  { year:2013, yearLabel:"2013–2015",
    title:"Evaluation of Pedestrian Safety: Pedestrian Crash Hot Spots",
    authors:["Jang, Kitae","Park, Shin Hyoung","Kang, Sanghyeok","Song, Ki Han","Kang, Seungmo","Chung, Sungbong"],
    venue:"Transportation Research Record · No. 2393, pp. 104–116 · 2013",
    tags:["International Journal","SCI"] },

  { year:2013, yearLabel:"2013–2015",
    title:"Impact of Traffic States on Freeway Crash Involvement Rates",
    authors:["Yeo, Hwasoo","Jang, Kitae","Skabardonis, Alexander","Kang, Seungmo"],
    venue:"Accident Analysis and Prevention · Vol. 50, pp. 713–723 · 2013",
    tags:["International Journal","SCI"] },

  // ── 2008–2012 ─────────────────────────────────────────────────
  { year:2011, yearLabel:"2008–2012",
    title:"Adaptive Dynamic Programming Approach to Multi-Purpose Location-Based Concierge Service",
    authors:["Kang, Seungmo","Kim, Tschangho John"],
    venue:"IET Intelligent Transport Systems · Vol. 5, Issue 4, pp. 277–285 · 2011",
    tags:["International Journal","SCI"] },

  { year:2011, yearLabel:"2008–2012",
    title:"The Traveling Purchaser Problem with Stochastic Prices",
    authors:["Kang, Seungmo","Ouyang, Yanfeng"],
    venue:"European Journal of Operational Research · Vol. 209, Issue 3, pp. 265–272 · 2011",
    tags:["International Journal","SCI"] },

  { year:2011, yearLabel:"2008–2012",
    title:"Biofuel Refinery Location and Supply Chain Planning",
    authors:["Bai, Yun","Hwang, Taesung","Kang, Seungmo","Ouyang, Yanfeng"],
    venue:"Transportation Research Part B · Vol. 45, Issue 1, pp. 162–175 · 2011",
    tags:["International Journal","SCI"] },

  { year:2011, yearLabel:"2008–2012",
    title:"A Heuristic Approach to Railroad Track Maintenance Scheduling",
    authors:["Peng, Fan","Kang, Seungmo","Li, Xiaopeng","Ouyang, Yanfeng","Somani, Kamalesh","Acharya, Dharma"],
    venue:"Computer-Aided Civil and Infrastructure Engineering · Vol. 26, Issue 2, pp. 129–145 · 2011",
    tags:["International Journal","SCI"] },

  { year:2008, yearLabel:"2008–2012",
    title:"Optimal Operations of Transportation Fleet for Unloading Activities",
    authors:["Kang, Seungmo","Medina, Juan C.","Ouyang, Yanfeng"],
    venue:"Transportation Research Part B · Vol. 42, Issue 10, pp. 970–984 · 2008",
    tags:["International Journal","SCI"] },

];
