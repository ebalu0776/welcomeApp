import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  renderAuthButton = () => {
    const {isSubscribe} = this.state

    if (isSubscribe === true) {
      return <button type="button">Subscribe</button>
    }

    return <button type="button">Subscribed</button>
  }

  render() {
    return (
      <div>
        <h1 className="heading">Welcome</h1>
        {this.renderAuthButton()}
      </div>
    )
  }
}
export default Welcome
