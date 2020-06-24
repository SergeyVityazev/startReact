import React from "react";
import DrawCell from "./DrawCell"
import OnClick from "./OnClick"
import { startStories } from "./start.stories";
import ReactDOM from 'react-dom';

class AssemblyGame extends React.Component{
  public xSize: number 
  public ySize: number 
   
   construct (){
     this.xSize = this.props.xSize
     this.ySize = this.props.ySize
     this.drawCell()
   } 
   
 
   public drawCell = () => {
     < DrawCell xSize={this.xSize} ySize={this.ySize} />
   }  
  
}

export default AssemblyGame


