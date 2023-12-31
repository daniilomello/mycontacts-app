import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
`;

export const ListHeader = styled.header`
  margin: 24px 0 18px;
  button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    span {
      font-weight: bold;
      margin-right: 8px;
      color: ${({ theme }) => theme.colors.primary.main};
    }

    img {
      transform: ${({ orderBy }) => (orderBy === 'asc' ? 'rotate(-180deg)' : 'rotate(0deg)')};
      transition: transform 0.5s ease;
    }
  }
`;

export const Card = styled.div`
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;
      small {
        margin-left: 8px;
        background: ${({ theme }) => theme.colors.primary.lighter};
        color:  ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        text-transform: uppercase;
        padding: 4px;
        border-radius: 4px;
      }
    }
    p {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray.light};
    }
  }

  .actions {
    display: flex;
    align-items: center;
    button, a {
      background: transparent;
      border: none;
      margin: 0 4px;
    }
  }
`;
