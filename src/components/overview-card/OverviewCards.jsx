"use client";

import OverviewCard from "./OverviewCard";
import { useSelector } from "react-redux";
import FormatLargeNumber from "./FormatLargeNumber";
import OverviewCardSkeleton from "./OverViewCardSkeleton";
export default function OverviewCards({ coins, loading }) {
  const totalCount = useSelector((state) => state.market.totalCount);
  const btc = coins.find((c) => c.symbol === "BTC");
  const btcMarketCap = btc?.quotes?.find((q) => q.name === "USD")?.marketCap;

  const totalMarketCap = coins.reduce((sum, coin) => {
    const usd = coin.quotes?.find((q) => q.name === "USD");
    return sum + (usd?.marketCap || 0);
  }, 0);

  const marketCapChange24h =
    (coins.reduce((sum, coin) => {
      const usd = coin.quotes?.find((q) => q.name === "USD");
      if (!usd?.marketCap || !usd?.percentChange24h) return sum;
      return sum + (usd.marketCap * usd.percentChange24h) / 100;
    }, 0) /
      totalMarketCap) *
    100;

  const volumeChange24h = btc?.quotes?.find(
    (q) => q.name === "USD"
  )?.volumePercentChange;

  const totalVolume24h = coins.reduce((sum, coin) => {
    const usd = coin.quotes?.find((q) => q.name === "USD");
    return sum + (usd?.volume24h || 0);
  }, 0);

  const btcDominance =
    btcMarketCap && totalMarketCap
      ? (btcMarketCap / totalMarketCap) * 100
      : null;

  return (
    <div className="d-flex flex-column w-100">
      <div className="text-sm text-muted fw-medium  px-2 ">
        <span>The global cryptocurrency market cap today is</span>
        <span>
          &nbsp;&nbsp;
          <FormatLargeNumber value={totalMarketCap} /> &nbsp;
        </span>
        a &nbsp;
        <span
          className={`${
            marketCapChange24h >= 0 ? "text-positive" : "text-negative"
          }`}
        >
          {Math.abs(marketCapChange24h).toFixed(2)}% &nbsp;
        </span>
        change in the last 24 hours
      </div>
      <div className="d-flex flex-column flex-lg-row w-100 gap-3 mt-3">
        {loading ? (
          <div className="d-flex bg-danger w-100">
            <OverviewCardSkeleton />
            <OverviewCardSkeleton />
            <OverviewCardSkeleton />
            <OverviewCardSkeleton />
          </div>
        ) : (
          <>
            <OverviewCard
              title="Total Market Cap"
              value={`$${totalMarketCap.toLocaleString()}`}
              change={marketCapChange24h}
              trend={marketCapChange24h >= 0 ? "up" : "down"}
            />
            <OverviewCard
              title="24h Trading Volume"
              value={`$${totalVolume24h.toLocaleString()}`}
              change={volumeChange24h}
              trend={volumeChange24h >= 0 ? "up" : "down"}
            />
            <OverviewCard
              title="BTC Dominance"
              value={btcDominance ? `${btcDominance.toFixed(2)}%` : "-"}
            />
            <OverviewCard
              title="Active Cryptos"
              value={totalCount ?? coins.length}
            />
          </>
        )}
      </div>
    </div>
  );
}
