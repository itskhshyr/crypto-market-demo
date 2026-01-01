import Image from "next/image";
import styles from "./OverviewCard.module.css";
import Box from "@mui/material/Box";
export default function OverviewCard({ title, value, change, trend = "up" }) {
  return (
    <div className={`${styles.cardWrapper} mt-3  mt-lg-0`}>
      <div className="d-flex flex-column ">
        <div className="text-md pb-1"> {title}</div>
        <div className="text-lg fw-semibold "> {value}</div>
        <div>
          {typeof change === "number" && (
            <Box mt={0.5}>
              <div
                style={{
                  fontSize: 12,
                  color: change >= 0 ? "#16a34a" : "#dc2626",
                }}
              >
                {change >= 0 ? "▲" : "▼"} {Math.abs(change).toFixed(2)}%
              </div>
            </Box>
          )}
        </div>
      </div>
      <div>
        <Image
          alt="chart-picture"
          src="/images/red-chart.svg"
          width={38}
          height={38}
        />
      </div>
    </div>
  );
}
