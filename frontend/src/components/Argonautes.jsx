import React, { useContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Context } from "./Context";

export function Argonautes() {

    const [argonautes, setArgonautes ] = useState([])
    const {update, setUpdate } = useContext(Context);

    async function getArgonautes() {
        let res = await axios ('http://localhost:3000/')
        let argonautes = await res.data;
        setArgonautes(argonautes);
    }

    useEffect(() => {
        getArgonautes()
        setUpdate(false)
    }, [update, setUpdate])

    return (
        argonautes.map((argo) => {
            return(
                    <p>{argo.prenom}</p>
            )
        })
    )
}