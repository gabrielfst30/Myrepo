import styled from "styled-components";

//Container
export const Container = styled.div`
    max-width: 700px;
    background: #FFF;
    border-radius: 4px;
    box-shadow: 0 0 20px rbga(0,0,0 0.2);
    padding: 30px;
    margin: 80px auto;

    h1{
        font-size: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;

        svg{
            margin-right: 10px
        }
    }
`;

//Formulário
export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: row;

    input{
        flex: 1;
        border: 1px solid #DDD;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 17px;
    }
`;

//Button de enviar
export const SubmitButton = styled.button.attrs({
    type:'submit', //definindo o type do submit 
})`
    background: #0D2636;
    border: 0;
    border-radius: 4px;
    margin-left: 10px;
    padding: 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

