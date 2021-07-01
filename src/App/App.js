import React from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import ResultContainer from '../ResultContainer/ResultContainer';
import './App.css';

const name= require('@rstacruz/startup-name-generator');

class App extends React.Component{                           //class component
  //state syntax
  state={
    headExpanded: true,
    suggestedNames:[],
  };
  
  handleInputChange=(text)=>{
    
     this.setState({
       headExpanded:  !text,
       suggestedNames: text? name(text):[],
     });
     //or you can write---- text.length>0? false: true
  };
  
  

  render(){
    //console.log(name('cloud'));
    return (
     <div className="app-container">
      {/* //see how to use props  */}
      <Header 
         //headTitle={this.state.headerText}
         x={this.state.headExpanded}/>           
      <SearchBox outputChange={this.handleInputChange}/>
      <ResultContainer suggestedNames={this.state.suggestedNames}/>
      {/*\ //see how to use states

      <h2>{this.state.headerText}</h2>
      <button onClick={()=>(
        this.setState({
          headerText:"Whoaaaaa It's changing!"
        }) 
      )}>Click Here</button> */}

    </div>
    )};
};

export default App;
