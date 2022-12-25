import { cleanup } from '@testing-library/react';
import { useEffect, useState } from 'react';
import Third from './aa/Third';
import './App.css';
import Sub from './Sub';
import { num } from './Sub';

// 0. React 엔진- 데이터 변경을 감지해서 UI를 그려주는 엔진
// 1. 실행과정 (index.html) - Single Page Application (SPA)
// 2. JSX 문법 : javascript에 HTML을 작성하는 문법
// 3. 바벨 (자바스크립트 ES5) -> ES6
// React에서 페이지를 이동한다는 건 화면을 변경하는게 아니라, body의 내용을 바꾸는 것뿐임

// (1) React는 무조건 하나의 DOM만 return을 해준다!
// (2) 변수선언은 let 혹은 const로만 해야한다!
// (3) JSX에서는 if 문은 사용이 불가능, 삼항연산자는 사용 가능 (조건 ? 값(true) : 값(false))
// (4) 조건부 렌더링 (조건 && 값(true))
// (5) css디자인
//     - 내부에 적는 방법
//     - 외부 파일에 적는 방법
//     - 라이브러리 사용 (부트스트랩, component-styled)

// 대괄호 : [], 중괄호 : {}, 소괄호 : ()
// return 문안에 JSX가 한줄로 작성되어있으면  소괄호() 가 필요없음
function App() {
  const [data, setData] = useState(0);
  const [search, setSearch] = useState(0);

  const download = () => {
    // 다운로드 받고 (통신)
    let downloadData = 5; // 가정
    setData(downloadData);
  };

  // 실행시점 :
  // (1) App() 함수가 최초 실행될 때 (Mount 될 때) 그림이 최초에 그려질 때
  // (2) 상태 변수가 변경될 때 (그게 dependencyList에 등록되어 있어야함)
  // (3) 의존리스트 관리를 할 수 있다.
  useEffect(() => {
    console.log('useEffect 실행됨');
    download();
  }, [search]); // search가 변경이 되면 useEffect가 실행 (초기값인 5로 다시 셋팅)

  return (
    <div>
      <h1>검색 </h1>
      <button
        onClick={() => {
          setSearch(2);
        }}
      >
        검색하기
      </button>
      <h1>데이터 : {data}</h1>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        더하기
      </button>
    </div>
  );
}

export default App;
