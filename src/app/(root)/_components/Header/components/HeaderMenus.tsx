"use client";

import LogInModal from "@/components/LogInModal";
import { useAuth } from "@/contexts/auth.context";
import { setModal } from "@/redux/slices/utils.slice";
import { useAppDispatch } from "@/redux/store";
import Link from "next/link";
import React from "react";

function HeaderMenus() {
  const dispatch = useAppDispatch();
  const { isLoggedIn, logOut } = useAuth();

  const handleClickLogIn = () => {
    const action = setModal(<LogInModal />);
    dispatch(action);
  };

  const handleClickLogOut = () => {
    logOut();
  };
  return (
    <div>
      {isLoggedIn ? (
        <button onClick={handleClickLogOut}>로그아웃</button>
      ) : (
        <div className="flex">
          <Link href="sign-up">회원가입하기</Link>
          <button onClick={handleClickLogIn}>
            <Link href="/sign-up">로그인</Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default HeaderMenus;
