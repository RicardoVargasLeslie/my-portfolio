import React from "react";
import Footer from "../../Containers/Footer/Footer";
import Header from "../../Containers/Header/Header";
import styled from "styled-components";

export const Layout = styled.div`
 color: #79787c;
 margin: 0;
 text-align: center;
 * {
  align-items: baseline;
  vertical-align: baseline;
  align-self: baseline;
}
`;

const LayoutWrapper = ({ children }) => (
  <Layout>
    <Header />
    {children}
    <Footer />
  </Layout>
);

export default LayoutWrapper;
