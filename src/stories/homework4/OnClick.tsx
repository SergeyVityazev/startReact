import React from "react";
import ReactDOM from 'react-dom';
import DrawCell from './DrawCell'

class OnClick extends React.Component {
  public symbols2 = 25
 
  construct(){
      this.console()
  }
  public console(){
      console.log(`symbols= ${this.symbols2}`)
  }
   
}

export const onclick = () => <OnClick />

export default OnClick