import { ActionsTypes } from '../types/actions-types';

export const setPeople = (people) => {
    return {
        type: ActionsTypes.SET_PEOPLE,
        payload: people,
    };
};
export const setFailPeople = () => {
    return {
        type: ActionsTypes.FAILED_SET_PEOPLE,
    };
};

export const filterPeople = (people) => {
    return {
        type: ActionsTypes.FILTER_PEOPLE,
        payload: people,
    };
};

export const deletePeople = (people) => {
    return {
        type: ActionsTypes.DELETE_PEOPLE,
        payload: people,
    };
};

export const selectedPeople = (people) => {
    return {
        type: ActionsTypes.SELECTED_PEOPLE,
        payload: people,
    };
};

export const cleanFilter = () => {
    return {
        type: ActionsTypes.CLEAN_FILTER,
    };
};
