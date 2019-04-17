import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from "./redux/store";
import './App.css';
import ToDoList from './Module/ToDoList/ToDoList';

class App extends Component {
  constructor(){
    super();
    this.state={
      data:[]
    }
  }
  componentWillMount(){
   this.apiCall();
   window.addEventListener("scroll",()=>{
    console.log(window.scrollY)
    if(window.scrollY%700<=20){
      this.apiCall();
      }
  })
  }
  componentWillUnmount(){
    window.removeEventListener('scroll'); 
  }
  apiCall =()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then(response => response.json())
    .then(json => this.setState({data:[...this.state.data,...json]}))
  }
  render() {
   
    return (
        // <div>
        //    {this.state.data.map((data,index)=>(
        //    <div key={index} >
        //    <p style={{padding:'16px',backgroundColor:'lightgrey'}}>
        //    <h1>{data.name}</h1>
        //    <h1>{data.email}</h1>
        //      <p>{data.body}</p>
        //      </p>
        //      <br/>
        //    </div>
        //    )
            
        //    )
        //   }
        // </div>
      <Provider store={store}>
      
      <div className="App">
        <ToDoList/>
        </div>
      </Provider>
    );
  }
}

export default App;
