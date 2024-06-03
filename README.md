# Sul-ijoa(술이조아)
<p><b>
소주 가격을 기준으로 가게를 소개하고 AI 기반으로 추천하는 플랫폼
</b></p><br>

<!-- 기술 스택  -->
## Tech Stack
<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">&nbsp;
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black">&nbsp;
  <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=black">&nbsp;
  <img src="https://img.shields.io/badge/Recoil-3578E5?style=for-the-badge&logo=Recoil&logoColor=white">&nbsp;
  <img src="https://img.shields.io/badge/KakaoMap API-FFCD00?style=for-the-badge&logo=Kakao&logoColor=black"><br>
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white">&nbsp;
  <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white">&nbsp;
  <img src="https://img.shields.io/badge/Zoom-2D8CFF?style=for-the-badge&logo=Zoom&logoColor=white">&nbsp;
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white">&nbsp;
  <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white">&nbsp;
</p>
<br><br>

## 기능 소개
-----
### 소주 가격별 가게 찾기
- 프로그래스바 변경 시 즉각적인 데이터 업데이트를 통해 가격 기반 추천 가게를 제공
  
<p align="center">
  <img width="1188" alt="스크린샷 2024-04-15 오후 7 40 10" src="https://github.com/sul-ijoa/frontend/assets/102780846/c414b930-ee0a-47d6-8ba3-eb1d222ccf34">
</p>

<p align="center">
  <img width="1188" alt="스크린샷 2024-04-15 오후 7 42 13" src="https://github.com/sul-ijoa/frontend/assets/102780846/809bb926-baa6-4842-bb3b-fee0260f07a7">
</p>

### 지도 기능
- 지도 위에 마커를 표시하고 사용자가 클릭 시 상세 정보를 제공하여 시각적 정보 제공
<p align="center">
  <img width="1188" alt="스크린샷 2024-04-15 오후 7 41 39" src="https://github.com/sul-ijoa/frontend/assets/102780846/8e106ea2-2045-42ef-b7c8-29289437535d">
</p>
<br><br><br>

<!--트러블 슈팅-->
## Trouble Shooting

<details>
  <summary>필터링된 데이터 불러오는 속도 문제</summary>
  <br>
  
  **문제 상황**: 소주 가격에 따른 가게 추천 프로젝트에서 필터링된 데이터를 불러오는 속도가 느리고 UI 반응성이 떨어져 사용자 경험 저하 및 검색 기능의 효율성 저하

  **문제 접근**: 필터 변경 시 즉각적인 결과 업데이트를 위해 프로그래스바 도입, Recoil의 비동기 셀렉터를 활용하여 필터링된 데이터를 전역 상태로 관리

  **결과**:
  - 실시간 필터 조건에 따른 결과 확인 가능
  - 검색 기능 효율성 크게 개선 및 사용자 경험 향상

  <br>
</details>
<br>

<!--기술적 의사결정-->
## 기술적 의사결정

| **기술**                    | **선택 이유**                                                                                           | **활용 예시**                                                        |
|--------------------------|-------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| **React**                | 컴포넌트 기반 구조로 재사용 가능한 UI 요소 생성 용이, 상태 관리가 쉬워 높은 유지보수성 제공                        | 소주 가격별 가게 리스트 및 상세 정보 페이지의 컴포넌트화                                 |
| **Recoil**               | 전역 상태 관리가 용이하고, 비동기 데이터 흐름을 간편하게 처리할 수 있는 라이브러리                                                | 회원정보, 카테고리 정보, 가게 정보 등의 전역 상태 관리                                          |
| **Tailwind CSS**         | 유틸리티 퍼스트 CSS 프레임워크로, 빠르게 스타일링을 적용할 수 있으며, 클래스 기반으로 스타일 적용하여 코드 가독성과 유지보수성 향상                                                  | UI 컴포넌트에 일관된 디자인 시스템 적용                                           |
| **KakaoMap SDK**         | Kakao Map API를 쉽게 사용할 수 있도록 래핑한 React용 SDK로, 지도를 생성하고 마커를 추가하는 등의 작업을 간단하게 수행 가능 | Kakao Map API를 연동하여 가게 위치 표시 및 길찾기 기능 구현 |

<br>

<!--개발 기간-->
## 개발 기간
2023/11/25 → 2023/12/22

<br><br>

<!--개발 인원-->
## 개발 인원
FE 2, BE 2, AI 2

<br><br>
