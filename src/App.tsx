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
      isDone: false,
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
          <ul>
            {todos.map((todo) => (
              <li key={Number(todo.id)}>
                {todo.title} - {todo.contents}
              </li>
            ))}
          </ul>
        </div>
      </main>
      <footer style={{ backgroundColor: "#d0f4de" }}>푸터입니다</footer>
    </div>
  );
}

export default App;
