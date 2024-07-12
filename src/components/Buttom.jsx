import styled, { css } from "styled-components";

const buttonStyles = {
  default: css`
    background-color: #fe4c50;
    color: white;
  `,
  destructive: css`
    background-color: #ff0000;
    color: white;
  `,
  outline: css`
    background-color: transparent;
    color: #fe4c50;
    border: 2px solid #fe4c50;
  `,
  dark: css`
    background-color: #333;
    color: white;
  `,
};

const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  ${(props) => buttonStyles[props.variant || "default"]}

  &:hover {
    opacity: 0.8;
  }

  ${(props) =>
    props.className &&
    css`
      ${props.className}
    `}
`;

const Button = ({ children, variant, className, ...props }) => {
  return (
    <StyledButton variant={variant} className={className} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
