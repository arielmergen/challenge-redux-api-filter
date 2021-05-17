import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from './../Buttons/ButtonElements';
import { SearchFormContainer, SearchFormWrapper, SearchFormInput } from './SearchFormElements';
import { filterPeople, cleanFilter } from '../../redux/actions/peopleActions';

const handleClick = (e, ref, dispatch, formValue) => {
    e.preventDefault();
    if (ref.current.value !== '') {
        dispatch(filterPeople(formValue));
    }
};
const handleOnChange = (e, ref, dispatch, setFormValue) => {
    if (ref.current.value) {
        setFormValue(e.target.value);
    } else {
        dispatch(cleanFilter());
    }
};
const renderForm = (ref, dispatch, formValue, setFormValue) => (
    <SearchFormContainer>
        <SearchFormWrapper>
            <SearchFormInput ref={ref} onChange={(e) => handleOnChange(e, ref, dispatch, setFormValue)} />
            <Button onClick={(e) => handleClick(e, ref, dispatch, formValue)}>Search</Button>
        </SearchFormWrapper>
    </SearchFormContainer>
);

const SearchForm = () => {
    const intialValue = {
        name: '',
    };
    const dispatch = useDispatch();
    const [formValue, setFormValue] = useState(intialValue);
    const ref = useRef();
    return renderForm(ref, dispatch, formValue, setFormValue);
};

export default SearchForm;
