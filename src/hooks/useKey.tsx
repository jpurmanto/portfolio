import { useEffect } from "react";

export const useKey = (keyName: string, callback: () => void) => {
  const handleKeydown = ({ key }: KeyboardEvent) => {
    if (key !== keyName) return;
    callback();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [callback]);
};
