import React from 'react';
import PropTypes from 'prop-types';
import { CardListWrapper } from './CardListElements';
import Card from './../Card/';

const CardList = ({ loading, peopleList }) => {
    return (
        <CardListWrapper>
            <Card loading={loading} peopleList={peopleList} />
        </CardListWrapper>
    );
};

CardList.propTypes = {
    loading: PropTypes.bool,
    peopleList: PropTypes.array,
};
export default CardList;
