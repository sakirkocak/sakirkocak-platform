"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";

export default function ProfilePage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      toast.error("Önce giriş yapmalısınız.");
      router.replace("/");
    }
  }, [user, loading, router]);

  if (loading) {
    return <div className="text-white/70">Yükleniyor...</div>;
  }

  if (!user) return null;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Şakir Koçak ile Bilim Sohbetleri</h1>
      <div className="rounded-lg border border-white/10 p-4 min-h-[300px] text-white/70">
        Placeholder chat alanı. Yakında burada sohbet arayüzü olacak.
      </div>
    </div>
  );
}