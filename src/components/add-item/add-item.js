import React, { Component } from 'react';
import './add-item.css';

export default  class AddItem extends Component {
    state = {
        add: false
    };

    addItem = () => {
        this.setState(({add}) => {
            return {
                add: true
            }
        });
    };

  render() {
      const { add } = this.state;
      let classNames = 'add-item';
      if (add) {
          classNames += ' add';
      }
    return (
      <div className={classNames}>
        <button onClick={() => this.props.onAddItem('Hey')} type="button" className="btn btn-outline-secondary">Add item</button>
      </div>
    );
  }
}
