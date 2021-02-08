import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  line-height: 24px;

  a {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-decoration: none;
    color: #3a3a3a;
  }

  svg {
    margin-right: 12px;
  }

  span {
    font-size: 18px;
  }
`;
