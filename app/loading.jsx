'use client'
import { useEffect } from "react";
export default function Loading() {
  useEffect(() => {
    // Simulate async promise
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000)); // 2s delay
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <span className="loading loading-infinity size-28 loading-xl"></span>
      </div>
    </>
  )
}