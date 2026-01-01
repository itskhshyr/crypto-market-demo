'use client';

import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

export default function TableSkeleton({ rows = 10, columns = 8 }) {
  const headerCellStyle = {
    fontSize: "14px",
    fontWeight: 600,
    color: "#999",
  };

  return (
    <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            {Array.from({ length: columns }).map((_, index) => (
              <TableCell key={index} sx={headerCellStyle}>
                <Skeleton variant="text" width={80} height={20} />
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {Array.from({ length: columns }).map((_, colIndex) => (
                <TableCell key={colIndex}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Skeleton
                      variant="rectangular"
                      width={colIndex === 1 ? 120 : 60}
                      height={20}
                    />
                  </Box>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
