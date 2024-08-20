import React from 'react'

const FirstComp0nent = ({data, fn}) => {
    return (
      <div>
        
        <button onClick={()=>{fn(10)}}>Set 10</button>
        {data}
      </div>
    )
  }
  

// const FirstComp0nent = (props) => {
//   return (
//     <div>
//       {props.data}
//     </div>
//   )
// }

export default FirstComp0nent
