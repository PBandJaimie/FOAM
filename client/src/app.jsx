import { useState, useEffect } from 'react';
import axios from 'axios';
import Pictures from './components/Pictures.jsx';
import Sort from './components/Sort.jsx';
import PageTabs from './components/PageTabs.jsx';

export default function App() {
  const [pics, setPics] = useState([]);
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    getPics(filter, page);
  }, [filter, page, totalPages]);

  const getPics = (selectedView, pageNumber) => {
    axios('/pictures', {
      params: {
        view: selectedView,
        page: pageNumber
      }})
      .then((response) => {
        setPics(response.data.picsForPage);
        setTotalPages(response.data.totalPages);
      })
      .catch((err) => {
        console.log('err in client\'s getPics(): ', err)
      })
  }

  const updatePic = (data) => {
    console.log('update pic: ', data)
    axios.put('/pictures', data)
      .then((response) => {
        getPics(filter, page)
      })
      .catch((err) => {
        console.log('err in client\'s updatePic(): ', err)
      })
  }

  const handleRadioChange = (event) => {
    let data = {};
    data.classification = event.target.value;
    data.picId = event.target.id;
    data.pageNumber = page;
    console.log('data in handleradio change: ', data)
    updatePic(data);
  }

  const handleChange = (event) => {
    setFilter(event.target.value);
  }

  const handlePageTabClick = (tabClicked) => {
    if (tabClicked > 0) {
      setPage(tabClicked);
    }
  }

  return (
    <div className="app">
      <div id="heading">foam.</div>
      <br></br>
      <Sort
        filter={filter}
        changeHandler={handleChange}
      />
      <br></br>
      <Pictures
        pics={pics}
        getPics={getPics}
        changeHandler={handleRadioChange}
      />
      <PageTabs
        currentPage={page}
        clickHandler={handlePageTabClick}
        totalPages={totalPages}
      />
    </div>
  )
}