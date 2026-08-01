/* ================================================================
   INTERNATIONAL JOURNALS — SMOP Lab
   ================================================================

   새 논문 추가하는 방법:
   아래 배열의 아무 위치에나 추가해도 됩니다 (연도 기준 자동 정렬).
   번호(id)도 자동으로 매겨지니 신경 쓰지 마세요.

   복사해서 쓰는 템플릿:
   { year:2026,
     title:"논문 제목",
     authors:["성, 이름","이름 성","Seungmo Kang"],
              // 1저자만 "성, 이름", 나머지는 "이름 성" 순서
              // "Seungmo Kang" / "Kang, Seungmo"는 자동 bold
     venue:"저널명, Vol. XX, pp. XX–XX",
     tags:["International Journal","SCI"] },      // "SCI" | "SSCI" 등

   선택 항목:
   accepted:true                → venue 뒤에 "Accepted" 표시
   yearLabel:"2016–2017"        → 연도 묶음 표시가 필요할 때만
   type:"conference"            → 학회 논문일 때만 (기본값은 "journal")

================================================================ */

const INTERNATIONAL_JOURNALS = [

  // ── 2026 ──────────────────────────────────────────────────────
  { year:2026,
    title:"Development of LLM-based Mobility Simulation Framework with Self-calibration for On-demand Service Analysis",
    authors:["Park, Hyuncheol", "Hyun Park", "Seungmo Kang"],
    venue:"IEEE Access · Vol. 14, pp. 77211–77224",
    tags:["International Journal","SCI"] },
  
  { year:2026,
    title:"Pickup and Delivery Problem with Synchronous and Asynchronous Transshipment for Q-Commerce Delivery",
    authors:["Park, Hyun", "Hyuncheol Park", "Seungmo Kang"],
    venue:"Transportation Research Record", accepted:true,
    tags:["International Journal","SCI"] },

  { year:2026,
    title:"Diffusion process-based model for Network Trajectory Propagation: Formulation, Data Mining and Cross-Comparative Analysis",
    authors:["Sleiman, Wissam","Mohaiminul Haque","Mohammad Saiful Amin","Pedram Beigi","Michel Khoueiry","Seungmo Kang","Samer Hamdar"],
    venue:"IEEE Transactions on Intelligent Transportation Systems, Vol. 27, No. 5, pp. 5517–5530",
    tags:["International Journal","SCI"] },

  // ── 2025 ──────────────────────────────────────────────────────
  { year:2025,
    title:"BO4Mob: Bayesian Optimization Benchmarks for High-Dimensional Urban Mobility Problem",
    authors:["Ryu, Seunghee","Donghoon Kwon","Seongjin Choi","Aryan Deshwal","Seungmo Kang","Carolina Osorio"],
    venue:"Presented at The 39th Annual Conference on Neural Information Processing Systems, NeurIPS 2025",
    tags:["Conference"], type:"conference" },

  { year:2025,
    title:"Optimizing shelter locations for bus evacuation and relief supply under traffic congestion",
    authors:["Woo, Seong-Jong","Seungmo Kang"],
    venue:"IET Intelligent Transport Systems, Vol. 19, Issue 1, e70020",
    tags:["International Journal","SCI"] },

  { year:2025,
    title:"Multiobjective Transit Network Design with Travel Time Reliability for Conventional and Autonomous Electric Vehicles",
    authors:["Park, Su Jin","Seungmo Kang"],
    venue:"IEEE Access, Vol. 13, pp. 47938-47954",
    tags:["International Journal","SCI"] },

  // ── 2024 ──────────────────────────────────────────────────────
  { year:2024,
    title:"Development of Optimal Real-Time Metro Operation Strategy Minimizing Total Passenger Travel Time and Train Energy Consumption",
    authors:["Oh, Yoonseok","Ho-Chan Kwak","Seungmo Kang"],
    venue:"IET Intelligent Transport Systems, Vol. 18, Issue 12, pp. 2440–2458",
    tags:["International Journal","SCI"] },

  { year:2024,
    title:"Differential Dynamics of Transit Use Resilience During the COVID-19 Pandemic Using Multivariate Two-dimensional Functional Data Analysis",
    authors:["Choi, Won Gyun","Seunghee Ryu","Paul H. Jung","Seungmo Kang"],
    venue:"IEEE Access, Vol. 12, pp. 8721-8743",
    tags:["International Journal","SCI"] },

  // ── 2022 ──────────────────────────────────────────────────────
  { year:2022,
    title:"Multi-objective Approach to the Transit Network Design Problem with Variable Demand Considering Transit Equity",
    authors:["Park, Su Jin","Seungmo Kang","Young-Ji Byon","Seung-Young Kho"],
    venue:"Journal of Advanced Transportation, Vol. 2022, Article ID 5887985",
    tags:["International Journal","SCI"] },

  { year:2022,
    title:"Rebalancing Docked Bicycle Sharing System with Approximate Dynamic Programming and Reinforcement Learning",
    authors:["Seo, Young-Hyun","Dong-Kyu Kim","Seungmo Kang","Young-Ji Byon","Seung-Young Kho"],
    venue:"Journal of Advanced Transportation, Vol. 2022, Article ID 2780711",
    tags:["International Journal","SCI"] },

  // ── 2021 ──────────────────────────────────────────────────────
  { year:2021,
    title:"Urban Transit Network Optimization under Variable Demand with Single and Multi-Objective Approaches Using Metaheuristics: The Case of Daejeon, Korea",
    authors:["Almasi, Mohammad Hadi","Yoonseok Oh","Ali Sadollah","Young-Ji Byon","Seungmo Kang"],
    venue:"International Journal of Sustainable Transportation, Vol. 15, Issue 5, pp. 386-406",
    tags:["International Journal","SSCI"] },

  // ── 2020 ──────────────────────────────────────────────────────
  { year:2020,
    title:"Investigation of the Effects of Inherent Variation and Spatiotemporal Dependency on Urban Travel Speed Prediction",
    authors:["Park, Ho-Chul","Seungmo Kang","Seung-Young Kho","Dong-Kyu Kim"],
    venue:"ASCE Journal of Transportation Engineering, Part A: Systems, Vol. 146, Issue 5, Article 04020027",
    tags:["International Journal","SCI"] },

  { year:2020,
    title:"Dwell Time Estimation using Real-Time Train Operation and Smart Card-based Passenger Data: A Case Study in Seoul, South Korea",
    authors:["Oh, Yoonseok","Young-Ji Byon","Ji Young Song","Ho-Chan Kwak","Seungmo Kang"],
    venue:"Applied Sciences, Vol. 10, Issue 2, No. 476",
    tags:["International Journal","SCI"] },

  { year:2020,
    title:"An Optimal Screening Method of Hotspot Identification for Highway Crashes with Dynamic Site Length",
    authors:["Lee, Jinwoo","Koohong Chung","Ilia Papakonstantinou","Seungmo Kang","Dong-Kyu Kim"],
    venue:"Accident Analysis and Prevention, Vol. 135, Article 105357",
    tags:["International Journal","SCI"] },

  // ── 2019 ──────────────────────────────────────────────────────
  { year:2019,
    title:"Enhanced Application of Principal Component Analysis in Machine Learning for Imputation of Missing Traffic Data",
    authors:["Choi, Yoon-Young","Heeseung Shon","Young-Ji Byon","Dong-Kyu Kim","Seungmo Kang"],
    venue:"Applied Sciences, Vol. 9, Issue 10, No. 2149",
    tags:["International Journal","SCI"] },

  // ── 2018 ──────────────────────────────────────────────────────
  { year:2018,
    title:"Optimal Coordination Strategy for an Integrated Multimodal Transit Feeder Network Design Considering Multiple Objectives",
    authors:["Almasi, Mohammad Hadi","Ali Sadollah","Yoonseok Oh","Dong-Kyu Kim","Seungmo Kang"],
    venue:"Sustainability, Vol. 10, Issue 3, No. 734",
    tags:["International Journal","SCI"] },

  // ── 2016–2017 ─────────────────────────────────────────────────
  { year:2017, yearLabel:"2016–2017",
    title:"Evaluating the Impact of Sudden Collapse of Major Freeway Connectors on Rapid Transit and Adjacent Freeway System: San Francisco Bay Area Case Study",
    authors:["Oh, Yoonseok","Koohong Chung","Cheolsun Kim","Shin Hyoung Park","Seungmo Kang"],
    venue:"Applied Sciences, Vol. 7, Issue 7, No. 726, 2017",
    tags:["International Journal","SCI"] },

  { year:2016, yearLabel:"2016–2017",
    title:"Meta-Heuristic Approaches for High-Demand Facility Locations Considering Traffic Congestion and Greenhouse Gas Emission",
    authors:["Hwang, Taesung","Minho Lee","Chungwon Lee","Seungmo Kang"],
    venue:"Journal of Environmental Engineering and Landscape Management, Vol. 24, Issue 4, pp. 233-244, 2016",
    tags:["International Journal","SCI"] },

  { year:2016, yearLabel:"2016–2017",
    title:"Evaluating and Addressing the Effects of Regression to the Mean Phenomenon in Estimating Collision Frequencies on Urban High Collision Concentration Locations",
    authors:["Lee, Jinwoo","Koohong Chung","Seungmo Kang"],
    venue:"Accident Analysis and Prevention, Vol. 97, pp.49-56, 2016",
    tags:["International Journal","SCI"] },

  { year:2016, yearLabel:"2016–2017",
    title:"Optimization of an Improved Intermodal Transit Model Equipped with Feeder Bus and Railway Systems Using Metaheuristics Approaches",
    authors:["Almasi, Mohammad Hadi","Ali Sadollah","Seungmo Kang","Mohamed Rehan Karim"],
    venue:"Sustainability, Vol. 8, Issue 6, No. 537, 2016",
    tags:["International Journal","SCI"] },

  { year:2016, yearLabel:"2016–2017",
    title:"Dynamically Determining the Toll Plaza Capacity by Monitoring Approaching Traffic Conditions in Real-time",
    authors:["Kim, Cheolsun","Dong-Kyu Kim","Seung-Young Kho","Seungmo Kang","Koohong Chung"],
    venue:"Applied Sciences, Vol. 6, Issue 3, No. 87, 2016",
    tags:["International Journal","SCI"] },

  { year:2016, yearLabel:"2016–2017",
    title:"Measurement of Desirable Minimum One-Way Bike Lane Width",
    authors:["Lee, Chungwon","Hee Cheol Shin","Seungmo Kang","Jung-Beom Lee"],
    venue:"KSCE Journal of Civil Engineering, Vol. 20, Issue 2, pp. 881-889, 2016",
    tags:["International Journal","SCI"] },

  // ── 2013–2015 ─────────────────────────────────────────────────
  { year:2015, yearLabel:"2013–2015",
    title:"Spatial Analysis Methods for Identifying Hazardous Locations on Expressways in Korea",
    authors:["Park, Shin Hyoung","Kitae Jang","Dong-Kyu Kim","Seung-Young Kho","Seungmo Kang"],
    venue:"Scientia Iranica, Vol. 22, No. 4, pp. 1594-1603, 2015",
    tags:["International Journal"] },

  { year:2015, yearLabel:"2013–2015",
    title:"Network Forensic Evidence Generation and Verification Scheme (NFEGVS)",
    authors:["Kim, Hyungseok","Eunjin Kim","Seungmo Kang","Huy Kang Kim"],
    venue:"Telecommunication Systems, Vol. 60, Issue 2, pp. 261-273, 2015",
    tags:["International Journal","SCI"] },

  { year:2013, yearLabel:"2013–2015",
    title:"Evaluation of Pedestrian Safety: Pedestrian Crash Hot Spots and Risk Factors for Injury Severity",
    authors:["Jang, Kitae","Shin Hyoung Park","Sanghyeok Kang","Ki Han Song","Seungmo Kang","Sungbong Chung"],
    venue:"Transportation Research Record, No.2393. pp. 104-116, 2013",
    tags:["International Journal","SCI"] },

  { year:2013, yearLabel:"2013–2015",
    title:"Impact of Traffic States on Freeway Crash Involvement Rates",
    authors:["Yeo, Hwasoo","Kitae Jang","Alexander Skabardonis","Seungmo Kang"],
    venue:"Accident Analysis and Prevention, Vol. 50, pp.713-723, 2013",
    tags:["International Journal","SCI"] },

  // ── 2008–2012 ─────────────────────────────────────────────────
  { year:2011, yearLabel:"2008–2012",
    title:"Adaptive Dynamic Programming Approach to a Multi-Purpose Location-Based Concierge Service Model",
    authors:["Kang, Seungmo","Tschangho John Kim"],
    venue:"IET Intelligent Transport Systems, Vol. 5, Issue 4, pp. 277-285, 2011",
    tags:["International Journal","SCI"] },

  { year:2011, yearLabel:"2008–2012",
    title:"Geocoding Vehicle Collisions on Korean Expressways Based on Postmile Referencing",
    authors:["Park, Shin Hyoung","John M. Bigham", "Seung-Young Kho", "Seungmo Kang", "Dong-Kyu Kim"],
    venue:"KSCE Journal of Civil Engineering, Vol. 15, Issue 8, pp. 1435-1441, 2011",
    tags:["International Journal","SCI"] },

  { year:2011, yearLabel:"2008–2012",
    title:"The Traveling Purchaser Problem with Stochastic Prices: Exact and Approximate Algorithms",
    authors:["Kang, Seungmo","Yanfeng Ouyang"],
    venue:"European Journal of Operational Research, Vol. 209, Issue 3, pp. 265-272, 2011",
    tags:["International Journal","SCI"] },

  { year:2011, yearLabel:"2008–2012",
    title:"Biofuel Refinery Location and Supply Chain Planning under Traffic Congestion",
    authors:["Bai, Yun","Taesung Hwang","Seungmo Kang","Yanfeng Ouyang"],
    venue:"Transportation Research Part B: Methodological, Vol. 45, Issue 1, pp. 162-175, 2011",
    tags:["International Journal","SCI"] },

  { year:2011, yearLabel:"2008–2012",
    title:"A Heuristic Approach to Railroad Track Maintenance Scheduling Problem",
    authors:["Peng, Fan","Seungmo Kang","Xiaopeng Li","Yanfeng Ouyang","Kamalesh Somani","Dharma Acharya"],
    venue:"Computer-Aided Civil and Infrastructure Engineering, Vol. 26, Issue 2, pp. 129-145, 2011",
    tags:["International Journal","SCI"] },

  { year:2010, yearLabel:"2008–2012",
    title:"Combined-Cost and Bi-objective Approaches to Multi-Purpose Location-Based Services Using Genetic Algorithms",
    authors:["Kang, Seungmo","Tschangho John Kim"],
    venue:"Transportation Research Record, No.2160. pp. 40-49, 2010",
    tags:["International Journal","SCI"] },

  { year:2008, yearLabel:"2008–2012",
    title:"Optimal Operations of Transportation Fleet for Unloading Activities at Container Ports",
    authors:["Kang, Seungmo","Juan C. Medina","Yanfeng Ouyang"],
    venue:"Transportation Research Part B: Methodological, Vol. 42, Issue 10, pp. 970-984, 2008",
    tags:["International Journal","SCI"] },
        
  { year:2006, yearLabel:"2008–2012",
    title:"Heuristic Algorithm for Solving a Multimodal Location-Based Concierge Service Problem",
    authors:["Kang, Seungmo","Seung Oh","Tschangho John Kim"],
    venue:"Transportation Research Record, No.1972. pp. 123-132, 2006",
    tags:["International Journal","SCI"] },

];
