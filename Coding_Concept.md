<!

인라인 요소
: <a>, <span>, <em>, <strong>, <p>
: 크기, 상하여백을 가질 수 없다.
  <p> : 문단을 나타내는 태그
  <h1~h6> : 제목을 나타내는 6가지 태그(h1->h2-h3 단계적으로 사용해야함, 건너뛸 수 없음)
 
블럭 요소
: <div>, <section>, <article>
: 한 블럭의 자리를 모두 차지한다.
  <section> : 의미론적 태그로 특정 주제나 콘텐츠 그룹을 묶는데 사용
  <div> : 비의미적 태그로 스타일링과 레이아웃 구성을 위해 사용용

인라인 블럭 요소
: <img>, <button>, <textarea>
: 인라인 요소이지만 블럭요소처럼 제약이 없다.
  <img> : 이미지 태그(src로 이미지 위치를 지정하고 alt로 이미지를 대채하는 설명글을 입력)
  <button> : 버튼 태그그

콘텐츠(Contents) : 시작태그와 종료태그 사이에 있는 콘텐츠를 의미한다.
패딩(Padding) : 콘텐츠와 테두리 사이의 간격(안쪽의 여백, 음수값 지정X)
  : px, em, rem을 단위로 사용
  : 축약형(상, 우, 하, 좌)
  : 방향지정(padding-top, padding-right, padding-bottom, padding-left)
테두리(Border) : 박스영역 테두리 부분, 박스크기의 경계선을 의미 border를 기준으로 paddig(안쪽 여백), margin(바깥쪽 여백)이 결정됨
  : width(px로 두께를 지정, 기본값 3px)
  : style(solid, dashed, dotted, double을 주로 사용, 기본값: none)
  : color
마진(Margin) : 테두리 바깥쪽 여백을 의미
  : px, em, rem을 단위로 사용, auto로 정렬 맞출 수 있음
  : 축약형(상, 우, 하, 좌)
  : 방향지정(margin-top, margin-right, margin-bottom, margin-left)
  : 정렬(margin: 0 auto-좌우중앙정렬 / margin: auto 0-상하중앙정렬 / margin: 0 0 0 auto-우측정렬)

자바스크립트
1. 요소 찾기
document.getElementByld("id") : 해당하는 ID 요소 하나를 선택
document.querySelector("css selector") : 해당하는 첫번째 요소를 찾음(CSS 셀렉터 방식)
document.querySelectorAII("css selector") : 해당하는 모든 요소를 찾아서 NodeList로 반환(CSS 셀렉터 방식)
document.body : <body>태그를 선택

2. 콘텐츠 조작
element.textContent : 요소의 콘텐츠를 지정하는 텍스트로 변경
element.innerHTML : 요소의 콘텐츠를 html 태그와 텍스트 둘 다 변경

3. 속성 조작
element.setAttribute('속성명', '값') : 요소의 속성을 추가하거나 수정
element.getAttribute : 요소의 속성에 지정된 값을 읽어올 수 있음

4. 스타일 및 클래스 조작하기
element.style.property : property에 css 속성명을 직접 적어서 변경 
element.classList.method() : method() 자리에 add, remove, toggle, replse, contains 등 다양한 메소드를 지정해 class 제어

5. 이벤트리스너 등록하기
element.addEventListener('event', fucntion) : 이벤트의 종류는 문자열로 넣으며 click, mouseenter, scroll, change 등 다양하게 지정 가능





