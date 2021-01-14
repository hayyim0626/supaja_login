# 수파자 프론트엔드 과제

안녕하세요! 프론트엔드 개발자 홍예찬입니다. 과제 수행을 위해 어떻게 코드를 작성했는지 README 파일을 통해 설명해드리도록 하겠습니다.

## 기술 스택

- React(React Hooks)<br>
- SCSS<br>
- React-Router-Dom(로그인 성공 시, 메인 페이지로 넘어가는 기능을 구현하기 위해 사용했습니다.)<br>

## 컴포넌트 단위 분류
가장 먼저, 재사용성을 고려하여 컴포넌트를 단위별로 분류했습니다.<br>
Navbar와 Footer의 경우, 로그인 페이지뿐만 아니라 다른 페이지에서도 재사용되기 때문에 따로 Components라는 폴더에 작업했습니다.<br>
그 이후, 로그인 페이지와 메인 페이지는 Pages 폴더에서 작업했습니다.<br>
각각의 컴포넌트는 Routes.js 파일에서 switching하는 방식으로 구현했습니다. <br>

<img width="175" alt="20210113_235308" src="https://user-images.githubusercontent.com/68314696/104468195-836bd800-55fa-11eb-90fc-aba4a5aadbbe.png">

## 레이아웃 구현
초기세팅이 끝난 후, 각 컴포넌트별 레이아웃을 구현했습니다.<br>
Navbar-Footer-Login 순으로 레이아웃을 구현했습니다.<br>
완성된 레이아웃은 다음과 같습니다.

<img width="960" alt="20210113_235607" src="https://user-images.githubusercontent.com/68314696/104468554-f07f6d80-55fa-11eb-8da1-c029f8d682d3.png">

## 로그인 로직 구현
로그인 로직의 경우, Notion페이지의 조건에 따라 구현했습니다.<br>
API통신을 위해 fetch()함수를 사용했으며, 조건에 따라 이메일이 존재하지 않는 경우 alert창을 통해 받아온 메세지를 나타냈습니다. 비밀번호가 일치하지 않는 경우에도 동일하게 구현했습니다.<br>
<img width="960" alt="20210114_000750" src="https://user-images.githubusercontent.com/68314696/104470041-94b5e400-55fc-11eb-9d5f-741d54ef3afe.png"> <br>
로그인이 성공했을 경우, alert창에 "로그인 성공!"이라는 메세지가 뜨고, 받은 토큰을 로컬스토리지에 저장한 이후, 메인 페이지로 넘어가도록 구현했습니다.<br>
메인 페이지의 경우 실제 수파자 메인 사이트를 보고 레이아웃을 일부 구현했습니다.<br>
![supaja](https://user-images.githubusercontent.com/68314696/104592610-d05eb580-56b1-11eb-9db1-5105675ea622.gif)
