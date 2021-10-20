import './App.css';
import React, { useState } from 'react';
import './styles/index.scss';

import Header from './components/molecules/header/header';
import SearchTodo from './components/molecules/search-todo/search-todo';
import ToDoItems from './components/organisms/to-do-items/toDoItems';
import ToDoItem from './components/molecules/to-do-item/toDoItem';
import AddToDo from './components/molecules/add-todo/addToDo';
import AddBtn from './components/atoms/add-btn/addBtn';
import AddModal from './components/molecules/add-modal/addModal';

function App() {
  let [ searchTodo, setSearchTodo ] = useState('');
  let [ modalOpen, setModalOpen ] = useState(false);


  const setSearchTodoHandler = (event) => {
    const { value } = event.target;
    setSearchTodo(value);
  }

  const toggleModal = () => setModalOpen(!modalOpen);


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

      <AddToDo>
        <AddBtn 
        onClick={toggleModal}
        />
      </AddToDo>

      {
        modalOpen && (
          <AddModal
          closeModal={toggleModal}
          createTodo={(info) => console.log(info)}
          />
        )
      }
    </div>
  );
}

export default App;
