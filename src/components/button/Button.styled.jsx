import styled from 'styled-components';

export const PageButton = styled.button`
  width: 100px;

  border-radius: 4px;
  border: 1px solid #075317;
  background-color: #90c79c;
  cursor: pointer;
  font-size: 14px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #f1f5f2;
    background-color: #396944;
  }
`;
