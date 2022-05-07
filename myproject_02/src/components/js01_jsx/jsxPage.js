// function JsxPage() {
//   return (
//     <div>
//       <div>Hello</div>
//       <div className="react">React</div>
//     </div>
//   );
// }

//////////////////////////////

// function JsxPage() {
//   return (
//     <>
//       <h1>work</h1>
//       <h2>list</h2>
//     </>
//   );
// }

//////////////////////////////

// function JsxPage() {
//   const numX = 3;
//   const numY = 5;

//   // style 속성의 값은 camel 표기법을 사용한다.
//   return <p style={{ backgroundColor: "aqua", color: "red" }}>{numX + numY}</p>;
// }

///////////////////////////////////////

// function JsxPage() {
//   const name = "react";

//   return <>{name ? name : null}</>;
// }

/////////////////////////////////////

// function JsxPage() {
//   const name = "";

//   return <>{name == "react" ? name : "값이 undefined 입니다."}</>;
// }

///////////////////////////////////////

// function JsxPage() {
//   const name = undefined;

//   return <div>{name}</div>;
// }

//////////////////////////////////////////

function JsxPage() {
  const name = undefined;

  return (
    <div>
      {/*주석처리*/}
      <p>comment</p>
    </div>
  );
}
export default JsxPage;
