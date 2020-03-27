import styled from 'styled-components';

export const Navigation = styled.nav`
  display: flex;
  -webkit-box-align: center;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0px 24px;
  min-height: 43px;
`;

export const Logo = styled.div`
  margin-right: 15px;
  span {
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Search = styled.div`
  margin-right: 15px;
`;

export const Menus = styled.div`
  a:not(:first-child) {
    margin-left: 32px;
  }
`;
