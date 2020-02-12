import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';
import Weather from './frontend/weather';
import Autocomplete from './frontend/autocomplete'; 

const one = { title: "one", content: 'I am first' };
const two = { title: "two", content: 'Second pane here' };
const three = { title: "three", content: 'Third pane here' };
const tabs = [one, two, three];
const names = ['chris', 'alex', 'mikey', 'brandon', 'Alfred', 'Jacop', 'phil'];

function Root() { 
  return( 
    <section className="widgets">
      <Clock />
      <Weather />
      <section className="tabs-and-search">
        <Tabs tabs={tabs} />
        <Autocomplete names={names} /> 
      </section>
    </section> 
  )
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  
  ReactDOM.render(<Root />, root); 
});
