import Link from "next/link";

export default function Layout({ children }: any) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div
        style={{
          height: "1200px",
          width: "100%",
          background: "slateblue",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3>Layout w/ Page below</h3>

        <Link href="/">Back to home</Link>
      </div>

      {children}
    </div>
  );
}
