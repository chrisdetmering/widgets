import React from 'react'; 

class Clock extends React.Component { 
  constructor(props) { 
    super(props)
    this.state = {date: new Date()};
    this.tick = this.tick.bind(this);
  }

  tick() { 
    this.setState({ date: new Date()});
    
  }

  componentDidMount() { 
    this.intervalId = window.setInterval(this.tick, 1000);
  }

  componentWillUnmount() { 
    clearInterval(this.intervalId);
  }

  render() { 
    return <section className="clock">
        <h1>Clock</h1>
          <section className="container">
            <section className="time">
              <p>Time:</p>
              <time>{this.state.date.toLocaleTimeString()}</time>
            </section>
            <section className="date">
              <p>Date:</p>
              <time>{this.state.date.toDateString()}</time>
            </section>
          </section>
      </section>
  }
}

export default Clock; 