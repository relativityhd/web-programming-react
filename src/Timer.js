import React from "react";
import "./App.css";
import state from './state.png';

class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { seconds: 0 };
    }
  
    tick() {
      this.setState(state => ({
        seconds: state.seconds + 1
      }));
    }
  
    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
      
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return (
        <div className="SiteWrapper" id={`page-${this.props.pnum}`}>
        <h2>Stateful Component</h2>
          <div className="Timer">
            <div className="TLeft">
              <p className="StateSeconds">Seconds: {this.state.seconds}</p>
            </div>
            <div className="TRight">
              <img src={state} className="StateCode" alt="code."/>
            </div>
          </div>
        </div>
      
      )
    }
  }
export default Timer;