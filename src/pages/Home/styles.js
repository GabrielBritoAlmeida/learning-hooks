import styled from "styled-components";

export const Container = styled.div`
  ul {
    margin: 40px;

    li {
      margin-top: 20px;

      a {
        text-decoration: none;
        font-size: 24px;
        color: #3d3d3d;
        transition: 0.3s font-size;

        &:hover {
          font-size: 26px;
        }
      }
    }
  }
`;
