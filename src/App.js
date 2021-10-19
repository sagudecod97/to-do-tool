import './App.css';
import React, { useState } from 'react';
import './styles/index.scss';

import Header from './components/molecules/header/header';
import SearchTodo from './components/molecules/search-todo/search-todo';
import ToDoItems from './components/organisms/to-do-items/toDoItems';
import ToDoItem from './components/molecules/to-do-item/toDoItem';

function App() {
  let [ searchTodo, setSearchTodo ] = useState('');


  const setSearchTodoHandler = (event) => {
    const { value } = event.target;
    setSearchTodo(value);
  }


  const cleanSearchTodo = () => setSearchTodo('');

  return (
    <div className="App">
      <Header>
        <SearchTodo
        setSearchTodo={setSearchTodoHandler}
        searchTodo={searchTodo}
        cleanSearchTodo={cleanSearchTodo}
        />
      </Header>

        <ToDoItems 
        toDoItems={Array(5).fill(0)}
        >
          {
            item => {
              return(
                <ToDoItem 
                key={Math.random()}
                content={``}
                />
              )
            }
          }
        </ToDoItems>
    </div>
  );
}

export default App;
