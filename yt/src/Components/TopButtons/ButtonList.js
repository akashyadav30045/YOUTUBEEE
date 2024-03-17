import React from 'react';
import Buttons from './Buttons';
import "./button.css"

const ButtonList = () => {

    const Button_List = ["All","JavaScript","News","Film Critcisms","Gaming","Music","David Googins","TypeScript","Dramedy","Node","Interview"]
  return (
    <div className="button">
        {Button_List.map((index,key)=>{
            return (
            key={index},
            <Buttons name={index}/>
            )
        })}
    </div>
  )
}

export default ButtonList