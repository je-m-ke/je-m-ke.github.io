function App() {
  return (
    <main className="min-h-screen bg-surface p-6 text-ink">
      <h1 className="text-3xl font-bold">Token test</h1>
      <p className="mt-2">Four swatches below. The fifth box should be invisible.</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <div className="h-20 w-28 bg-surface-alt p-2 text-sm">surface-alt</div>
        <div className="h-20 w-28 bg-ink p-2 text-sm text-surface">ink</div>
        <div className="h-20 w-28 bg-brand p-2 text-sm text-surface">brand</div>
        <div className="h-20 w-28 border border-ink bg-surface p-2 text-sm text-brand">brand text</div>
        <div className="h-20 w-28 bg-red-500 p-2 text-sm">red-500</div>
      </div>

      <div className="mt-6 bg-ink p-4">
        <div className="h-16 w-40 bg-brand-bright p-2 text-sm text-surface">brand-bright on ink</div>
      </div>
    </main>
  )
}

export default App