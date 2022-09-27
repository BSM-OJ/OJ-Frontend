import React from "react";
import type { NextPage } from "next";
import * as S from "../../styles/header/style";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faTimes,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Header: NextPage = () => {
  const [isToggled, setIsToggled] = React.useState(false);
  const [userToggled, setUserToggled] = React.useState(false);

  return (
    <S.Header_Wrapper>
      <Link href="/">
        <li>메인</li>
      </Link>
      <Link href="/login">
        <li>로그인</li>
      </Link>

      <Link href="/signup">
        <li>회원가입</li>
      </Link>

      <Link href="/contest/list">
        <li>대회목록</li>
      </Link>
      <Link href="/">
        <li>대회개최</li>
      </Link>
    </S.Header_Wrapper>
  );
};
export default Header;
