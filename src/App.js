import { useState } from 'react';
import { useMemo } from 'react';
import './App.css';

// useMemo => 메모라이제이션(기억)

function App() {
  const [list, setList] = useState([1, 2, 3, 4]);
  const [str, setStr] = useState('합계');

  const getAddResult = () => {
    let sum = 0;
    list.forEach((i) => (sum = sum + i)); // return 을 하지 않고 연산만 진행
    console.log('sum 함수 실행됨 : ', sum);
    return sum;
  };

  // React hook : React 16.8에 추가도니 라이브러리
  const addResult = useMemo(() => getAddResult(), [list]);

  // list의 값을 바꾸면, return이 다시 실행되므로, getAddResult()함수가 다시 실행됨
  return (
    <div>
      <button
        onClick={() => {
          setStr('안녕');
        }}
      >
        문자변경
      </button>
      <button
        onClick={() => {
          setList([...list, 10]);
        }}
      >
        리스트값 추가
      </button>
      <div>
        {list.map((i) => (
          <h1>{i}</h1>
        ))}
      </div>
      <div>
        {str} : {addResult}
      </div>
    </div>
  );
}

export default App;
