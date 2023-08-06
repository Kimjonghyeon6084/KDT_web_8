// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  let post = "강남 우동 맛집";
  let [a, b] = useState("남자 코트 추천");
  let [logo, setLogo] = useState("ReactBlog");
  let [practice, setPractice] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);

  let num = [1, 2];
  return (
    <div className="App">
      <div className="blakc-nav">
        <h4>{practice[0]}</h4>
      </div>
      <div className="list">
        <h4>{a}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="blakc-nav">
        <h4>{practice[1]}</h4>
      </div>
      <div className="list">
        <h4>{a}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="blakc-nav">
        <h4>{practice[2]}</h4>
      </div>
      <div className="list">
        <h4>{a}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
