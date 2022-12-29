import styled from 'styled-components';

/* eslint-disable-next-line */
interface ButtonProps {
  text: string;
  color: 'primary' | 'secondary';
  onClick: () => void;
}

const StyledButton = styled.button<{ color: ButtonProps['color'] }>`
background-color: ${(props) =>
  props.color === 'primary' ? '#333' : '#ccc'};
color: white;
font-size: 22px;
padding: 8px 16px;
border: none;
border-radius: 5px;
margin-top: 15px;
cursor: pointer;

&:hover {
  background-color: ${(props) =>
    props.color === 'primary' ? '#555' : '#eee'};
}
`;

export const Button: React.FC<ButtonProps> = ({ text = 'Button', color, onClick }) => {
  return (
    <StyledButton color={color} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
