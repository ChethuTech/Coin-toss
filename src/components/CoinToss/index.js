import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {heads: 0, tails: 0, coinStatus: 'heads'}

  tossTheCoin = () => {
    const randomNum = Math.floor(Math.random() * 2)

    if (randomNum === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        coinStatus: 'heads',
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        coinStatus: 'tails',
      }))
    }
  }

  render() {
    const {heads, tails, coinStatus} = this.state
    return (
      <div className="bg-container">
        <div className="coin-toss-card">
          <h1 className="heading"> Coin Toss Game</h1>
          <p className="heads-or-tails"> Heads (or) Tails</p>
          <img
            className="toss-image"
            src={
              coinStatus === 'heads'
                ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
            }
            alt="toss result"
          />
          <button onClick={this.tossTheCoin} className="toss-btn" type="button">
            Toss Coin
          </button>

          <div className="count-result-container">
            <p className="count-result">Total:{heads + tails}</p>
            <p className="count-result">Heads:{heads}</p>
            <p className="count-result">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
