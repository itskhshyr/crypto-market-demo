"use client";

import useCoins from "@/hooks/useCoins";
import CoinTable from "@/components/table/CoinTable";
import OverviewCards from "@/components/overview-card/OverviewCards";
import MenuContainer from "@/components/Menu/MenuContainer";
import styles from "./page.module.css";
import TableSkeleton from "@/components/table/TableSkeleton";
import OverviewCardSkeleton from "@/components/overview-card/OverViewCardSkeleton";
import MenuSkeleton from "@/components/Menu/MenuSkeleton";

export default function Home() {
  const { coins, loading, currentPage, totalPages, goToPage } = useCoins();

  if (loading)
    return (
      <div className="p-4 container-fluid ">
        <div className="container ">
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-center justify-content-lg-start">
              {loading ? <MenuSkeleton /> : <MenuContainer />}
            </div>
            <div className="d-none d-lg-flex mt-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <OverviewCardSkeleton key={i} />
              ))}
            </div>

            <div className="d-flex flex-column d-lg-none mt-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <OverviewCardSkeleton key={i} />
              ))}
            </div>
            <div className={`mt-4 ${styles.boxContainer}  `}>
              <TableSkeleton rows={10} columns={5} />
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="p-4 container-fluid ">
      <div className="container ">
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-center justify-content-lg-start">
            <MenuContainer />
          </div>
          <div className=" d-flex mt-4">
            <OverviewCards coins={coins} loading={loading} />
          </div>
          <div className={`mt-4 ${styles.boxContainer}  `}>
            <CoinTable
              loading={loading}
              coins={coins}
              currentPage={currentPage}
              totalPages={totalPages}
              goToPage={goToPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
