"use client";

import React from "react";
import Skeleton from "@mui/material/Skeleton";


export default function OverviewCardSkeleton() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 16px",
        borderRadius: "12px",
        backgroundColor: "#f5f5f5",
        minWidth: 300,
        height: 80,
        marginTop: 12,
        margin: 15,
      }}
     
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        <Skeleton variant="text" width={100} height={16} />
        <Skeleton variant="text" width={80} height={20} />
        <Skeleton variant="text" width={60} height={14} />
      </div>

      <Skeleton variant="circular" width={38} height={38} />
    </div>
  );
}
