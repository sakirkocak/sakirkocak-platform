'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="text-center py-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Şakir Koçak ile Bilim Sohbetleri</h1>
        <p className="mt-3 text-white/70">Merhaba! Bu, Next.js + shadcn/ui + Sonner ile hazırlanmış başlangıç arayüzüdür.</p>
        <div className="mt-6">
          <Button onClick={() => toast.success('Test bildirimi')}>Test bildirimi</Button>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Günün İlginç Bilgisi</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Şimdilik placeholder metin. Yakında gerçek içerik gelecek.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Bugünün Konusu</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Şimdilik placeholder metin. Gündemdeki konular burada listelenecek.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
