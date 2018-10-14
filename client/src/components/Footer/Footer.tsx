import * as React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white p-4 text-center">
      Copyrights &copy; {new Date().getFullYear()} Sewing Pattern Market
    </footer>
  );
}
