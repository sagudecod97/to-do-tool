import { useState, useEffect } from 'react';

const UseLocalStorage = () => {
    let { localStorage } = window;
    let [ toDos, setToDos ] = useState([]);
    let [ loading, setIsLoading ] = useState(true);
    let [ filteredToDos, setFilteredTodos ] = useState([]);
    let [ isFiltering, setIsFiltering ] = useState(false);
    
    const setNewToDo = (newToDo) => {
        let toDosArray = localStorage.getItem('TODOS_ARR');
        toDosArray = JSON.parse(toDosArray);

        let newTodoObj = {
            todo: newToDo,
            isDone: false,
            id: Math.random() * 10,
        };

        toDosArray.splice(0, 0, newTodoObj);
        localStorage.setItem("TODOS_ARR", JSON.stringify(toDosArray));
        setToDos(toDosArray);
    }

    const deleteToDo = (toDoId) => {
        let toDosArray = localStorage.getItem('TODOS_ARR');
        toDosArray = JSON.parse(toDosArray);
        let filteredArray = toDosArray.filter(arrToDo => arrToDo.id !== toDoId );
        localStorage.setItem("TODOS_ARR", JSON.stringify(filteredArray));
        setToDos(filteredArray);
    }

    const checkAsDone = (id) => {
        let toDosArray = localStorage.getItem('TODOS_ARR');
        let newToDoArray = JSON.parse(toDosArray);

        newToDoArray = newToDoArray.map(arrToDo => {
            if (arrToDo.id === id) {
                arrToDo.isDone = !arrToDo.isDone;
            };

            return arrToDo;
        });

        localStorage.setItem("TODOS_ARR", JSON.stringify(newToDoArray));
        setToDos(newToDoArray);
    }

    const newFilteredTodos = (toDoToFilter) => {
        if (toDoToFilter.length === 0) {
            return setIsFiltering(false);
        }
        
        setIsFiltering(true);

        let newToDos = [ ...toDos ];
        toDoToFilter = toDoToFilter.toLowerCase();

        newToDos = newToDos.filter(toDoItem => {
            toDoItem = toDoItem.todo.toLowerCase();

            return toDoItem.includes(toDoToFilter);
        });
        
        setFilteredTodos(newToDos);
    }

    const eraseFilterButton = () => {
        setFilteredTodos([]);
        setIsFiltering(false);
    }

    useEffect(() => {
       setTimeout(() => {
        let todosStorage = localStorage.getItem('TODOS_ARR');

        if (!todosStorage) {
            setIsLoading(false);
            return localStorage.setItem('TODOS_ARR', '[]');
        }

        todosStorage = JSON.parse(todosStorage);

        setIsLoading(false);
        setToDos(todosStorage);
       }, 3000)

       window.addEventListener('storage', () => {
            let todosStorage = localStorage.getItem('TODOS_ARR');
            todosStorage = JSON.parse(todosStorage);
            setToDos(todosStorage);
        })

    }, [ toDos ])

    return({
        toDos,
        filteredToDosArr: [filteredToDos, isFiltering],
        setNewToDo,
        deleteToDo,
        checkAsDone,
        newFilteredTodos,
        loading,
        eraseFilterButton
    })
};

export default UseLocalStorage;
