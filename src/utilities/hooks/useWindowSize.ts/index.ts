"use client";

import { setIsMobile } from "@/redux/slices/ConditionalRender/slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useWindowSize = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      dispatch(setIsMobile(window.innerWidth <= 992));
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);
};

export default useWindowSize;
