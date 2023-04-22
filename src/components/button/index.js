import React, { Component } from 'react';
import styles from './Button.module.css'; // Import css modules stylesheet as styles



class App extends Component {
  handleClick = () => {
    import('../loader/index')
      .then(({ moduleA }) => {
        // Use moduleA
        alert("Hello")
      })
      .catch(err => {
        // Handle failure
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Accept</button>
        <button  color="red" onClick={this.handleClick}>Reject </button>
      </div>
    );
  }
}

export default App;