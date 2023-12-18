import React, { useState } from "react";

function App() {
  type Todos = {
    id: Number;
    title: string;
    contents: string;
    isDone: Boolean;
  };
  const [todos, setTodos] = useState<Todos[]>([
    {
      id: 1,
      title: "제목1",
      contents: "내용1",
      isDone: false,
    },
    {
      id: 2,
      title: "제목2",
      contents: "내용2",
      isDone: true,
    },
  ]);

  return (
    <div>
      <header style={{ backgroundColor: "#ff99c8" }}>헤더입니다 </header>
      <main style={{ backgroundColor: "#fcf6bd" }}>
        <div>
          제목
          <input type="text" />
          내용
          <input type="text" />
          <button>입력 </button>
        </div>
        <div>
          <h1>할일 목록</h1>
          <ul>
            {todos
              .filter((todo) => {
                return todo.isDone === false;
              })
              .map((todo) => (
                <div
                  key={String(todo.id)}
                  style={{
                    border: "1px solid black",
                    margin: "20px",
                  }}
                >
                  <h3>{todo.title}</h3>
                  <p> {todo.contents}</p>
                  <p> 완료 여부 : {todo.isDone.toString()}</p>
                </div>
              ))}
          </ul>
        </div>

        <div>
          <h1>완료된 목록</h1>
          <ul>
            {todos
              .filter((todo) => {
                return todo.isDone === true;
              })
              .map((todo) => (
                <div
                  key={String(todo.id)}
                  style={{
                    border: "1px solid black",
                    margin: "20px",
                  }}
                >
                  <h3>{todo.title}</h3>
                  <p> {todo.contents}</p>
                  <p> 완료 여부 : {todo.isDone.toString()}</p>
                </div>
              ))}
          </ul>
        </div>
      </main>
      <footer style={{ backgroundColor: "#d0f4de" }}>푸터입니다</footer>
    </div>
  );
}

export default App;
