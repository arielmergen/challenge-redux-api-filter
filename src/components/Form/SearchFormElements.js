import styled from 'styled-components';

export const SearchFormContainer = styled.div`
    width: 100%;
    max-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 1100px;
        margin: 50px 0 25px 0;
    }

    @media screen and (max-width: 480px) {
        height: 1200px;
    }
`;

export const SearchFormWrapper = styled.div`
    width: 100%;
    align-items: center;
    display: flex;
    grid-gap: 16px;
    padding-right: 50px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const SearchFormInput = styled.input`
    width: 20%;
    padding: 12px 30px;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;
