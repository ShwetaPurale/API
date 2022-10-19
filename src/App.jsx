import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  // const [count, setCount] = useState(0)
  const [data, setData] = useState({})
  useEffect(() => {
    getdata();

  }, []);

  const getdata = async () => {
    const res = await axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts',
      // data: {
      //   firstName: 'shweta',
      //   lastName: 'Purale',      
      // },   
      data: {
        userId: 1,
        id: 1,
        title: "et ea vero quia laudantium autem"
      },

    })
    console.log("Result", res.data)
    setData(res.data)
  };
  return (
    <>
      <h1>welcome</h1>
      {/* <p>{data.firstName}</p> */}
      <p>{data[4].userId}</p>
      {/* <p>{data[20].userId}</p> */}
      <p>{data[18].id}</p>
      <p>{data[15].title}</p>
      {/* <p>{data.lastName}</p> */}
    </>
  )
}

export default App
