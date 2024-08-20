import { useState, useEffect, useRef } from "react"
import FirstComp0nent from "./Component/FirstComp0nent";
import User from "./Component/User";

// let myname = "Alexander"

// let array = ["user1","user2","user3","user4","user5"]

// conditional rendering

// let gender = "male"

// let clickCount = 0   //will not get incremented in UI, thats why we need to use "UseState"





function App() {
  // let [count, setCount] = useState(0); //initially set the count value to '0'

  // const funClick = () => {
  //   console.log("Clicked")
  //   setCount(count+1)
  //   console.log(count)
  // }


  //    useRef             //get the reference of any element
  const [data, setData] = useState([]);
  const inputRef = useRef(null);

  return (
    <div>



      {/* <Navbar />
      <h1>Hello All, My name is {myname}</h1>

      {array.map((user)=>{return <h2>{user}</h2>})} */}

      {/* {gender=="male" ? "Boy" : "Girl"}  //conditional rendering */}

      {/* <button onClick={funClick}>Click me</button> */}
      {/* <h1>{count}</h1> */}

      {/* Props (passing data from one Component to other Component*/}

      {/* <FirstComp0nent data={count}/> */}
      {/* <FirstComp0nent data={count} fn={setCount}/>
      <User name ="Abc" age={21}/>
      <User name ="Def" age={34}/> */}


      <input ref={inputRef} type="text" />
      <button onClick={() =>{setData([...data,inputRef.current.value])} }>Submit</button>
      {data.map((item,index)=>{return <h2 key={index}>{item}</h2>})}
    </div>

  )
}

export default App
