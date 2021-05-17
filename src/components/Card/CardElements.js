import styled from 'styled-components';

export const CardWrapper = styled.div`
    align-items: center;
    background: transparent;
    border-radius: 10px;
    border: solid 1px #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: flex-start;
    max-height: 340px;
    padding: 30px;
    transition: all 0.2s ease-in-out;
    width: 100%;
    gap: 16px;
    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        border: solid 1px #ffe300;
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: space-between;
    }
`;

export const CardContent = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    @media screen and (max-width: 768px) {
        align-items: center;
        margin-bottom: 20px;
    }
`;

export const CardH2 = styled.h2`
    font-size: 48px;
    color: #fff;
    margin-bottom: 10px;
    @media screen and (max-width: 768px) {
        font-size: 40px;
        text-align: center;
    }
`;
export const CardHeigh = styled.p`
    color: #fff;
    font-size: 1rem;
    text-align: center;
`;
export const CardGender = styled.p`
    color: #fff;
    font-size: 1rem;
    text-align: center;
`;
export const CardData = styled.p`
    color: #fff;
    font-size: 1rem;
    text-align: center;
`;
