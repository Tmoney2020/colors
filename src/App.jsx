import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

class App extends Component {
  state = {
    hue: 0,
    saturation: 0,
    lightness: 0,
  }

  componentDidMount() {
    this.randomColor()
  }

  handleSlider = event => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
  }

  randomColor = event => {
    const hue = this.getRandomInt(361)
    const saturation = this.getRandomInt(101)
    const lightness = this.getRandomInt(101)

    this.setState({
      hue,
      saturation,
      lightness,
    })
  }
  render() {
    const backgroundColor = `hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%)`

    return (
      <body>
        <main>
          <div className="colorBox">
            <p>Color</p>
            <div className="colorContainer">
              <img style={{ backgroundColor }} />
            </div>
            <code>{backgroundColor}</code>
          </div>
          <div className="sliderBox">
            <ul>
              <li>H</li>
              <li>
                <input
                  name="hue"
                  type="range"
                  min="0"
                  max="360"
                  value={this.state.hue}
                  onChange={this.handleSlider}
                />
              </li>
            </ul>
            <ul>
              <li>S</li>
              <li>
                <input
                  name="saturation"
                  type="range"
                  min="0"
                  max="100"
                  value={this.state.saturation}
                  onChange={this.handleSlider}
                />
              </li>
            </ul>
            <ul>
              <li>L</li>
              <li>
                <input
                  name="lightness"
                  type="range"
                  min="0"
                  max="100"
                  value={this.state.lightness}
                  onChange={this.handleSlider}
                />
              </li>
            </ul>
            <ul>
              <li>
                <button onClick={this.randomColor}>Random Color!</button>
              </li>
            </ul>
          </div>
        </main>
      </body>
    )
  }
}

export default App
