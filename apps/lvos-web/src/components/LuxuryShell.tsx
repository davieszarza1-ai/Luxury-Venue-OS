export default function LuxuryShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white flex">

      <aside className="w-72 bg-neutral-950 border-r border-neutral-800 p-8">

        <div className="mb-12">
          <h1 className="text-2xl font-bold tracking-[0.25em]">
            LVOS
          </h1>

          <p className="text-xs text-neutral-500 mt-2">
            Luxury Venue OS
          </p>
        </div>


        <nav className="space-y-5 text-sm">

          <div className="text-white">
            Dashboard
          </div>

          <div className="text-neutral-400">
            Orders
          </div>

          <div className="text-neutral-400">
            Guests
          </div>

          <div className="text-neutral-400">
            Payments
          </div>

          <div className="text-neutral-400">
            Analytics
          </div>

          <div className="text-neutral-400">
            Inventory
          </div>

          <div className="text-neutral-400">
            Settings
          </div>

        </nav>


        <div className="absolute bottom-8 text-xs text-neutral-600">
          Private Venue Intelligence
        </div>

      </aside>


      <main className="flex-1 p-10">

        <header className="flex justify-between items-center mb-10">

          <div>
            <h2 className="text-3xl font-semibold">
              Command Center
            </h2>

            <p className="text-neutral-500">
              Venue operational intelligence
            </p>
          </div>


          <div className="border border-neutral-800 rounded-full px-5 py-2 text-sm">
            ● Venue Online
          </div>

        </header>


        {children}

      </main>

    </div>
  );
}