import styled from 'styled-components';

const Card = styled.div`
  box-shadow: rgba(8, 35, 51, 0.05) 0px 3px 6px;
  position: relative;
  border-radius: 8px;
  background: white;
  padding: 32px;
  width: 300px;
  height: 500px;
`;

export default ({ children }) => <Card>{children}</Card>;
