import styled from 'styled-components';

const LayoutBody = styled.div`
  max-width: 1248px;
  padding: 0px 24px;
  margin: 0px auto;
  display: flex;
`;

export default ({ children }) => <LayoutBody>{children}</LayoutBody>;
