"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import getPages from "./utils/getPages";

const MainLayout = ({ children }) => {
  const pathname = usePathname();

  const pages = getPages();

  return (
    <main
      style={{
        display: "flex",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minWidth: "250px",
          backgroundColor: "blue",
          height: "100%",
          gap: "4px",
        }}
      >
        {pages.map((page) => (
          <button
            key={page.id}
            style={{
              backgroundColor: pathname === page.path ? "yellow" : "white",
              cursor: "pointer",
            }}
          >
            <Link href={page.path}>{page.title}</Link>
          </button>
        ))}
      </div>
      <div style={{ flex: 1, background: "red" }}>{children}</div>
    </main>
  );
};

export default MainLayout;
