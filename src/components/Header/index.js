import { Link } from "react-router-dom";

import { FiArrowLeftCircle } from "react-icons/fi";

import * as S from "./styles";

const Header = () => {
  return (
    <>
      <S.Header>
        <Link to="/">
          <FiArrowLeftCircle fontSize={26} />
          <span>Home</span>
        </Link>
      </S.Header>
    </>
  );
};

export default Header;
