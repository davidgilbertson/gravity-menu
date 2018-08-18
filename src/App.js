import React, { Component } from 'react';
import throttle from 'lodash/throttle';
import './App.css';

const INCREMENT = 0.2;

class App extends Component {
  constructor(props) {
    super(props);

    this.lastMenuX = 0;
  }

  componentDidMount() {
    window.addEventListener('deviceorientation', throttle(this.handleMotion, 16));
  }

  handleMotion = ({ gamma }) => {
    // this.inputEl.value = gamma;

    // opening
    if (this.lastMenuX < 100 && gamma > 0) {
      let openMenuFurther = false;

      if (this.lastMenuX === 0) {
        if (gamma > 10) {
          openMenuFurther = true;
        }
      } else {
        openMenuFurther = true;
      }

      if (openMenuFurther) {
        this.lastMenuX = Math.min(100, this.lastMenuX + (INCREMENT * gamma));
        this.navEl.style.transform = `translateX(${this.lastMenuX}%`;
      }
    }

    // closing
    if (this.lastMenuX > 0 && gamma < 0) {
      let closeMenuFurther = false;

      if (this.lastMenuX === 100) {
        if (gamma < -10) {
          closeMenuFurther = true;
        }
      } else {
        closeMenuFurther = true;
      }

      if (closeMenuFurther) {
        this.lastMenuX = Math.max(0, this.lastMenuX + (INCREMENT * gamma));
        this.navEl.style.transform = `translateX(${this.lastMenuX}%`;
      }
    }
  };

  // handleSliderMove = (e) => {
  //   this.handleMotion({
  //     gamma: Number(e.target.value),
  //   });
  // };

  // handleSliderStart = (e) => {
  //   window.addEventListener('mousemove', this.handleSliderMove);
  //
  //   e.target.addEventListener('mouseup', (e) => {
  //     window.removeEventListener('mousemove', this.handleSliderMove);
  //   });
  // };

  render() {
    return (
      <div className="App__wrapper">
        {/*<input*/}
          {/*ref={el => this.inputEl = el}*/}
          {/*className="App__range-slider"*/}
          {/*type="range"*/}
          {/*min="-90"*/}
          {/*max="90"*/}
          {/*step="1"*/}
          {/*onMouseDown={this.handleSliderStart}*/}
          {/*onTouchStart={this.handleSliderStart}*/}
          {/*/>*/}
        <p className="App__directions">
          〈〈 Tilt your phone 〉〉
         </p>
        <nav ref={el => this.navEl = el} className="App__nav">
          <a className="App__nav-link" href="#">Cats</a>
          <a className="App__nav-link" href="#">Dogs</a>
          <a className="App__nav-link" href="#">Birds</a>
        </nav>
      </div>
    );
  }
}

export default App;
