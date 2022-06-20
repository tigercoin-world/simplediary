import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "박주희",
    content: "하이염",
    emotion: 3,
    created_date: new Date().getTime() // new Date()를 하면 현재 시간 기준으로 생성이 된다.
  },
  {
    id: 2,
    author: "박근형",
    content: "하이염",
    emotion: 3,
    created_date: new Date().getTime() // new Date()를 하면 현재 시간 기준으로 생성이 된다.
  },
  {
    id: 3,
    author: "임상희",
    content: "하이염",
    emotion: 3,
    created_date: new Date().getTime() // new Date()를 하면 현재 시간 기준으로 생성이 된다.
  },
  {
    id: 4,
    author: "박주희",
    content: "하이염",
    emotion: 3,
    created_date: new Date().getTime() // new Date()를 하면 현재 시간 기준으로 생성이 된다.
  },
]

const App = () => {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList}/>
    </div>
  );
};
export default App;
