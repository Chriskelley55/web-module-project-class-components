import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        Todo App
        <form>
          <input placeholder='todo'/>
          <button>Add</button>
          <button>Clear</button>
        </form>
      </div>
    )
  }
}
