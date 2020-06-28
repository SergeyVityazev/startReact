import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object, number, array } from "@storybook/addon-knobs";

import AssemblyGame from './AssemblyGame'

const symbols = ["x", "o"];
export default {
    title: 'GameClick',
}


class StartStories extends React.Component{

    render(){
        return(
  <div>          
 <AssemblyGame 
xSize={number("xSize", 3)}  
ySize={number("ySize", 5)}
simbols2={32}
/>
</div>
)
   }
}

export const startStories = () => {<StartStories />}

//export default StartStories
