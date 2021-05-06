import React from "react";
import { scrollToTop } from "../components/ScrollToTop";
import Signin from '../components/Signin/Signin'

const SinginPage = () => {
  return (
    <div>
      <scrollToTop />
      <Signin />
    </div>
  );
};

export default SinginPage;
