import React, { useState, useCallback, useEffect } from "react";
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from "react-icons/fa";
import { Container, Form, SubmitButton, List, DeleteButton } from "./styles";


import api from "../../services/api";

export default function Main() {
  const [newRepo, setNewRepo] = useState('');
  const [repositorios, setRepositorios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [loaded, setLoaded] = useState(false); // Nova variável de estado

  //Buscar localStorage
  useEffect(() => {
    //buscando o localStorage
    const repoStorage = localStorage.getItem('repos');

    if(repoStorage){
      //convertendo json e setando repositorio
      setRepositorios(JSON.parse(repoStorage));
    }

    setLoaded(true); // Marcar como carregado
  }, []);

  // Salvar Alterações
  useEffect(() => {
    if (loaded) {
      localStorage.setItem('repos', JSON.stringify(repositorios));
    }
  }, [repositorios, loaded]);



  const handleSubmit = useCallback((e) => {
      e.preventDefault();

      async function submit() {
        setLoading(true);
        setAlert(null);
        try {

          if(newRepo === ''){
            throw new Error('Você precisa inserir um respositorio!')
          }

          const response = await api.get(`repos/${newRepo}`);

          //verificando se ja existe o repo na lista
          const hasRepo = repositorios.find(repo => repo.name === newRepo)

          if(hasRepo){
            throw new Error('Repositorio Duplicado');
          }

          const data = {
            name: response.data.full_name,
          };

          console.log(data);

          setRepositorios([...repositorios, data]);
          setNewRepo("");
        } catch (error) {
          setAlert(true)
          console.log(error);

        } finally {
          setLoading(false)
        }
      }

      submit();
    }, [newRepo, repositorios]);

  function handleinputChange(e) {
    setNewRepo(e.target.value);
    setAlert(null)
  }

  const handleDelete = useCallback((repo) => {
    //retorna todos repositorios, menos o que foi clicado
    const find = repositorios.filter(r => r.name !== repo);
    setRepositorios(find);
  }, [repositorios]);

  return (
    <Container>
      <h1>
        <FaGithub size={25} />
        Meus Repositorios
      </h1>

      <Form onSubmit={handleSubmit} error={alert}>
        <input
          type="text"
          placeholder="Adicionar Repositorios"
          value={newRepo}
          onChange={handleinputChange}
        />

        <SubmitButton loading={loading ? 1 : 0}>
          {loading ? (
            <FaSpinner color='#FFF' size={14} />
          ) : (
            <FaPlus color='#FFF' size={14} />
          )}

        </SubmitButton>
      </Form>

      <List>
            {repositorios.map(repo =>(
              <li key={repo.name}>
                <span>
                  <DeleteButton onClick={() => handleDelete(repo.name)}>
                    <FaTrash size={14}/>
                  </DeleteButton>
                  {repo.name}
                </span>
                <a href="">
                  <FaBars size={20}/>
                </a>
              </li>

            ))}
      </List>

    </Container>
  );
}
