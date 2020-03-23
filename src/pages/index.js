import styled from 'styled-components';
import Card from './components/Card';
import Layout from './Layout';

const Title = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default () => (
  <Layout>
    <Title>
      <Card>Hello world</Card>
    </Title>
  </Layout>
);
