import React from 'react'

function Title(props) {
  let newclassname=props.nameclass || ""
  return (
    <>
    <div className={`program-text  ${newclassname}`}>
                    <p  className='p1'>{props.subtitile}</p>
                    <h1>{props.heading}</h1>
                </div>
    
    </>
  )
}
export default Title
