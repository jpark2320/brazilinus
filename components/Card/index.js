import styled from 'styled-components';

const Card = styled.div`
  ${({ theme }) => theme.whiteBox};
  position: relative;
  padding: 32px;
  width: 300px;
  height: 500px;
`;

export default ({ children }) => <Card>{children}</Card>;
