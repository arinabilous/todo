import React from 'react';
import ReactDom from 'react-dom';

import AppHeader from "./components/app-header";
import SearchPenal from "./components/search-penal";
import TodoList from "./components/todo-list";


const App = () => {
    const todoData = [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Make Awesome App', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 }
    ];
    return (
        <div>
            <AppHeader/>
            <SearchPenal/>
            <TodoList todos={todoData}/>
        </div>
    );
};

ReactDom.render(<App/>, document.getElementById('root'));