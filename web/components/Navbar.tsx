"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-white/10 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-white font-semibold tracking-tight">
          Bilim Sohbetleri
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/profile" className="text-white/80 hover:text-white">
            Profil
          </Link>
          <Link href="/leaderboard" className="text-white/80 hover:text-white">
            Leaderboard
          </Link>
          <Link href="/admin" className="text-white/80 hover:text-white">
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
}