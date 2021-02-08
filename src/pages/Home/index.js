import React from "react";
import { Link } from "react-router-dom";

import Title from "../../components/Title";

import { Container } from "./styles";

function Home() {
  return (
    <>
      <div style={{ minHeight: 26 }} />
      <Title />
      <Container>
        <ul>
          <li>
            <Link to="/hook-click-outside">Hook - useClickOutside </Link>
          </li>

          <li>
            <Link to="/hook-unload">Hook - useUnload </Link>
          </li>
        </ul>
      </Container>
    </>
  );
}

export default Home;
