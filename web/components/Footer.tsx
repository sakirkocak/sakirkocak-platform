export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60">
      <div className="container mx-auto px-4 py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Bilim Sohbetleri. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}