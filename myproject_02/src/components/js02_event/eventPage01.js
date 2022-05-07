export default function EventPage01() {
  const name = "노진구";

  function showName() {
    console.log(name);
  }
  function showText(event) {
    // console.log(document.getElementsByTagName("input")[0].value);
    console.log(event.target.value);
  }
  function showMessage(msg) {
    console.log(msg);
  }
  function ThisIsComponent() {
    console.log("나는 컴포넌트");
  }
  return (
    <div>
      <button onClick={showName}>ShowName</button>
      <input type="text" onChange={showText} defaultValue="고수" />
      <input
        type="text"
        onChange={(e) => {
          showMessage(e.target.value);
        }}
      ></input>
      <ThisIsComponent onClick={{ showText }} />
    </div>
  );
}
