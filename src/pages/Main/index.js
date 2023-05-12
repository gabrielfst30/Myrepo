import React, { useState } from 'react';
import { FaGithub, FaPlus } from 'react-icons/fa'
import {Container, Form, SubmitButton}  from './styles'

import api from '../../services/api';

export default function Main(){

    const [newRepo, setNewRepo] = useState('');

    function handleSubmit(e){
        e.preventDefault();//para não dar refresh na pag

        //Puxando os repositorios
        const response = api.get(`repos/${newRepo}`)
    }
    
    
    function handleInputChange(e){
        setNewRepo(e.target.value);
    }

    return(
        <Container>
            <h1>
                <FaGithub size={25}/>
                Meus Repositorios
            </h1>

        <Form onSubmit={handleSubmit}>
            <input type='text' 
            placeholder='Adicionar Repositorios'
            value={newRepo}
            onChange={handleInputChange}
            />

            <SubmitButton>
                <FaPlus color="#FFF" size={14}/>
            </SubmitButton>

        </Form>   

        </Container>
    )
}