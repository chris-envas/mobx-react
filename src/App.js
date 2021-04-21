import React from "react"
import './App.css';

const addMessage = str => component => {
  component.prototype.message = str
}

@addMessage("cool!")
class App extends React.Component {
  render () {
    return (
      <div>{this.message}</div>
    )
  }
}

export default App;
