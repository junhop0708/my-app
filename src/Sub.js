import React from 'react';

let num = 10;

function Sub() {
  // 함수 제공 !!
  return (
    <div>
      <h1>Sub입니다.</h1>
    </div>
  );
}

export { num };
export default Sub; // default는 외부로 함수를 노출하겠다는 뜻
