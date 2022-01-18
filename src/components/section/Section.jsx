import React from 'react';
import { Wrapper, Title } from './Section.styled';
import PropTypes from 'prop-types';
export const Section = ({ title, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
