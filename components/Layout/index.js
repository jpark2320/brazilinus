import styled from 'styled-components';

const Layout = styled.div`
  max-width: 1248px;
  padding: 0px 24px;
  margin: 0px auto;
`;

export default ({ children }) => <Layout>{children}</Layout>;
