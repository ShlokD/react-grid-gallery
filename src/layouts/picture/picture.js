import React, { Component } from 'react'
import './picture.css'

class Picture extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flipped: false,
    }

    this._onClickImage = this._onClickImage.bind(this)
  }

  _onClickImage() {
    this.setState({
      flipped: !this.state.flipped,
    })
  }

  render() {
    const { imgSrc = '', title = '', artist = '' } = this.props
    const containerClass = `picture ${this.state.flipped ? 'picture-flip' : ''}`
    const descriptionClass = `picture-description ${
      this.state.flipped ? 'visible' : 'invisible'
    }`

    return imgSrc !== '' ? (
      <div onClick={this._onClickImage} className={containerClass}>
        <div className="picture-text-container">
          <div className={descriptionClass}>
            <h4>{title}</h4>
            <p>{artist}</p>
          </div>
          <img className="picture-image" src={imgSrc} />
        </div>
      </div>
    ) : (
      <div className="picture placeholder-picture" />
    )
  }
}

export default Picture
