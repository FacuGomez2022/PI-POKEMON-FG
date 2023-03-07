import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, postPokemon, getTypes } from "../../actions";
import { useHistory, Link } from "react-router-dom";
import "./Form.css";
import Logo from "../Home/logo.jpg";



export const Form = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types)
  const history = useHistory();
  useEffect(() => {
    if (types.length === 0) {
      dispatch(getTypes())
     
    }
  }, []);

   
  const submit = (e) => {
    e.preventDefault();
    
    dispatch(postPokemon(data))

    setData({
      name: "",
      hp: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      height: 0,
      weight: 0,
      types: [],
    });
    console.log(data)
    history.push(`/home`)
  };
  const [data, setData] = useState({
    name: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    types: [],
  });
  const [errors, setErrors] = useState({});

  const validate = (input) => {
    let errors = {};
    if (!input.name) {
      errors.name = "El name es obligatorio";
    }

    return errors;
  };

  const handleInputChange = (e) => {
    if (e.target.name !== "name") {
      setData({
        ...data,
        [e.target.name]: Number(e.target.value) <= 0 ? 0 : e.target.value,
      });
    } else {
      setErrors(
        validate({
          ...data,
          [e.target.name]: e.target.value,
        })
      );
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };

  const checkbox = (e) => {
    
        const check = [];
        if (e.target.checked === true) {
          check.push(e.target.name);
          setData({
            ...data,
            status: e.target.name,
            types: [...data.types, e.target.name],
          });
        }
    
        const targetValueTypes = e.target.name;
        if (e.target.checked === false) {
          var borrarType = data.types.filter(
            (e) => e !== targetValueTypes
          );
          setData({
            ...data,
            types: borrarType,
          });
        }
        console.log(data); //!!!!!!!!!
      
  };

  return (
    <div>
      <div className="logoImg"><img src={Logo} alt="logo.jgp" className="imgSet" /></div>
    <div className="formPage">
      
      <form action="POST"  onSubmit={submit}>
        <div className="form-creation">
          <h1>Crea tu propio Pokemon</h1>
          <div className="prueba">
          <p>
            <label>Pokemon name:</label>
            <input
              type="text"
              placeholder="Type your Pokemon name"
              name="name"
              value={data.name}
              onChange={handleInputChange}
              required
            />
          </p>
          {errors.name ? <p className="danger">{errors.username}</p> : null}
          <p >
            <label>Vida:</label>
            <input
              type="number"
              name="hp"
              value={data.hp}
              onChange={handleInputChange}
            />
          </p>
          <p >
            <label>Fuerza:</label>
            <input
              type="number"
              name="attack"
              value={data.attack}
              onChange={handleInputChange}
            />
          </p>
          <p >
            <label>Defensa:</label>
            <input
              type="number"
              name="defense"
              value={data.defense}
              onChange={handleInputChange}
            />
          </p>
          <p >
            <label>Velocidad:</label>
            <input
              type="number"
              name="speed"
              value={data.speed}
              onChange={handleInputChange}
            />
          </p>
          <p >
            <label>Altura:</label>
            <input
              type="number"
              name="height"
              value={data.height}
              onChange={handleInputChange}
            />
          </p>
          <p >
            <label>Peso:</label>
            <input
              type="number"
              name="weight"
              value={data.weight}
              onChange={handleInputChange}
            />
          </p>
          </div>
        </div>

        <div >
          <h1>Tipos:</h1>
          <div className="tipos">
            {types.map((t) => (
              <div className="tipos" key={t.slot}>
                <input
                  type="checkbox"
                  name={t.name}
                  value={t.slot}
                  id={t.slot}
                  onChange={checkbox}
                />
                <label htmlFor={t.slot}>{t.name}</label>
                {t.slot % 4 === 0 ? <br /> : null}
              </div>
            ))}
            
          </div>
          <button className="CreateButton" type="submit" value="Crear">SUBMIT</button>
          <p></p>
          <Link to="/home"><button className="CreateButton">BACK TO HOME</button></Link>
        </div>
      </form>
    </div>
    </div>
  );
};
