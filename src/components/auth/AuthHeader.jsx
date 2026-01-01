'use client';

export default function AuthHeader({ title, content }) {
  return (
    <div className="d-flex flex-column">
      <div className=" text-xxl fw-semibold ">{title}</div>
      <div className="text-muted">{content}</div>
    </div>
  );
}
