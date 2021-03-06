import './App.css';
import React, { useState } from 'react';
import './styles/index.scss';

import UseLocalStorage from './hooks/useLocalStorage';

import Header from './components/molecules/header/header';
import SearchTodo from './components/molecules/search-todo/search-todo';
import ToDoItems from './components/organisms/to-do-items/toDoItems';
import ToDoItem from './components/molecules/to-do-item/toDoItem';
import AddToDo from './components/molecules/add-todo/addToDo';
import AddBtn from './components/atoms/add-btn/addBtn';
import AddModal from './components/molecules/add-modal/addModal';
import EmptyTodo from './components/atoms/empty-todo/empty-todo';
import NotFoundToDo from './components/atoms/not-found/notFound';

function App() {
  let [ searchTodo, setSearchTodo ] = useState('');
  let [ modalOpen, setModalOpen ] = useState(false);

  let { 
    toDos,
    filteredToDosArr,
    setNewToDo,
    deleteToDo,
    newFilteredTodos,
    checkAsDone,
    loading,
    eraseFilterButton,
  } = UseLocalStorage();

  const setSearchTodoHandler = (event) => {
    const { value } = event.target;
    newFilteredTodos(value);
    setSearchTodo(value);
  }

  const toggleModal = () => setModalOpen(!modalOpen);


  const cleanSearchTodo = () => {
    setSearchTodo('');
    eraseFilterButton();
  };

  return (
    <div className="App">
      <Header
      loading={loading}
      >
        <SearchTodo
        loading={loading}
        setSearchTodo={setSearchTodoHandler}
        searchTodo={searchTodo}
        cleanSearchTodo={cleanSearchTodo}
        />
      </Header>

      <ToDoItems 
      toDoItems={toDos}
      filteredToDos={filteredToDosArr}
      emptyTodos={() => <EmptyTodo />}
      notFoundTodo={() => <NotFoundToDo />}
      loading={loading}
      >
        {
          item => {
            return(
              <ToDoItem 
              key={item.id}
              id={item.id}
              isDone={item.isDone}
              setIsDone={checkAsDone}
              deleteToDo={deleteToDo}
              content={item.todo}
              loading={loading}
              />
            )
          }
        }
      </ToDoItems>

      <AddToDo>
        <AddBtn
        loading={loading}
        onClick={toggleModal}
        />
      </AddToDo>

      {
        modalOpen && (
          <AddModal
          closeModal={toggleModal}
          createTodo={setNewToDo}
          />
        )
      }
    </div>
  );
}

export default App;
