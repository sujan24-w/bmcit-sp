import React, { useRef } from 'react'
import "./videoPlay.css"
import CollageVideo from "../../assets/colVideo.mp4"
function Videoplay(props) {

    const player=useRef(null) ;

    const closeplayer=(e)=>{
        if(e.target==player.current){
          props.setPlayState(false)
        }
        
    }
  
  return (
    <>
    <div ref={player} className={`${props.changeclass ? "demovideo" : "demovideo hidevideo" }`} onClick={closeplayer} >
        <video  src={CollageVideo}controls autoPlay muted  ></video>
    </div>
    </>
  )
}

export default Videoplay
