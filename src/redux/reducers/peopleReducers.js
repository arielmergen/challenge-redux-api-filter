import { ActionsTypes } from '../types/actions-types';

const initialState = {
    people: [],
    peopleFiltered: [],
    isLoading: true,
};

export const peopleReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionsTypes.SET_PEOPLE:
            return { ...state, people: payload, peopleFiltered: payload, isLoading: false };

        case ActionsTypes.FAILED_SET_PEOPLE:
            return { ...state, people: initialState, peopleFiltered: initialState, isLoading: false };

        case ActionsTypes.FILTER_PEOPLE:
            return {
                ...state,
                peopleFiltered: state.people.filter((person) =>
                    person.name.toLocaleLowerCase().includes(payload.toLocaleLowerCase())
                ),
            };
        case ActionsTypes.DELETE_PEOPLE:
            return {
                ...state,
                peopleFiltered: state.peopleFiltered.filter((person) => person.name !== payload),
                people: state.people.filter((person) => person.name !== payload),
            };
        case ActionsTypes.CLEAN_FILTER:
            const oldState = { ...state };
            return { ...state, peopleFiltered: oldState.people };
        default:
            return state;
    }
};
