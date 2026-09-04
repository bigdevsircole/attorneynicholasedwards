import { caseResults } from "@/lib/content";

export default function CaseResults() {
  return (
    <section id="results" className="bg-ink-800 py-28 lg:py-36">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <p className="mb-5 text-[13px] uppercase tracking-[0.2em] text-gold-light">
          Case results
        </p>
        <h2 className="max-w-xl font-display text-4xl font-medium leading-tight text-parchment sm:text-[2.75rem]">
          A recent docket of outcomes.
        </h2>
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-parchment/55">
          Past results don&apos;t guarantee a future outcome — every case
          turns on its own facts — but they reflect how this firm prepares.
        </p>

        <div className="mt-16 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-line-dark text-[12px] uppercase tracking-[0.14em] text-parchment/40">
                <th className="pb-4 pr-4 font-normal">Docket</th>
                <th className="pb-4 pr-4 font-normal">Matter</th>
                <th className="pb-4 pr-4 font-normal">Outcome</th>
                <th className="pb-4 font-normal">Notes</th>
              </tr>
            </thead>
            <tbody>
              {caseResults.map((result) => (
                <tr
                  key={result.docket}
                  className="border-b border-line-dark/60 align-top"
                >
                  <td className="tabular py-6 pr-4 text-sm text-parchment/45">
                    {result.docket}
                  </td>
                  <td className="py-6 pr-4 font-display text-lg text-parchment">
                    {result.type}
                  </td>
                  <td className="py-6 pr-4 text-sm font-medium uppercase tracking-[0.06em] text-gold-light">
                    {result.outcome}
                  </td>
                  <td className="max-w-sm py-6 text-sm leading-relaxed text-parchment/55">
                    {result.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


      </div>
    </section>
  );
}
