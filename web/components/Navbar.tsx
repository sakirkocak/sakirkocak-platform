"use client";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { auth, googleProvider } from "@/lib/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { user } = useAuth();

  const handleLogin = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

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
          {user ? (
            <div className="flex items-center gap-3">
              <div className="hidden md:block text-white/80">
                {user.displayName || user.email}
              </div>
              <Avatar className="h-8 w-8">
                <AvatarImage src={user.photoURL ?? undefined} alt={user.displayName ?? ""} />
                <AvatarFallback>{user.email?.[0]?.toUpperCase() ?? "U"}</AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                Çıkış
              </Button>
            </div>
          ) : (
            <Button size="sm" onClick={handleLogin}>Google ile Giriş</Button>
          )}
        </nav>
      </div>
    </header>
  );
}