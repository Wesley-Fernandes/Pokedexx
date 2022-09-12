import { useEffect, useState } from 'react'
import React from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './Components/Body/Body'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import PokeRow from './Components/PokeRow/PokeRow';


function App() {




  useEffect(()=>{
    async function request_first_page(){
      let request = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`);
      request = await request.json();
      console.log(request.json);
      setNext(request.next)
      setPrev(request.previous);
      setPokemons(request.results);

    }

    request_first_page()
  }, [])


  const [Pokemons, setPokemons] = useState([])
  const [Prev, setPrev] = useState("");
  const [Next, setNext] = useState("");

  

  return (
    <div className="App">
      <Header/>
      <Body>
        {
          Pokemons && Pokemons.map((Pokemon)=>{
            return <PokeRow key={Pokemon.name} name={Pokemon.name.toUpperCase()} url={Pokemon.url}/>
          })
        }
      </Body>
      <Footer 
        next={Next}
        setNext={setNext}
        prev={Prev}
        setPrev={setPrev}
        Pokemons={Pokemons}
        setPokemons={setPokemons}/>
    </div>
  )
}

export default App
