import React from 'react';
import SearchForm from '../Form/';
import { HeaderContainer, HeaderWrapper, Logo, Ariel } from './HeaderElements';
import storm from '../../images/3.svg';
const Header = () => {
    return (
        <HeaderContainer>
            <SearchForm />
            <HeaderWrapper>
                <Ariel> Challenge Ariel Mergen</Ariel>
                <Logo src={storm} alt='Ariel Mergen' />
            </HeaderWrapper>
        </HeaderContainer>
    );
};

export default Header;
