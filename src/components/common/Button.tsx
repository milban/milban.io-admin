import React, {
  ComponentPropsWithoutRef,
  forwardRef,
  ForwardRefRenderFunction,
} from 'react';
import styled, { css } from 'styled-components';

export type ButtonAppearance = 'primary' | 'secondary' | 'danger';

interface StyledButtonProps {
  appearance?: ButtonAppearance;
}

const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  outline: none;
  letter-spacing: 0.04rem;
  cursor: pointer;
  margin: 0.25rem;
  padding: 0 1rem;
  border-radius: 0.1rem;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  line-height: 2.25rem;
  ${(props) => {
    switch (props.appearance) {
      case 'primary':
        return css`
          color: ${(props) => props.theme.colors.fontOnPrimary};
          background-color: ${(props) => props.theme.colors.primary};
        `;
      case 'secondary':
        return css`
          color: ${(props) => props.theme.colors.fontOnSecondary};
          background-color: ${(props) => props.theme.colors.secondary};
        `;
      case 'danger':
        return css`
          color: ${(props) => props.theme.colors.fontOnDanger};
          background-color: ${(props) => props.theme.colors.danger};
        `;
      default:
        return;
    }
  }}

  &:hover {
    ${(props) => {
      switch (props.appearance) {
        case 'primary':
          return css`
            background-color: ${(props) => props.theme.colors.primaryDark};
          `;
        case 'secondary':
          return css`
            background-color: ${(props) => props.theme.colors.secondaryDark};
          `;
        case 'danger':
          return css`
            background-color: ${(props) => props.theme.colors.dangerDark};
          `;
        default:
          return;
      }
    }}
  }
`;

export type ButtonProps = StyledButtonProps &
  ComponentPropsWithoutRef<'button'>;

const Button: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { children, appearance = 'primary', ...restProps },
  ref,
) => {
  return (
    <StyledButton ref={ref} appearance={appearance} {...restProps}>
      {children}
    </StyledButton>
  );
};

export default forwardRef(Button);
