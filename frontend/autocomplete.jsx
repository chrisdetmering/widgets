import React from 'react'; 

class Autocomplete extends React.Component { 
  constructor(props) { 
    super(props)
    this.state = { inputVal: '' } 
    this.names = props.names; 
    this.listNames = this.listNames.bind(this);
    this.handleInput = this.handleInput.bind(this); 
  }

  listNames() { 
   return this.names.map((name, index) => {
     if (name[0].toLowerCase() === this.state.inputVal.toLowerCase()[0]) { 
      return ( 
        <li key={index}>
          {name}
        </li>
      )}
    }); 
  }

  handleInput(e) { 
    console.log(e)
   var userInput =  e.target.value

    this.setState({ inputVal: userInput });
  }

  render() { 
    return(<div className="search">
      <h1>Autocomplete</h1>
      <section className='names-list'>
          <input onChange={this.handleInput}  type="text" className="input" placeholder="Search..."/>
            <ul>
              {this.listNames()}
            </ul>
        </section>
    </div>);
  }

}

export default Autocomplete;