import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deletePeople } from '../../redux/actions/peopleActions';
import { Button } from '../Buttons/ButtonElements';
import { CardWrapper, CardContent, CardH2, CardHeigh, CardGender, CardData } from './CardElements';
import Loading from '../Loading';

const handleDeleteClick = (e, name, dispatch) => {
    e.preventDefault();
    dispatch(deletePeople(name));
};

const renderCard = (dispatch, name, height, gender, mass, hair_color) => (
    <CardWrapper key={name}>
        <CardContent>
            <CardH2>{name}</CardH2>
            <CardHeigh>Height:{height}</CardHeigh>
            <CardGender>Gender:{gender}</CardGender>
            <CardData>Mass: {mass}</CardData>
            <CardData>Hair color:{hair_color}</CardData>
        </CardContent>
        <Button onClick={(e) => handleDeleteClick(e, name, dispatch)}>Delete</Button>
    </CardWrapper>
);

const renderList = (peopleList = [], dispatch) =>
    peopleList.map((person) => {
        const { name, height, gender, mass, hair_color } = person;
        return renderCard(dispatch, name, height, gender, mass, hair_color);
    });

const renderLoading = () => <Loading />;

const Card = ({ loading, peopleList }) => {
    const dispatch = useDispatch();
    return <>{loading ? renderLoading() : renderList(peopleList, dispatch)}</>;
};

Card.prototype = {
    loading: PropTypes.bool,
    peopleList: PropTypes.array,
};
export default Card;
