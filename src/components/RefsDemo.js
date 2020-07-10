import React, { Component } from 'react'

class RefsDemo extends Component {

  constructor(props) {
    super(props)
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.inputRef);
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <h2>Refs Demo</h2>
        <input type="text" ref={this.inputRef} />
      </div>
    )
  }

}

export default RefsDemo
