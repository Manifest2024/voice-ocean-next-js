"use client";
import { Provider } from "react-redux";
import store from ".";
import { useEffect, useState } from "react";

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return <Provider store={store}>{children}</Provider>;
};
