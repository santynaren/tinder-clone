import { useEffect, useState } from 'react';
import axios from './axios';
import './App.css';
import { getCards } from './actions/posts';
import Header from 'components/Header';
import { useDispatch } from 'react-redux';
function App() {
  const dispatch = useDispatch();
  const [array, setArray] = useState([]);
  useEffect(() => {
    dispatch();
    // const fetchData = async () => {
    //   const req = await axios.get('/app/getCards');
    //   console.log(req.data);
    //   setArray(req.data);
    // };
    // fetchData();
  }, []);
  return (
    <div className="App">
      <h1>Hi Hellgo</h1>
      {/* header, tinder cards, swipe buttons */}
      {array.map((val, idx) => {
        return (
          <div key={idx}>
            <Header />
          </div>
        );
      })}
    </div>
  );
}

export default App;
