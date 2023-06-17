import styled from 'styled-components';

export const Container = styled.div`
  & + & {
    margin-top: 16px;
  }

  small {
    display:  block;
    font-size: 12px;
    margin-top: 8px;
    font-weight: bold;
    margin-left: 16px;
    color: ${({ theme }) => theme.colors.danger.main}
  }

  .form-item {
    position: relative;
    .loader {
      position: absolute;
      top: 18px;
      right: 16px;
    }
  }
`;
