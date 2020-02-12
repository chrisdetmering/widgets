import React from 'react';

class Headers extends React.Component { 
  render() { 
    const selected = this.props.selectedPane; 
    const headers = this.props.tabs.map((pane, index) => { 
      const title = pane.title; 
      const klass = index === selected ? 'active' : ''; 

      return ( 
        <li
          key={index}
          className={klass}
          onClick={() => this.props.onTabChosen(index)}>
          {title}{' '}
        </li>
      ); 
    }); 
    return ( <div>
        <ul className='tabs-titles'>
          {headers}
        </ul>
      </div>
    );
  }
}




class Tabs extends React.Component { 
  constructor(props) { 
    super(props) 
  
    this.state = { selectedPane: 0 };
    this.selectTab = this.selectTab.bind(this); 
  }

  selectTab(num) { 
    this.setState({selectedPane: num});
  }

  
 
  render() { 
    var selected = this.props.tabs[this.state.selectedPane]
    return ( <div className="tab-container">
      <h1>Tabs</h1>
        <div className='tabs'>
          <Headers 
            selectedPane={this.state.selectedPane}
            tabs={this.props.tabs}
            onTabChosen={this.selectTab}
          /> 
        </div>
        <article className="tabs-body">{selected.content}</article>
      </div>
    );
  }

}

export default Tabs