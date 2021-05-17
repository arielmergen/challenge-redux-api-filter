import styled from 'styled-components';

export const HeaderContainer = styled.header`
    align-items: center;
    display: flex;
    grid-gap: 16px;
    height: 80px;
    justify-content: space-around;
    padding: 0 50px;
    margin: 50px 0;
    width: 100%;
    z-index: 1;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        height: auto;
    }
`;
export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const Logo = styled.img`
    width: 100px;
    filter: invert(1);
`;

export const Ariel = styled.h1`
    font-size: 20px;
    white-space: nowrap;
    padding: 0px;
    color: #fff;
    @media screen and (max-width: 768px) {
        order: 1;
    }
`;
