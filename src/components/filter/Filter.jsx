import React from 'react';
import PropTypes from 'prop-types';
import { FilterWrapper } from './Filter.styled';
export const Filter = ({ idGenerator, children, onChange }) => {
  const id = idGenerator();
  return (
    <FilterWrapper>
      <label htmlFor={id}>{children}</label>
      <input type="text" name="filter" id={id} onChange={onChange}></input>
    </FilterWrapper>
  );
};
Filter.propTypes = {
  idGenerator: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
