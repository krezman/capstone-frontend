import './App.css';
import { useEffect, useState } from 'react'
import Posts from './components/Posts';

function App() {
const [postData, setPostData] = useState(null)

const getPostData = async() => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/v1/posts')

    const data = await response.json()
    setPostData(data.data);
    if (postData !== null)
    console.log(postData)
  } catch (error) {
    console.log(error)
  }
}

useEffect(() => {
  getPostData()
}, [])


  return (
   <div>
    <Posts postData={postData} />
   </div>
  );
}

export default App;
