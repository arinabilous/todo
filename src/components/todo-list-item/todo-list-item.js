import React, {Component} from "react";
import './todo-list-item.css';


export default class TodoListItem extends Component {

    state = {
        done: false,
        important: false
    };
    onLabelClick = () => {
        this.setState(({done}) => {
            return {
                done: !done
            }
        });
    };
    onMarckImportant = () => {
        this.setState(({important}) => {
           return {
               important: !important
           }
        });
    };

    render() {
        const {label, onDeleted} = this.props;
        const { done, important } = this.state;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }
        if (important ) {
            classNames += ' important ';
        }

        return (
            <div className={classNames}>
              <span  className="todo-list-item-label"
                    onClick={this.onLabelClick}>
                  {label}
              </span>
                <div>
                    <button type="button" className="btn btn-outline-danger btn-sm ml-2"
                            onClick={onDeleted}>
                        <i className="fa fa-trash-o"/>
                    </button>
                    <button type="button" className="btn btn-outline-success btn-sm ml-2"
                            onClick={this.onMarckImportant}>
                        <i className="fa fa-exclamation"/>
                    </button>
                </div>
            </div>
        )
    }
};

