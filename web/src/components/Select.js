import styled from 'styled-components';

export default styled.select`
  width: 100%;
  background: #fff;
  height: 52px;
  border-radius: 4px;
  border: 2px solid #fff;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  transition: border-color 0.2s ease;
  appearance: none;;

  &:focus{
    border: 2px solid ${({ theme }) => theme.colors.primary.main}
  }

  &[disabled] {
    background-color: ${({ theme }) => theme.colors.gray.lighter};
    border-color: ${({ theme }) => theme.colors.gray.lighter};
    opacity: 1;
  }
`;
