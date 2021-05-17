import styled from 'styled-components';

export const Button = styled.button`
    align-items: center;
    background: transparent;
    border: none;
    border: solid 1px #fff;
    color: #fff;
    cursor: pointer;
    font-size: 20px;
    font-weight: 700;
    justify-content: center;
    outline: none;
    padding: 10px 30px;
    transition: all 0.2s ease-in-out;
    white-space: nowrap;
    @media screen and (max-width: 768px) {
        width: 100%;
        display: block;
        transition: all 0.2s ease-in-out;
    }
    &:hover {
        background: #ffe300;
        transition: all 0.2s ease-in-out;
        color: #000;
    }
`;
