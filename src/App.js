import './App.css';
import React, { useState } from 'react';
import './styles/index.scss';

import Header from './components/molecules/header/header';
import SearchTodo from './components/molecules/search-todo/search-todo';

function App() {
  let [ searchTodo, setSearchTodo ] = useState('');


  const setSearchTodoHandler = (event) => {
    const { value } = event.target;
    console.log(value)
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
    </div>
  );
}

export default App;
