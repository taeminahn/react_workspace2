import { useState } from "react";

function MyuseState05() {
  const [seasons, setSeasons] = useState([
    { id: 1, text: "봄" },
    { id: 2, text: "여름" },
    { id: 3, text: "가을" },
    { id: 4, text: "겨울" },
    // {
    //   id: 1,
    //   text: "봄",
    //   id: 2,
    //   text: "여름",
    //   id: 3,
    //   text: "가을",
    //   id: 4,
    //   text: "겨울",
    // },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleClick = () => {
    const nextSeassion = seasons.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setSeasons(nextSeassion);
    setInputText("");
  };

  const onRemove = (id) => {
    const nextSeason = seasons.filter((season) => {
      return season.id != id;
    });
    setSeasons(nextSeason);
  };

  const seasonList = seasons.map((season) => {
    return (
      <li
        key={season.id}
        onDoubleClick={() => {
          onRemove(season.id);
        }}
      >
        {season.text}
      </li>
    );
  });
  return (
    <div>
      <input type="text" value={inputText} onChange={handleChange}></input>
      <button onClick={handleClick}>추가</button>
      {/* <ul>
        {seasons.map((season) => {
          return <li key={season.id}>{season.text}</li>;
        })}
      </ul> */}
      <ul>{seasonList}</ul>
    </div>
  );
}

export default MyuseState05;
