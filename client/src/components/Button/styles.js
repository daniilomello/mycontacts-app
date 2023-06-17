import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  padding: 0 16px;
  color: #fff;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.primary.main};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  transition: all 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }
  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  ${({ theme, danger }) => (
    danger && css`
      background: ${theme.colors.danger.main};
      &:hover {
        background: ${theme.colors.danger.light};
      }
      &:active {
        background: ${theme.colors.danger.dark};
      }
    `
  )}

  &[disabled] {
    background: #ccc;
    cursor: initial;
  }
`;
