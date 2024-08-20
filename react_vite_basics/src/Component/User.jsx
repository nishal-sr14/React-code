import React from 'react'

// Destructuring the props parameter

const User = ({name,age}) => {
    return (
      <div>
        <h1>Name = {name}</h1>
        <h2>Age = {age}</h2>
      </div>
    )
  }

// const User = (props) => {
//   return (
//     <div>
//       <h1>Name = {props.name}</h1>
//       <h2>Age = {props.age}</h2>
//     </div>
//   )
// }

export default User
