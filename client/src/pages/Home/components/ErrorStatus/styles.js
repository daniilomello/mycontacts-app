import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  .details {
    margin-left: 24px;
    h3 {
      font-size: 22px;
      font-weight: 900;
      margin-bottom: 8px;
      color: ${({ theme }) => theme.colors.danger.main}
    }
  }
`;
