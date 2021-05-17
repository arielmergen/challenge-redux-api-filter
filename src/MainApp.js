import React from 'react';
import { useSelector } from 'react-redux';
import './Main.css';

import { useFetch } from './hooks/useFetch';

import CardList from './components/CardList/index';
import Header from './components/Header';

const MainApp = () => {
    useFetch('https://swapi.dev/api/people/');
    const { isLoading, peopleFiltered } = useSelector((state) => state.allPeople);
    return (
        <div>
            <Header />
            <CardList loading={isLoading} peopleList={peopleFiltered} />
        </div>
    );
};

export default MainApp;
