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
  let [good, setGood] = useState([]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);

  // [1, 2, 3].map(function () {
  //   console.log(1);
  // });

  return (
    <div className="App">
      <button
      // onClick={() => {
      //   let copy = [...practice];
      //   copy.sort();
      //   setPractice(copy);
      // }}
      >
        글자순으로 배열하기
      </button>
      <div className="blakc-nav">
        <h4>ReactBlog</h4>
      </div>
      {/* <div className="list">
        <h4>
          {practice[0]}
          <span> 좋아요</span>
        </h4>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="blakc-nav"></div>
      <div className="list">
        <h4>{practice[1]}</h4>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="blakc-nav"></div>
      <div className="list">
        <h4>{practice[2]}</h4>
        <p>2월 17일 발행</p>
        <hr />
      </div> */}
      {practice.map(function (a, i) {
        return (
          <div className="list">
            <h4
              onClick={() => {
                setModal(true);
                setTitle(i);
              }}
            >
              {practice[i]}
              <spen
                onClick={() => {
                  let copy = [...good];
                  if (copy[i] === undefined) {
                    copy[i] = 0; // 초기값 설정
                  }
                  copy[i] = copy[i] + 1;
                  setGood(copy);
                }}
              >
                👍
              </spen>
              {good[i]}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}
      <div>
        <button
          onClick={() => {
            setModal(true);
          }}
        >
          글수정
        </button>
        {modal == true ? (
          <Modal
            setPractice={setPractice}
            practice={practice}
            title={title}
          ></Modal>
        ) : null}
      </div>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.practice[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
}

export default App;
