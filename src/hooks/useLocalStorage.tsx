"use client";
import { useEffect, useState } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
  const ISSERVER = typeof window === "undefined";
  const [value, setValue] = useState<T>(() => {
    const localStorageData = !ISSERVER ? localStorage.getItem(key) : null;

    return localStorageData?.length
      ? JSON.parse(localStorageData)
      : initialValue;
  });

  useEffect(() => {
    if (!ISSERVER) localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
}

export default useLocalStorage;
