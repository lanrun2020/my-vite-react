import { Component } from "react";

class Item extends Component {
  render () {
    const { name, isPacked } = this.props
    return (
      <li>{isPacked ? name + '√': name}</li>
    )
  }
}
class Main extends Component {
  render () {
    return (
      <div className="main-content">
        <Item name='picture' isPacked={true}></Item>
        <Item name='picture2' isPacked={true}></Item>
        <Item name='picture3' isPacked={false}></Item>
      </div>
    )
  }
}

export default Main