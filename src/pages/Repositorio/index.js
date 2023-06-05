import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Container } from "./styles";
import api from "../../services/api";

export default function Repositorio() {
    //pegandos os paramentros
    const params = useParams();

  useEffect(() => {

    async function Load() {
      const { repoId } = decodeURIComponent(params);
      //pegando o paramentro da url

      //Array de Promisses, para que execute tudo ao mesmo tempo
      //Serve para fazer por exemplo, duas requisiçoes ao mesmo tempo
      //Na const estamos desconstruindo nossas reqs
      const [repositorioData, issuesData] = await Promise.all([
        api.get(`/repos/${repoId}/`), //chama o repositorio
        api.get(`/repos/${repoId}/issues`) //chama as issues do repositorio
      ]);

      //testando
      console.log(repositorioData.data);
      console.log(issuesData.data);
    }

    Load();
  }, [params]);

  return (
    <>
      <Container>

      </Container>
    </>
  );
}
