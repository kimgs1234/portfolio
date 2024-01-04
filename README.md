# 포트폴리오 작업 일지
## 포트폴리오 개요
지금 까지 배웠던 기술들은 어떤것이 있는지 소개해 드리고 어떤 프로젝트들을 기획해서 작업을 하였는지 보여드리는 방향으로 이번 포트폴리오의 제작방향을 잡았다. <br>
포트폴리오에 정리를 하면서 어떤것이 부족하고 어떤부분을 보완 해야할지 많이 깨닫는 계기가 되었다.

## 사용기술
* UI : react <br>
* 디자인: css <br>
* 라이브러리 : react-router-dom <br>
* 툴: Github ,figma <br>

## 페이지 구성
### 헤더페이지
nav바로 이루어 져있고 메뉴를 누르면 각 페이지로 이동이 되게 react-router-dom <Link>로 구현을 하였다. <br>
로고를 누르면 첫화면으로도 가게 구현을 해놓았다. <br>

### 메인페이지 
우선 맨윗부분에 포트폴리오를 방문해주시는 사람들을 환영하는 장면이 있고 그 밑에 메인화면에서도 다른 페이지에 이동할 수 있게 <br>
링크 연결화면을 react-router-dom 으로 구현을 해놓았다. 맨밑에는 About 장면으로 저에 대한 간략한 소개가있다.

### 스킬페이지 
이번 국비학원을 수료하면서 그동안 배웠던 기술들이 집약되어있는 페이지다. <br>
프론트엔드 부분인 html & css , javascript , react를 비롯한 백엔드 부분인 <br>
mongoDB , node.js 부분이 있고 어떤 툴을 이용해서 작업을 할수 있는지 소개되어 있다.

### 프로젝트 페이지 
프로그래밍을 입문하고 내가 그동안 진행했었던 프로젝트들이 소개되어 있다. <br>
팀프로젝트 2개 와 포트폴리오, 그리고 개인프로젝트 1개등을 소개하고 있다.

## 디렉토리 구조
![포폴디렉토리](https://github.com/kimgs1234/portfolio/assets/142865411/b332ad7d-a46c-4bc4-bd0f-f8ea0d875f7a)

## 문제 및 해결
*상황: 헤더의 메뉴중 skill 과 project 페이지를 누르면 페이지로 넘어가면서 맨위로 넘어가져야 하는데 넘어가기 전 페이지 중간에서 넘어가면 <br>
페이지의 중간부분으로 이동현상이 발생함

*해결: 우선 스크롤이 맨위로 부드럽게 이동하는 컴포넌트를  
``` react
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

```
와 같이 만들고 project컴포넌트와 skill컴포넌트에  scrolltoTop 컴포넌트를 넣었더니 페이지를 누르면 맨위로 가졌다.

*상황: 헤더의 메뉴중 About페이지를 누르면 맨 처음 메인 페이지의 맨 밑 about쪽으로 넘어가야 하는데 <br>
마찬가지로 이동하기전 높이값과 같은 위치로 스크롤이 됨

*해결: 
``` react
const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  const location = useLocation();

  useEffect(() => {
    if (location.search === "?scrollTo=bottom") {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [location]); 

```
about부분이 있는 컴포넌트에 저 코드를 추가하고 링크부분에 다음과 같이 path를 수정하니 문제가 해결됨 <br>
![링크 작성 방식](https://github.com/kimgs1234/portfolio/assets/142865411/b28f5ec3-9e17-4129-94ac-0a795326f823)

## 느낀점
이번 국비를 수료하게 되면서 많은 것을 배웠다고 생각했지만 실제로 활용하는데에는 어려움이 많았고 <br>

이것들을 실제로 활용 하려면 많이 써보고 따로 공부도 더 열심히 해야겠다는 생각이 들었다. <br>

수료를 하고도 좋은 개발자가 되기 위해 공부 꾸준히 해야 겠다고 느꼈다.

## 포트폴리오 바로가기
<a href="https://kimgs1234.github.io/portfolio/" target="_blank">포트폴리오 바로가기</a>
