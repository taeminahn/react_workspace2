import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import NotFound from "./NotFound";
import Product from "./Product";

// npm install react-router-dom

/* 
1.  라우팅이란?
    웹 애플리케이션에서 라우팅 개념은 사용자가 요청한 URL에 따라
    알맞은 페이지를 보여주는 개념이다.

    리액트 라우터(React Router) : 리액트의 라우팅 관련 라이브러리들
    중에서 가장 오래되었고, 현재까지는 많이 사용되고 있다.
    이 라이브러리는 컴포넌트 기반으로 라우팅 시스템을 설정한다.

    Next.js : 리액트의 프레임워크이다. Create-React-App처럼
    리액트 프로젝트 설정을 하는 기능, 라우팅 시스템, 다국어 시스템 지원,
    서버 사이드 랜더링 등 다양한 기능들을 제공한다.
    Next.js의 라우팅 시스템은 파일 경로 기반으로 작동한다. 현재 리액트 라우터의
    대안으로 많이 사용되고 있다.

    리액트 라우터(React Router) 컴포넌트
    1. Link 컴포넌트를 사용하여 다른 페이지 이동 요청
    2. Route 컴포넌트는 페이지 이동 요청경로를 설정

    
*/
const MyrouterDom01 = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/product/:productId" element={<Product />}></Route>
          {/* 엘리먼트의 상단에 위치하는 라우트들의 규칙을 모두 
              확인하고, 일치하는 라우트가 없다면 이 라우트로 이동한다.
          */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MyrouterDom01;
