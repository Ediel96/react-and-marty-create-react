import React,{useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import Character from './components/Character';
import Pagination from './components/Pagination';



  

function App() {

  const [characters, setCharacters] = useState ([]);
  const [info, setInfo] = useState ([]);

  const intialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacter = (intialUrl) =>{
    fetch(intialUrl)
    .then(response => response.json())
    .then(data => {
      setCharacters(data.results);
      setInfo(data.info)
    })
    .catch(error => console.log(error))
  };

  useEffect(()=>{
    fetchCharacter(intialUrl);
  },[])

  const onPrevious = () =>{
    fetchCharacter(info.prev)
  }

  const onNext = () =>{
    fetchCharacter(info.next)
  }

  return (
    <>
      <Navbar brand="Rick and Morty App"/>

      <div className='container mt-5'>
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
        <Character characters={characters}/>
        <Pagination  prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
      </div>
    </>
  );
}

export default App;
