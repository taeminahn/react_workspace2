import React, {
  useRef,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";

const MyuseCallback01 = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  //   useCallback(콜백함수, [])
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
    console.log(e.target.value);
  });

  const onInsert = useCallback(() => {
    console.log("onInsert");
    setList([parseInt(number), ...list]);
    setNumber("");
  });

  const getAverage = (list) => {
    console.log("getAverage");
    if (list.length === 0) {
      return 0;
    } else {
      const sum = list.reduce((a, b) => {
        return a + b;
      });
      return sum / list.length;
    }
  };

  // useMemo(콜백함수, [ ])
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input ref={inputRef} value={number} onChange={onChange}></input>
      <button onClick={onInsert}>등록</button>
      <p>
        {/* <b>평균: {getAverage(list)}</b> */}
        <b>평균: {avg}</b>
      </p>
      <ul>
        {list.map((element, idx) => {
          return <li key={idx}>{element}</li>;
        })}
      </ul>
    </div>
  );
};

export default MyuseCallback01;
