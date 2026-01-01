"use client";
import { useState, useMemo, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CoinRow from "./CoinRow";
import SearchBar from "../ui/search-bar/SearchBar";
import { Box } from "@mui/material";
import Pagination from "../pagination/Pagination";
import ShowMoreButton from "../pagination/ShowMoreButton";
import TableSkeleton from "./TableSkeleton";

export default function CoinTable({
  coins = [],
  currentPage,
  totalPages,
  goToPage,
  loading,
}) {
  const [visibleCount, setVisibleCount] = useState(5);
  const [search, setSearch] = useState("");
  const headerCellStyle = {
    fontSize: "14px",
    fontFamily: "jakartaBold",
    color: "var(--text-secondary)",
    borderBottom: "1px solid var(--table-border)",
  };

  const filteredCoins = useMemo(() => {
    if (!search) return coins;

    return coins.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [coins, search]);

  const visibleCoins = useMemo(() => {
    return filteredCoins.slice(0, visibleCount);
  }, [filteredCoins, visibleCount]);

  useEffect(() => {
    setVisibleCount(5);
  }, [currentPage, search]);
  return (
    <div className="">
      <div className=" mt-1">
        <SearchBar value={search} onChange={setSearch} />
      </div>
      <div className="mt-3">
        {loading ? (
          <TableSkeleton rows={10} columns={5} />
        ) : (
          <TableContainer
            sx={{
              padding: "20px",
              borderRadius: "var(--radius-lg)",
            }}
          >
            <Box
              sx={{
                borderRadius: "var(--radius-lg)",
               
                border: "1px solid var(--table-border)",
              }}
            >
              <Table>
                <TableHead
                  sx={{
                    fontFamily: "jakartaBold",
                    border: "1px solid var(--table-border)",
                    borderRadius: "var(--radius-lg)",
                  }}
                >
                  <TableRow
                    sx={{
                      backgroundColor: "var(--table-header-bg)",
                    }}
                  >
                    <TableCell sx={headerCellStyle}>#</TableCell>
                    <TableCell sx={headerCellStyle}>Coin</TableCell>
                    <TableCell sx={headerCellStyle}>Price</TableCell>
                    <TableCell sx={headerCellStyle}>1h </TableCell>
                    <TableCell sx={headerCellStyle}>24h </TableCell>
                    <TableCell sx={headerCellStyle}>7d </TableCell>
                    <TableCell sx={headerCellStyle}>24h(Volume) </TableCell>
                    <TableCell sx={headerCellStyle}>Market Cap</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {visibleCoins.map((coin, index) => {
                    const quoteUSD =
                      coin.quotes?.find((q) => q.name === "USD") || {};

                    return (
                      <TableRow key={coin.id}>
                        <CoinRow
                          index={index}
                          coin={coin}
                          rank={coin.cmcRank}
                          id={coin.id}
                          name={coin.name}
                          symbol={coin.symbol}
                          price={quoteUSD.price}
                          percent1h={quoteUSD.percentChange1h}
                          percent24h={quoteUSD.percentChange24h}
                          percent7d={quoteUSD.percentChange7d}
                          volume24h={quoteUSD.volume24h}
                          marketCap={quoteUSD.marketCap}
                        />
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Box>
            <div className="d-flex align-items-center justify-content-between mt-4">
              <div>
                <ShowMoreButton
                  onClick={() => setVisibleCount((v) => v + 5)}
                  disabled={visibleCount >= filteredCoins.length}
                />
              </div>
              <div>
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={goToPage}
                />
              </div>
            </div>
          </TableContainer>
        )}
      </div>
    </div>
  );
}
