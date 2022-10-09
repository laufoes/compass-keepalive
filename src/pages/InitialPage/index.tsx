import logo from '../../assets/img/logo-light.svg';
import { Container, FormContainer, Banner, FormTitle, Logo } from './InitialPageElements';
import { UserInfoProvider } from '../../common/context/UserInfo';
import { PasswordProvider } from '../../common/context/Password';
import { Outlet } from 'react-router-dom';

export const InitialPage = () => {
    return(
        <Container>
            <FormContainer>
                <FormTitle>
                    <h1>Olá,</h1>
                    <p>Para continuar navegando de forma segura, efetue o login na rede.</p>
                </FormTitle>
                <UserInfoProvider>
                    <PasswordProvider>
                        <Outlet />
                    </PasswordProvider>
                </UserInfoProvider>
            </FormContainer>
            <Banner>
                <Logo src={logo} />
            </Banner>
        </Container>
    )
}