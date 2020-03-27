import styled from 'styled-components';
import Card from '../components/Card';

const Title = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default () => (
  <Title>
    <Card>Forum</Card>
  </Title>
);
