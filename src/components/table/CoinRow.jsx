"use client";

import TableCell from "@mui/material/TableCell";
import Image from "next/image";

export default function CoinRow({
  index,
  rank,
  id,
  name,
  symbol,
  price,
  percent1h,
  percent24h,
  percent7d,
  volume24h,
  marketCap,
  coin,
}) {
  const percentColor = (value) =>
    value > 0 ? "green" : value < 0 ? "red" : "#46484B";

  const arrowIcon = {
    green: "/images/icons/green-arrow.svg",
    red: "/images/icons/red-arrow.svg",
  };
  const color1h = percentColor(percent1h);

  return (
    <>
      <TableCell sx={{ fontSize: "14px", fontFamily: "jakartaMedium" }}>
        {rank ?? "-"}
      </TableCell>
      <TableCell sx={{ fontSize: "14px", fontFamily: "jakartaBold" }}>
        <div>{name}</div>
        <div className="text-muted text-xs" style={{fontWeight:"300 "}}>{symbol}</div>
      </TableCell>

      {/* <TableCell sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Image
          src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`}
          width={24}
          height={24}
          alt={name}
        />
       
      </TableCell> */}

      <TableCell sx={{ fontSize: "14px", fontFamily: "jakartaMedium" }}>
        {price ? `$${price.toLocaleString()}` : "-"}
      </TableCell>

      <TableCell
        sx={{
          color: percentColor(percent1h),
          fontSize: "14px",
          fontFamily: "jakartaMedium",
        }}
      >
        <div className="d-flex align-items-center">
          <div>
            {arrowIcon[color1h] && (
              <Image
                src={arrowIcon[color1h]}
                width={22}
                height={22}
                alt={color1h}
              />
            )}
          </div>
          <div>
            {typeof percent1h === "number" ? `${percent1h.toFixed(2)}%` : "-"}
          </div>
        </div>
      </TableCell>

      <TableCell
        sx={{
          color: percentColor(percent24h),
          fontSize: "14px",
          fontFamily: "jakartaMedium",
        }}
      >
        {typeof percent24h === "number" ? `${percent24h.toFixed(2)}%` : "-"}
      </TableCell>

      <TableCell
        sx={{
          color: percentColor(percent7d),
          fontSize: "14px",
          fontFamily: "jakartaMedium",
        }}
      >
        {typeof percent7d === "number" ? `${percent7d.toFixed(2)}%` : "-"}
      </TableCell>

      <TableCell sx={{ fontSize: "14px", fontFamily: "jakartaMedium" }}>
        {volume24h ? `$${volume24h.toLocaleString()}` : "-"}
      </TableCell>

      <TableCell sx={{ fontSize: "14px", fontFamily: "jakartaMedium" }}>
        {marketCap ? `$${marketCap.toLocaleString()}` : "-"}
      </TableCell>
    </>
  );
}
