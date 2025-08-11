export default function LeaderboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Leaderboard</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="text-white/70">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Kullanıcı</th>
              <th className="px-4 py-2">Puan</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            <tr>
              <td className="px-4 py-2">1</td>
              <td className="px-4 py-2">Placeholder</td>
              <td className="px-4 py-2">0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}