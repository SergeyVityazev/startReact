import React from "react";
import ReactDOM from 'react-dom';

import AssemblyGame from './AssemblyGame'
import OnClick from './OnClick'


class DrawCell extends React.Component{
    public xSize: number 
    public ySize: number 

   construct(){
       xSize= this.props.xSize
       ySize = this.props.ySize
       this.draw()
   }

    public draw = () => {
        const window = document.getElementById("root")
        const elements =[]   
        for (let i=1;i<=this.xSize;i++)
           {
               for (let j=1;j<=this.ySize;j++)
               {
                   elements.push(React.createElement(
                       'div',
                       {
                           className: 'square',
                           style: {
                               width: '20px',
                               height: '20px',
                               border: '2px solid black',
                               float: 'left',
                               padding: '5px'
                           }
                       }
                   ))
               }
            elements.push(React.createElement('div',{style:{display:'block', clear:'left'}}))
        }
            return(ReactDOM.render(elements, window))
        
    }

}

export default DrawCell