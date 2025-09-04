export default function DashboardPage() {
  return (
    <div className="p-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-sm font-medium text-muted-foreground">Total Campaigns</h3>
            <p className="mt-2 text-3xl font-semibold">12</p>
            <p className="mt-1 text-sm text-muted-foreground">+2 from last month</p>
          </div>
          
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-sm font-medium text-muted-foreground">Active Ads</h3>
            <p className="mt-2 text-3xl font-semibold">24</p>
            <p className="mt-1 text-sm text-muted-foreground">+5 from last week</p>
          </div>
          
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-sm font-medium text-muted-foreground">Total Spend</h3>
            <p className="mt-2 text-3xl font-semibold">$2,456</p>
            <p className="mt-1 text-sm text-muted-foreground">This month</p>
          </div>
          
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-sm font-medium text-muted-foreground">Conversion Rate</h3>
            <p className="mt-2 text-3xl font-semibold">3.2%</p>
            <p className="mt-1 text-sm text-muted-foreground">+0.5% from last month</p>
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Recent Campaigns</h2>
          <div className="rounded-lg border border-border bg-card">
            <table className="w-full">
              <thead className="border-b border-border">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">Campaign</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">Budget</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">Performance</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-6 py-4 text-sm">Summer Sale 2024</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">$500/day</td>
                  <td className="px-6 py-4 text-sm">2.8% CTR</td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-primary hover:underline">View</button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm">Product Launch</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">$1,000/day</td>
                  <td className="px-6 py-4 text-sm">3.5% CTR</td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-primary hover:underline">View</button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm">Brand Awareness</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                      Paused
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">$250/day</td>
                  <td className="px-6 py-4 text-sm">1.9% CTR</td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-primary hover:underline">View</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
  )
}