import React, {
  ComponentPropsWithoutRef,
  forwardRef,
  ForwardRefRenderFunction,
} from 'react';
import styled, { css } from 'styled-components';

export type ButtonAppearance = 'default' | 'main' | 'point' | 'danger';

interface StyledButtonProps {
  appearance?: ButtonAppearance;
}

const StyledButton = styled.button<StyledButtonProps>`
  border: 1px solid ${(props) => props.theme.colors.foreground};
  cursor: pointer;
  margin: 0;
  border-radius: 1rem;
  color: ${(props) => props.theme.colors.font};
  ${(props) => {
    switch (props.appearance) {
      case 'main':
        return css`
          background-color: ${(props) => props.theme.colors.main};
        `;
      case 'point':
        return css`
          background-color: ${(props) => props.theme.colors.point};
        `;
      case 'danger':
        return css`
          background-color: ${(props) => props.theme.colors.danger};
        `;
      default:
        return css`
          background-color: ${(props) => props.theme.colors.background};
        `;
    }
  }}
`;

export type ButtonProps = StyledButtonProps &
  ComponentPropsWithoutRef<'button'>;

const Button: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { children, appearance = 'default', ...restProps },
  ref,
) => {
  return (
    <StyledButton ref={ref} appearance={appearance} {...restProps}>
      {children}
    </StyledButton>
  );
};

export default forwardRef(Button);
