import React, { useContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Context } from "./Context";

export function Argonautes() {
  // stock des data de la DB
  const [argonautes, setArgonautes] = useState([]);

  // import du context pour mettre à jour le composant
  const { update, setUpdate } = useContext(Context);

  // requête axios
  async function getArgonautes() {
    let res = await axios("http://localhost:3000/");
    let argonautes = await res.data;
    setArgonautes(argonautes);
  }

  // UseEffect qui exécute la fonction de la requête axios
  useEffect(() => {
    getArgonautes();
    setUpdate(false);
  }, [update, setUpdate]);

  return (
    <div className="members">
      <h2 className="members--title">Membres de l'équipage</h2>
      <div className="members--container">
        {argonautes.map((argo) => {
          return <p className="members--name">{argo.prenom}</p>;
        })}
      </div>
    </div>
  );
}
