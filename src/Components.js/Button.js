import React, { Component } from 'react'

class Button extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         ss:{
          backgroundColor:'white',
          border:'none',
          fontSize: '10px'
         }
      }
      

    }
    changeStyle(){
      this.setState({
        ss:{
          backgroundColor:'red',
          border:'none',
          fontSize: '10px'
        }
      })
    }
    
  render() {
    return (
      <div>
        <button style={this.state.ss} onMouseOver={()=>this.changeStyle()} >red</button>
        <button>green</button>
        <button>blue</button>
      </div>
    )
  }
}

export default Button
