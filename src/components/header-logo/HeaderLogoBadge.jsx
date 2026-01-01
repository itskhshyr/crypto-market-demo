import Image from "next/image";

export default function HeaderLogoBadge() {
  return (
    <div className="d-flex align-items-center">
      <div>
        <Image
          src="/images/icons/logo.svg"
          width={64}
          height={64}
          alt="logo of wesite"
        />
      </div>
      <div className="ms-3">
        <h5 className="text-sm fw-semibold">Crypto Market Demo </h5>
        <span className="text-xs d-none d-md-inline">
          (Test & Developed By Khashayar Ramezani -
          <a href="https://itskhshyr.github.io/">portfolio</a> )
        </span>
      </div>
    </div>
  );
}
