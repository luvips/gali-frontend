import Link from "next/link";

interface PaginationLinksProps {
  movieId: number;
  page: number;
  totalPages: number;
}

const btnBase: React.CSSProperties = {
  minWidth: 36,
  height: 36,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 12,
  fontWeight: 900,
  border: "2px solid",
  textDecoration: "none",
};

function visiblePages(page: number, totalPages: number): number[] {
  const delta = 2;
  const range: number[] = [];
  for (let i = Math.max(1, page - delta); i <= Math.min(totalPages, page + delta); i++) {
    range.push(i);
  }
  return range;
}

export default function PaginationLinks({ movieId, page, totalPages }: PaginationLinksProps) {
  const base = `/movie/${movieId}/similar`;
  const pages = visiblePages(page, totalPages);

  return (
    <div className="flex items-center justify-center gap-1.5 mt-10">
      {page > 1 ? (
        <Link href={`${base}?page=${page - 1}`} style={{ ...btnBase, padding: "0 12px", borderColor: "#000", color: "#000" }}>←</Link>
      ) : (
        <span style={{ ...btnBase, padding: "0 12px", borderColor: "#ddd", color: "#ccc" }}>←</span>
      )}

      {page > 3 && (
        <>
          <Link href={`${base}?page=1`} style={{ ...btnBase, borderColor: "#ccc", color: "#777" }}>1</Link>
          {page > 4 && <span style={{ color: "#aaa", fontSize: 12, fontWeight: 700 }}>…</span>}
        </>
      )}

      {pages.map((p) => (
        <Link
          key={p}
          href={`${base}?page=${p}`}
          style={{
            ...btnBase,
            background: p === page ? "#ffbd3f" : "transparent",
            borderColor: p === page ? "#000" : "#ccc",
            color: p === page ? "#000" : "#777",
          }}
        >
          {p}
        </Link>
      ))}

      {page < totalPages - 2 && (
        <>
          {page < totalPages - 3 && <span style={{ color: "#aaa", fontSize: 12, fontWeight: 700 }}>…</span>}
          <Link href={`${base}?page=${totalPages}`} style={{ ...btnBase, borderColor: "#ccc", color: "#777" }}>{totalPages}</Link>
        </>
      )}

      {page < totalPages ? (
        <Link href={`${base}?page=${page + 1}`} style={{ ...btnBase, padding: "0 12px", borderColor: "#000", color: "#000" }}>→</Link>
      ) : (
        <span style={{ ...btnBase, padding: "0 12px", borderColor: "#ddd", color: "#ccc" }}>→</span>
      )}
    </div>
  );
}
