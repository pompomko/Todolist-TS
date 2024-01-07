import React, { useState } from "react";
import uuid from "react-uuid";

function App() {
  type Todos = {
    id: string;
    title: string;
    contents: string;
    isDone: Boolean;
  };
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>([
    {
      id: uuid(),
      title: "타입 스크립트 ",
      contents: "제네릭 연습하기 ",
      isDone: false,
    },
    {
      id: uuid(),
      title: "타입스크립트 과제",
      contents: "타입스크립트에 접목해서 todolist 만들기",
      isDone: true,
    },
  ]);

  return (
    <div>
      <header>
        <h1>Type Script TodoList </h1>
      </header>
      <main style={{ backgroundColor: "#fcf6bd" }}>
        <div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const newTodo = {
                id: uuid(),
                title: title,
                contents: contents,
                isDone: false,
              };
              setTodos([...todos, newTodo]);
            }}
          >
            제목
            <input
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            내용
            <input
              value={contents}
              onChange={(event) => {
                setContents(event.target.value);
              }}
            />
            <button>입력 </button>
          </form>
        </div>
        <div>
          <h1>할일 목록</h1>
          <ul>
            {todos
              .filter((todo) => todo.isDone === false)
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
                  <button
                    onClick={() => {
                      const newTodos = todos.map((item) => {
                        if (item.id === todo.id) {
                          return {
                            ...item,
                            isDone: !item.isDone,
                          };
                        } else {
                          return item;
                        }
                      });
                      setTodos(newTodos);
                    }}
                  >
                    완료
                  </button>
                  <button
                    onClick={() => {
                      const deletedTodos = todos.filter((item) => {
                        return item.id !== todo.id;
                      });
                      setTodos(deletedTodos);
                    }}
                  >
                    삭제
                  </button>
                </div>
              ))}
          </ul>
        </div>

        <div>
          <h1>완료된 목록 확인중입니다</h1>
          <ul>
            {todos
              .filter((todo) => todo.isDone === true)
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
                  <button
                    onClick={() => {
                      const newTodos = todos.map((item) => {
                        if (item.id === todo.id) {
                          return {
                            ...item,
                            isDone: !item.isDone,
                          };
                        } else {
                          return item;
                        }
                      });
                      setTodos(newTodos);
                    }}
                  >
                    완료취소
                  </button>
                  <button
                    onClick={() => {
                      const deletedTodos = todos.filter((item) => {
                        return item.id !== todo.id;
                      });
                      setTodos(deletedTodos);
                    }}
                  >
                    삭제
                  </button>
                </div>
              ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
