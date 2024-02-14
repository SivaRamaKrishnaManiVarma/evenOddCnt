// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOdd extends Component {
  state = {count: 0}

  randomNum = () => Math.ceil(Math.random() * 100)

  Increment = () => {
    const randomNumber = this.randomNum()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Count {count}</h1>
          <p className="para"> Count is {displayText}</p>
          <button className="button" type="button" onClick={this.Increment}>
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOdd
