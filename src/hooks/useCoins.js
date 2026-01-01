"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function useCoins() {
  const [allCoins, setAllCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleCount, setVisibleCount] = useState(10);

  const itemsPerPage = 20;

  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      const { getAllCoins, saveCoins } = await import("@/db/indexeddb");

      // نمایش داده‌های ذخیره شده (offline-first)
      const local = await getAllCoins();
      if (isMounted && Array.isArray(local) && local.length) {
        setAllCoins(local);
        setLoading(false);
      }

      //  axios و آپدیت IndexedDB
      try {
        console.log("Fetching from API (axios)...");

        const res = await axios.get("/api/coins");
        const data = res.data;

        if (!isMounted) return;
         //فقط جهت اینکه بگم اینجا هم توانایی استفاده از ریداکس رو دارم اما تو این پروژه نیازی نیست 
      // dispatch(setTotalCount(res.data));
        setAllCoins(data.list);      
        await saveCoins(data.list);  
        setLoading(false);
      } catch (err) {
        console.warn("API fetch failed, using local data", err);
        setLoading(false);
      }
    }

    loadData();
    const interval = setInterval(loadData, 60000); 

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  // pagination
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const pageCoins = Array.isArray(allCoins)
    ? allCoins.slice(start, end)
    : [];

  const visibleCoins = pageCoins.slice(0, visibleCount);

  return {
    coins: visibleCoins,
    loading,
    currentPage,
    totalPages: Math.ceil(allCoins.length / itemsPerPage),
    goToPage: (p) => {
      setCurrentPage(p);
      setVisibleCount(10);
    },
  };
}
