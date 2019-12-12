import React from "react";
import './todo-list-item.css';

const TodoListItem = ({label, important = false}) => {
    const style = {
        color: important ? 'steelblue' : 'green',
        fontWeight: important ? 'bold' : 'normal'
    };
    return (
        <div className="todo-list-item">
              <span style={style} className="todo-list-item-label">
                  {label}
              </span>
              <div>
                  <button type="button" className="btn btn-outline-danger btn-sm ml-2">
                  <i className="fa fa-trash-o"/>
              </button>
              <button type="button" className="btn btn-outline-success btn-sm ml-2">
                  <i className="fa fa-exclamation"/>
              </button>
              </div>
        </div>
    )
};
export default TodoListItem;