import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        padding: "12px",
      }}
    >
      <Link href="/working">
        → Working navigation (next page will be scrolled to top)
      </Link>
      <Link href="/not-working">
        → Buggy navigation (next page will be scrolled to page content and skip
        layout)
      </Link>
    </div>
  );
}
