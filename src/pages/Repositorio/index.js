import React from 'react';
import { useParams } from "react-router";

export default function Repositorio(){

    const { id } = useParams()
    return(
        <>
        <span style={{color:'#fff'}}> {decodeURIComponent(id)}</span>
        </>
    );
}