import React from "react";
import { useState } from "react";
import Style from "./Footer.css";
import Button from "react-bootstrap/Button";
import sound from "../../Audio/Cursor.ogg";
import select from "../../Audio/Select.ogg";
import { useEffect } from "react";

export default function Footer(props) {
  const [url, setUrl] = useState("");
  const audio = document.getElementById("audio");
  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  async function NewRequest(url) {
    let data = await fetch(url);
    data = await data.json();
    props.setNext(data.next);
    props.setPrev(data.previous);
    props.setPokemons(data.results);
  }

  //       {//<source src={Thunder} type="audio/mp3"/>}
  return (
    <footer id="footer">
      <audio src={select} id="audio" preload="true"></audio>
      {url === "http://127.0.0.1:5173/" ? (
        <Button
          className="Button"
          onClick={() => {
            audio.play(), NewRequest(props.prev);
          }}
          variant="dark"
        >
          Anterior
        </Button>
      ) : (
        <></>
      )}

      {url === "http://127.0.0.1:5173/" ? (
        <Button
          className="Button"
          onClick={async () => {
            await audio.play(), await NewRequest(props.next);
          }}
          variant="dark"
        >
          Proxima
        </Button>
      ) : (
        <></>
      )}
    </footer>
  );
}
