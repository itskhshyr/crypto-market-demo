// HeaderLogoBadgeSkeleton.jsx
"use client";
import React from "react";

export default function HeaderLogoSkeleton() {
  return (
    <div className="d-flex align-items-center" style={{ gap: "12px" }}>
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: "12px",
          backgroundColor: "#e0e0e0",
        }}
      ></div>

      <div className="d-flex flex-column" style={{ gap: "4px", flex: 1 }}>
        <div
          style={{
            width: "150px",
            height: "16px",
            borderRadius: "4px",
            backgroundColor: "#e0e0e0",
          }}
        ></div>
        <div
          style={{
            width: "250px",
            height: "12px",
            borderRadius: "4px",
            backgroundColor: "#e0e0e0",
          }}
        ></div>
      </div>
    </div>
  );
}
