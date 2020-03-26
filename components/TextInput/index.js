import styled from 'styled-components';

import { SearchIcon } from '../../static/icons';

const Container = styled.div`
  position: relative;
`;

const SearchIconContainer = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  left: 10px;
  top: 0;
  bottom: 0;
  z-index: 10003;
`;

const TextInput = styled.input`
  position: relative;
  z-index: 10002;
  height: 40px;
  width: 100%;
  min-width: 40px;
  color: rgb(12, 52, 75);
  font-size: 16px;
  background-color: transparent;
  padding: 0px 16px 0px 40px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  border-radius: 6px;

  &:focus {
    background-color: #ffffff;
    transition: all 0.3s ease-in-out 0s;
  }
`;

export default ({ placeholder, value, name }) => (
  <Container>
    <SearchIconContainer>
      <SearchIcon />
    </SearchIconContainer>
    <TextInput
      type='text'
      placeholder={placeholder}
      value={value}
      name={name}
    />
  </Container>
);
