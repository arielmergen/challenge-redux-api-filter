import styled from 'styled-components';

export const CardListContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #010606;
    padding: 20px;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1200px;
    }
`;

export const CardListWrapper = styled.div`
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    grid-gap: 16px;
    padding: 0 50px;
`;
