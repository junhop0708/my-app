import './App.css';

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

let a = 10; // 변수
const b = [10, 20, 30]; // 상수

// 대괄호 : [], 중괄호 : {}, 소괄호 : ()
// return 문안에 JSX가 한줄로 작성되어있으면  소괄호() 가 필요없음
function App() {
  let c;
  let d = undefined;

  console.log(1, c, d);

  const myStyle = {
    color: 'red',
  };

  return (
    <div>
      <div style={myStyle}>
        안녕 {a === 10 ? '10입니다.' : '10이 아닙니다.'}
      </div>
      <h1 className="box-style">해딩태그 {b === 20 && '20입니다.'}</h1>
      <hr />
      <input type="text" />
      <div>{b[0]}</div>
    </div>
  );
}

export default App;
