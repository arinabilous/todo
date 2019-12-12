import React, {Component} from "react";
import './todo-list-item.css';


export default class TodoListItem extends Component {
    render() {

        const {label, important = false} = this.props;
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
    }
};

