import React from 'react';
import Story from "./Story.js";

function StoryReel() {
    return (
        <div className="storyReel" style={{display:'flex'}}>
          <Story image="https://images.pexels.com/photos/556666/pexels-photo-556666.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" profileSrc="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" title="Clara" />
          <Story image="https://images.pexels.com/photos/2237190/pexels-photo-2237190.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" profileSrc="https://images.pexels.com/photos/3750717/pexels-photo-3750717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" title="Ana"/>
          <Story image="https://images.pexels.com/photos/38867/pexels-photo-38867.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" profileSrc="https://images.pexels.com/photos/1820559/pexels-photo-1820559.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" title="Maria"/>
          <Story image="https://images.pexels.com/photos/1054974/pexels-photo-1054974.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" profileSrc="https://images.pexels.com/photos/3876394/pexels-photo-3876394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" title="Gus"/>
          <Story image="https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" profileSrc="https://images.pexels.com/photos/936229/pexels-photo-936229.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" title="Martin"/>  
        </div>
    )
}

export default StoryReel
