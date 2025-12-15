import React from 'react'
import "./program.css"
import gradimg from "../../assets/program-1.png"
import masterimg from "../../assets/program-2.png"
import postimg from "../../assets/program-3.png"
import picon_1 from "../../assets/program-icon-1.png"
import picon_2 from "../../assets/program-icon-2.png"
import picon_3 from "../../assets/program-icon-3.png"

function Program() {
    return (
        <>
               <div   className="programs">

                <div className="offer-img">
                    <img  src={gradimg} alt="graduadion degree" />
                     <div className="overlay">
                        <img src={picon_1} alt="icon 1 graduation" />
                        <p>Graduation Degree</p>
                     </div>
                </div >
                <div className="offer-img">
                    <img  src={masterimg} alt=" master degree" />
                     <div className="overlay">
                        <img src={picon_2} alt="icon 2 master" />
                        <p>Masters Degree</p>
                     </div>

                </div>
                <div className="offer-img">
                    <img  src={postimg} alt="post graduatopn img" />
                     <div className="overlay">
                        <img src={picon_3} alt="program icon 3 post graduate" />
                        <p>Post Graduation</p>
                     </div>

                </div>
            </div>
        </>

    )
}

export default Program
