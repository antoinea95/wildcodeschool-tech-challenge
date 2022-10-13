import React from "react";
import axios from "axios";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { Context } from "./Context";
import { useContext } from "react";

export function Form() {

    const {setUpdate } = useContext(Context);

    // Objet Yup qui permet de contrôler le formulaire
  const ValidationSchema = Yup.object().shape({
    prenom: Yup.string()
      .min(1, "Le message de votre post est vide")
      .required("Merci de saisir votre prenom")
      .matches("^[A-Za-zÀ-ÖØ-öø-ÿ-' ]{2,}$", "Prénom invalide"),
  });

  // useForm pour gérer la validation du formulaire
  const { register, handleSubmit, formState, reset } = useForm({
    mode: "onBlur",
    resolver: yupResolver(ValidationSchema),
  });

  // stockage des erreurs
  const { errors } = formState;

  // Envoie du formulaire
  function onSignUp(data) {
    axios({
        method: 'post', 
        url: 'http://localhost:3000/',
        withCredentials: true,
        data: {
            ...data
        },

    })
    .then(() => {
    console.log(errors)
    setUpdate(true)
    reset()})
    .catch((err) => {
        throw err;
    })
  }


    return(
        <>
        <form onSubmit={handleSubmit(onSignUp)}>
            <label htmlFor="prenom">Prénom</label>
            <input id="prenom" name="prenom" type="text" {...register('prenom')} />
            <button type="submit"> Envoyer </button>
        </form>
        <small> {errors.prenom?.message}</small>
        </>
    )
}