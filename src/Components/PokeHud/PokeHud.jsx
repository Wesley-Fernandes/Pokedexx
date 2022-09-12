import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import {
  Poison,
  Fire,
  Grass,
  Water,
  Eletric,
  Ice,
  Psychic,
  Rock,
  Steel,
  Ground,
  Ghost,
  Flying,
  Fighting,
  Dragon,
  Dark,
  Insect,
  Normal,
} from "./TiposPokemons.js";
import Style from "./PokeHud.css";

export default function PokeHud({ data }) {
  //Informações para campos
  const [img, setImage] = useState("Carregando...");
  const [pokemon_name, setName] = useState("Carregando...");
  const [tipo, setTipo] = useState("Carregando...");
  const [id, setId] = useState(0);
  const [spell, setSpell] = useState([]);
  const [Stat, setStatus] = useState([{ item: "Carregando...", url: "nop" }]);

  //Informações para modal
  const [show, setShow] = useState(false);
  const [Skill, setSkill] = useState({
    name: "Carregando...",
    power: "Carregando...",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleOpen = async (url) => {
    setShow(true);
    const data = await fetch(url);
    const Data_Json = await data.json();
    const arquive = {
      name: Data_Json.name,
      power: Data_Json.effect_entries[1].effect,
    };
    setSkill(arquive);
  };

  useEffect(() => {
    async function Gets() {
      const url_total = new URLSearchParams(window.location.search);
      const url_parametros = url_total.get("pokemon");
      const data = await fetch(url_parametros);
      const data_json = await data.json();
      const skills = data_json.abilities.map((item) => ({
        item: item.ability.name,
        url: item.ability.url,
      }));

      console.log(data_json);
      setImage(data_json.sprites.front_default);
      setName(data_json.name);
      setId(data_json.id);
      setStatus(skills);

      const tipo_pokemon = data_json.types[0].type.name;
      switch (tipo_pokemon) {

        case "water":
          setTipo(Water);
          break;

        case "grass":
          setTipo(Grass);
          break;

        case "electric":
          setTipo(Eletric);
          break;

        case "flying":
          setTipo(Flying);
          break;

        case "fighting":
          setTipo(Fighting);
          break;

        case "poison":
          setTipo(Poison);
          break;

        case "ground":
          setTipo(Ground);
          break;

        case "rock":
          setTipo(Rock);
          break;

        case "bug":
          setTipo(Insect);
          break;

        case "ice":
          setTipo(Ice);
          break;

        case "ghost":
          setTipo(Ghost);
          break;

        case "steel":
          setTipo(Steel);
          break;

        case "fire":
          setTipo(Ground);
          break;

        case "dragon":
          setTipo(Dragon);
          break;

        case "fairy":
          setTipo(Fairy);
          break;

        case "shadow":
          setTipo(Dark);
          break;

        case "dark":
          setTipo(Dark);
          break;

        case "normal":
          setTipo(Normal);
          break;

        case "psychic":
          setTipo(Psychic);
          break;
      }
    }
    Gets();
  }, []);

  return (
    <div className="center">
      <div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{Skill.name.toLocaleUpperCase()}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="modal-text">{Skill.power}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div id="Pokehud">
        <div className="content-left left-top">
          <h2>Informações basicas</h2>
          <hr />
          <Form>
            <fieldset disabled>
              <Form.Group>
                <Form.Label htmlFor="disabledTextInput">
                  <strong>Nome</strong>
                </Form.Label>
                <Form.Control
                  className="mb-5"
                  id="disabledTextInput"
                  placeholder={pokemon_name.toUpperCase()}
                />

                <Form.Label htmlFor="disabledTextInput">
                  <strong>Identificador</strong>
                </Form.Label>
                <Form.Control id="disabledTextInput" placeholder={id} />
              </Form.Group>
            </fieldset>
          </Form>
        </div>
        <div className="content-right right-top">
          <img src={img} />
        </div>
        <div className="content-left left-bottom">
          <h2>Habilidades basicas</h2>
          <hr />
          {Stat.map((item, index) => {
            return (
              <div key={index}>
                <Alert
                  className="skill"
                  onClick={() => {
                    handleOpen(item.url);
                  }}
                  variant="dark"
                >
                  {item.item.toLocaleUpperCase()}
                </Alert>
              </div>
            );
          })}
        </div>
        <div className="content-right right-bottom">
          <h2>Tipo do pokemon</h2>
          <hr />
          <img src={tipo} title={tipo} alt="Tipo do pokemon" />
        </div>
      </div>
    </div>
  );
}
