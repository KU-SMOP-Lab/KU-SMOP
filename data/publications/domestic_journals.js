/* ================================================================
   DOMESTIC JOURNALS (국내 저널) — SMOP Lab
   ================================================================

   새 논문 추가하는 방법:
   아래 배열의 아무 위치에나 추가해도 됩니다 (연도 기준 자동 정렬).
   번호(id)도 자동으로 매겨지니 신경 쓰지 마세요.

   복사해서 쓰는 템플릿:
   { year:2026,
     title:"논문 제목",
     authors:["저자1","저자2","강승모"],          // "강승모"는 자동 bold
     venue:"학회지명 · Vol. XX, No. X, pp. XX–XX",
     tags:["Domestic Journal"] },

   선택 항목:
   yearLabel:"2008–2012"        → 연도 묶음 표시가 필요할 때만

================================================================ */

const DOMESTIC_JOURNALS = [

  { year:2022,
    title:"토지이용패턴과 사회경제지표가 지하철 수요 변화에 미치는 영향",
    authors:["민하루","서영현","강승모"],
    venue:"한국철도학회 논문집 · Vol. 25, No. 5, pp. 386–397",
    tags:["Domestic Journal"] },

  { year:2021,
    title:"역사 선택 확률 기반 고속철도 통행배정 알고리즘 개발",
    authors:["서영현","송지영","곽호찬","유승희","강승모"],
    venue:"한국철도학회 논문집 · Vol. 24, No. 9, pp. 818–827",
    tags:["Domestic Journal"] },

  { year:2019,
    title:"도시철도 장치고장 사고 감소에 따른 사회적 편익 산정 방안",
    authors:["배현근","곽호찬","최윤영","오윤석","강승모"],
    venue:"한국도시철도학회논문집 · Vol. 7, No. 2, pp. 255–263",
    tags:["Domestic Journal"] },

  { year:2019,
    title:"철도사고 감소를 통한 지체시간 감소 및 신뢰성 향상 편익 산정 기법",
    authors:["최윤영","배현근","강승모","송지영"],
    venue:"한국철도학회 논문집 · Vol. 22, No. 4, pp. 336–347",
    tags:["Domestic Journal"] },

  { year:2019,
    title:"휴업손해비용과 위자료를 반영한 철도 교통사고비용 개선에 관한 연구",
    authors:["김진주","최윤영","강승모","이인묵"],
    venue:"한국철도학회 논문집 · Vol. 22, No. 1, pp. 90–100",
    tags:["Domestic Journal"] },

  { year:2013, yearLabel:"2013–2015",
    title:"지역간 철도의 노선계획 최적화 모형",
    authors:["오동규","고승영","강승모"],
    venue:"대한교통학회지 · Vol. 31, No. 2, pp. 80–89 · 2013",
    tags:["Domestic Journal"] },

  { year:2000, yearLabel:"2008–2012",
    title:"Conjugate Gradient 법을 이용한 경로기반 통행배정 알고리즘의 구축",
    authors:["강승모","권용석","박창호"],
    venue:"대한교통학회지 · Vol. 18, No. 5, pp. 99–107 · 2000",
    tags:["Domestic Journal"] },

];
