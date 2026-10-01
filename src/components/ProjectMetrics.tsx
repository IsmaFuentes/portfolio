type ProjectMetric = {
  value: string;
  label: string;
};

function ProjectMetrics({ items }: { items: ProjectMetric[] }) {
  return (
    <section aria-label="Datos destacados del proyecto" className="mb-8">
      <dl className="grid grid-cols-3 divide-x divide-white/10 border-y border-white/10">
        {items.map((item) => (
          <div
            key={item.label}
            className="min-w-0 px-2 py-4 text-center sm:px-4"
          >
            <dd className="text-lg font-semibold text-white md:text-2xl">
              {item.value}
            </dd>
            <dt className="mt-1 text-[11px] leading-snug text-zinc-500 sm:text-xs md:text-sm">
              {item.label}
            </dt>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default ProjectMetrics;
