import styled from 'styled-components';
import Card from '../components/Card';
import Layout from '../components/Layout';

const Title = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default () => (
  <Layout>
    <Title>
      <Card>Forum</Card>
    </Title>
  </Layout>
);
