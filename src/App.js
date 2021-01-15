import {useEffect,useState} from 'react';
import axios from './axios';
import './App.css';
import Header from 'components/Header'
function App() {
  const [array,setArray] = useState([]);
  useEffect(()=>{
    const fetchData = async () =>{
      const req = await axios.get("http://localhost:8001/app/getCards");
      console.log(req.data);
      setArray(req.data);
    }
    fetchData();
  },[])
  return (
    <div className="App">
      <h1>Hi Hellgo</h1>
      {/* header, tinder cards, swipe buttons */}
      {array.map((val,idx)=>{
        return(

        
<div key={idx}>
<Header>{val.name}</Header>
</div>
        )
      })}
   
    </div>
  );
}

export default App;
