# Git-Issues-App
                                                   
## 실행 방법
                                                   
1) git clone을 해주세요
                                  
2) .env.template ⇒ .env로 변경 후, REACT_APP_USER_TOKEN에 유저 토큰을 넣어주세요.
                                  
3) 아래 명령어를 순서대로 실행해주세요.
                                  
```json
npm install
npm start
```
치종 구현 결과 `master` 브랜치에서 확인가능합니다

                                  
## Structures
                                  
- `/assets` : font, image, icon 등 정적 요소들을 두는 폴더
- `/components`: 여러 페이지에서 공유되는 shared(or common) 컴포넌트, layout 컴포넌트를 두는 폴더
- `/pages`: 여러 하위 컴포넌트 조각들이 모여 만들어지는 페이지 컴포넌트
    - 특정 페이지에서만 사용되는 컴포넌트는 `pages/components/` 안에 두지만, 이번 프로젝트의 경우 공통되는 shared Article 컴포넌트만 사용했기 때문에 `pages/components/`에는 따로 둘 필요가 없었음
- `/services`: api 파일들을 두는 폴더
- `/stores`: Mobx store를 이용하여 필요한 데이터를 api로 요청 및 가공, 저장하는 폴더
- `/types`: entity type들을 보관하는 폴더
- `/utils`: 컴포넌트 렌더링 외에, 연산을 수행하는 모듈들을 저장하는 폴더
                 
                                                   
## 사용기술 및 라이브러리
                 
- `React`
- `Typescript`
- `eslint & prettier`
- `react-router-dom`
- `mobx, mobx-react-lite`
- `axios`
- `styled-components`
- `react-icons`
                 
                                                                    
## GIT
                 
                                                                    
### Project
                                  
아래처럼 보드(https://github.com/users/h01010/projects/4)를 활용하여 할 태스크들을 분리
![image](https://github.com/h01010/Git-Repo-Issues-App/assets/44168693/eeae1f1f-73c1-4b12-8841-1b8e3c4cea9e)


                                  
### Commit & Branch
                                  
- commit msg type
[참고 링크](https://medium.com/humanscape-tech/%ED%9A%A8%EC%9C%A8%EC%A0%81%EC%9D%B8-commit-message-%EC%9E%91%EC%84%B1%EC%9D%84-%EC%9C%84%ED%95%9C-conventional-commits-ae885898e754)
    - **build**: 모듈 설치 및 package 변화, readme.md 추가
    - **feat**: 새로운 기능 및 컴포넌트 구현
    - **fix**: 버그 수정
    - **refactor**: 버그를 수정하거나 기능을 추가하지 않는 코드 변경, 리팩토링
    - **style**: 스타일 적용 및 수정
- branch
    - 브랜치 앞에는 GIA-{num}를 붙여 Project 보드의 태스크 번호와 연결해두었습니다.
- PR
    - change list와 결과 화면 result 첨부(아래)
          
![image](https://github.com/h01010/Git-Repo-Issues-App/assets/44168693/27c08d0b-8c76-48d9-9f8c-16cdf83430fb)
                                  
                                  
                                  
## 구현하지 못한 태스크
                                  
*시간상의 문제로 구현하지 못한 태스크는 TODO 주석으로 추가해두었습니다, 아래는 구현 아이디어입니다.*

- 필터 기능
    - api request parameter 추가
        - state - open | closed | all & sort - created | updated | comments
- 페이지네이션
    - api request parameter 추가
        - page = {number}
    - Math.floor(총 데이터 수 / 한 페이지당의 데이터 수-10개)에 맞게 페이지 넘버들을 연산
- Not Found 페이지 스타일링
