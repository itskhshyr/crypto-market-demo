"use client";
import useCoins from "@/hooks/useCoins";
import HeaderLogoBadge from "../header-logo/HeaderLogoBadge";
import Button from "../ui/Buttons/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HeaderLogoSkeleton from "../header-logo/HeaderLogoSkeleton";

export default function Header() {
  const { loading } = useCoins();
  const pathname = usePathname();
  if (pathname === "/login") return <></>;
  return (
    <header className="p-2 bg-light rounded-bottom-4 d-flex justify-content-between align-items-center">
      <div>{loading ? <HeaderLogoSkeleton /> : <HeaderLogoBadge />}</div>
      <div>
        {loading ? (
          " "
        ) : (
          <Link href="/login">
            <Button content="Login / Sign Up" type="text" />
          </Link>
        )}
      </div>
    </header>
  );
}
