import TouchableScale from 'react-native-touchable-scale';
import styled from 'styled-components/native';


export const StyledButton = styled(TouchableScale)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : 'transparent'};
  min-height: 25px;
  border-radius: ${({ br }) => (br ? `${br}px` : `0px`)};

  ${(props) => props.customStyles};
`;

export const Button = ({ children, ...props }) => {
  return (
    <StyledButton
      {...props}
      activeScale={0.95}
      tension={50}
      friction={7}
      useNativeDriver
    >
      {children}
    </StyledButton>
  );
};

export default Button;