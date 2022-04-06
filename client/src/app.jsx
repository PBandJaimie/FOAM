import { useState, useEffect } from 'react';
import axios from 'axios';
import Pictures from './components/pictures.jsx';


export default function App() {
  const [pics, setPics] = useState([]);
  //use Effect for get request to server
  useEffect(() => {
    getPics();
  }, []);

  const getPics = (picDescription) => {
    picDescription = picDescription || 'all';
    axios('/pictures', {
      params: {
        picDescription: picDescription
      }})
      .then((response) => {
        setPics(response.data);
      })
      .catch((err) => {
        console.log('err in client\'s getPics(): ', err)
      })
  }

  return (
    <div id="app">
      Foam
      <Pictures pics={pics} />
    </div>
  )
}
