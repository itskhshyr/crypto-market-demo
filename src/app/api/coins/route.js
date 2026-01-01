import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    const res = await axios.get(
      "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/listing",
      {
        params: {
          start: 1,
          limit: 100,
          sortBy: "rank",
          sortType: "asc",
          convert: "USD",
        },
        headers: {
          "X-CMC_PRO_API_KEY": process.env.CMC_API_KEY,
        },
      }
    );

    const data = res.data;
    console.log("External API data:", data);

    return NextResponse.json({
      list: data.data.cryptoCurrencyList,
      totalCount: data.data.totalCount,
    });
  } catch (error) {
    console.error("Axios error:", error.message);

    return NextResponse.json(
      { error: "Failed to fetch coins" },
      { status: 500 }
    );
  }
}
