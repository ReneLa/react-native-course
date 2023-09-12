import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : 'transparent'};

  ${({ flex }) =>
    flex &&
    css`
      flex: ${flex};
    `};
  ${({ row }) =>
    row &&
    css`
      flex-direction: row;
    `};
  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
    `};
  ${({ space }) =>
    space &&
    css`
      justify-content: ${space};
    `};
  ${({ center }) =>
    center &&
    css`
      align-items: center;
    `};
    ${({ middle }) =>
    middle &&
    css`
      justify-content: center;
    `};


  ${(props) => props.customStyles};
`;

export default Container;
