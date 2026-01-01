'use client';

export default function ShowMoreButton({ onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-4 py-2 text-sm show-more-button"
    >
      Show More
    </button>
  );
}