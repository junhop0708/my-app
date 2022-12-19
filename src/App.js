import { useState } from 'react';
import './App.css';
import Sub from './Sub.js';

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
  let list = [1, 2, 3];
  // let number = 1; // 상태 값 아님
  const [number, setNumber] = useState(2); // React안에 hooks 라이브러리 상태값이 됨.

  const add = () => {
    setNumber(number + 1); // React한테 number 값을 변경한다고 요청하는 함수
    console.log('add', number);
  };

  // 랜더링 시점 = 상태값 변경
  // 상태가 변경이 되면 return이 전체 reload
  // React는 component 설계를 잘해야 함

  // 다운로드 받음
  console.log('App start');

  const [num, setNum] = useState(5);

  let sample = [
    { id: 1, name: '홍길동' },
    { id: 2, name: '이순신' },
    { id: 3, name: '장보고' },
    { id: 4, name: '세종대왕' },
  ];

  const [users, setUsers] = useState(sample); // reference가 변경이 되어야 동작함

  // 다운로드 버튼을 클릭하면 실행되는 함수
  const download = () => {
    // 기존 데이터 셋팅

    //setUsers([...sample]); // 이렇게하면 reference가 변경이 되므로 무조건 다시 re-rendering 진행

    //const a = sample.concat({ id: 5, name: '퇴계이황' });
    // concat함수에 새로운 변수를 선언하여 추가를 하면, 동일한 데이터로 인식하여 객체에 추가는 안됨
    //fetch().then().then();

    console.log(sample);
    //sample.push({ id: 6, name: '율곡이이' });
    setUsers([...sample, { id: num, name: '퇴계이황' }]); // 깊은 복사를 해야 다시 rendering 가능
    setNum(num + 1);
  };

  console.log('rendering');

  return (
    <div>
      <h1>숫자 : {number}</h1>
      <button onClick={add}>더하기</button>
      <Sub />
      <hr />
      <button onClick={download}>다운로드</button>
      {users.map((u) => (
        <h1>
          {u.id}, {u.name}
        </h1>
      ))}
    </div>
  );
}

export default App;
