import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import { BoxCenter, Box, BoxSpace, Title, SubTitle, ButtonSubmit } from './style';
import { MainWrapper } from '../../theme/style-common';
import Input from '../../components/input';


const Login = () => {

    const [email, setEmail] = useState()
    const [pass, setPass] = useState()

    let history = useHistory();

    const segueLogin = (view) => {
            
        sessionStorage.setItem('token', `meu_token_fake_${email}`)
        history.push(`/`)
    }

    return (
        <>
            <MainWrapper>
                <BoxCenter>
                    <BoxSpace>
                        <Title>Countries</Title>
                        <SubTitle>Entre com suas credentiais</SubTitle>
                    </BoxSpace>
                    <Box>
                        <Input type="email" name="email" label="Email" value={setEmail}></Input>
                        <Input type="password" name="pass" label="Senha" value={setPass}></Input>
                    </Box>
                    <ButtonSubmit onClick={() => segueLogin()}>
                        Entrar
                    </ButtonSubmit>
                </BoxCenter>
            </MainWrapper>
        </>
    )
}

export default Login;