
## Getting Started
Crypto Market Dashboard - Demo

یک داشبورد نمایش اطلاعات ارزهای دیجیتال با React، Next.js و MUI که به صورت realtime اطلاعات را از API دریافت و در جدول‌ها، باکس‌ها و نمودارها نمایش می‌دهد.

 ویژگی‌ها

نمایش لیست ارزهای دیجیتال با اطلاعات کامل شامل قیمت، تغییرات 1h/24h/7d، حجم معاملات و مارکت کپ.

جستجوی کوین‌ها بر اساس نام.

Pagination و Show More:

Pagination برای مرور صفحات.

Show More برای بارگذاری کوین‌ها به صورت بسته‌های 10/50 تایی جدا از Pagination.

Overview Cards با اطلاعات مهم بازار:

Total Market Cap (با فرمت میلیارد و تریلیون)

24h Trading Volume

BTC Dominance

Active Cryptos

Skeleton Loading برای کامپوننت‌ها هنگام لود شدن داده‌ها.

طراحی ریسپانسیو با MUI و CSS سفارشی.

استفاده از Redux (خام) برای مدیریت state گلوبال، مانند totalCount تعداد ارزهای فعال.

IndexedDB برای ذخیره و خواندن داده‌های کش شده در مرورگر.

Next.js API routes برای fetch داده‌ها و محافظت با API Key.

 تکنولوژی‌ها و کتابخانه‌ها

Next.js
 - فریمورک React برای SSR و API Routes

React
 - کتابخانه‌ی اصلی UI

Redux
 - مدیریت State

Material UI (MUI)
 - برای جدول‌ها، Box و Skeleton

IndexedDB
 - ذخیره‌سازی داده‌ها در مرورگر



CSS Modules + Global CSS - برای استایل 

 ساختار پروژه
/app
  /components
    /coin-table
      CoinTable.jsx
      CoinRow.jsx
    /overview
      OverviewCard.jsx
      OverviewCards.jsx
    /ui
      SearchBar.jsx
      Button.jsx
    /pagination
      Pagination.jsx
      ShowMoreButton.jsx
    MenuContainer.jsx
    HeaderLogoBadge.jsx
  /hooks
    useCoins.js
  /db
    indexeddb.js
  /pages/api
    coins.js
/styles
  global.css
  ...


components: شامل تمام UI components و کامپوننت‌های جدول و overview.

hooks/useCoins.js: مدیریت fetch، ذخیره و state محلی کوین‌ها.

db/indexeddb.js: مدیریت IndexedDB برای کش داده‌ها.

pages/api/coins.js: مسیر API برای دریافت اطلاعات از CoinMarketCap API.

styles: CSS global و CSS Modules.                                                                                                           

راه‌اندازی پروژه : 
1-npm install
2-npm run dev

