import styled from 'styled-components';
import Layout from '../Layout';

const Navigation = styled.nav`
  display: flex;
  -webkit-box-align: center;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0px 24px;
`;

const Logo = styled.div`
  margin-right: 15px;
  span {
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Search = styled.div`
  margin-right: 15px;
`;

const Menus = styled.div``;

export default () => (
  <Layout>
    <Navigation>
      <Logo>
        <span>BrazilInUS</span>
      </Logo>
      <Search>
        <input type='text' placeholder='Search for...' />
      </Search>
      <Menus>
        <a>Community</a>
        <a>Housing</a>
        <a>Jobs</a>
        <a>Trade</a>
      </Menus>
    </Navigation>
  </Layout>
);
