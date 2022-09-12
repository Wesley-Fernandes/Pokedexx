import React, { useEffect, useState } from 'react'
import Body from '../Components/Body/Body'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import PokeHud from '../Components/PokeHud/PokeHud';

export default function Pokemon() {
  const [data, setData] = useState([])

    useEffect(()=>{
      async function getPokemon(){
        const full_url = window.location.href;
        const part_url = full_url.split("?pokemon=");
        const url = part_url[1];
        console.log(url);
        const data = await fetch(url);
        const data_json = await data.json();
        setData(data_json)
      }
      getPokemon()
    }, [])

  return (
    <div>
        <Header/>
        <Body>
          {data&&(
            <PokeHud data={data}/>
          )}

        </Body>
        <Footer/>
    </div>
  )
}
