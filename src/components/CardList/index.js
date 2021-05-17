import React from 'react';

import { CardListWrapper } from './CardListElements';
import Card from './../Card/';

const CardList = ({ loading, peopleList }) => {
    return (
        <CardListWrapper>
            <Card loading={loading} peopleList={peopleList} />
        </CardListWrapper>
    );
};

export default CardList;
