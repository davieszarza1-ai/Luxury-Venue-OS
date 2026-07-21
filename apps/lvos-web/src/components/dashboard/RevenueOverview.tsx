export default function RevenueOverview() {
  return (
    <section className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur">
      <p className="text-sm uppercase tracking-widest text-white/50">
        Revenue Intelligence
      </p>

      <h2 className="mt-3 text-4xl font-semibold text-white">
        €1,500
      </h2>

      <p className="mt-2 text-white/60">
        Live venue performance
      </p>

      <div className="mt-6 flex justify-between border-t border-white/10 pt-4">
        <span className="text-white/60">
          Growth today
        </span>

        <span className="text-emerald-400 font-semibold">
          +12.4%
        </span>
      </div>

      <p className="mt-4 text-sm text-white/50">
        4 completed transactions
      </p>
    </section>
  );
}