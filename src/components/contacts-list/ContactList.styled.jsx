import styled from 'styled-components';

export const Contacts = styled.ul`
  width: 300px;
  margin: 0;
  display: flex;
  flex-direction: column;

  > li:not(:last-child) {
    margin-bottom: 10px;
  }
`;
