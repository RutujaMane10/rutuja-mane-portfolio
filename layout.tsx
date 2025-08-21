// app/layout.tsx
import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <h1 className="logo">Rutuja Mane</h1>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/education">Education</Link>
            <Link href="/achievements">Achievements</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>

        <main>{children}</main>

        <footer className="footer">
          © {new Date().getFullYear()} Rutuja Mane | Built with Next.js
        </footer>
      </body>
    </html>
  );
}
