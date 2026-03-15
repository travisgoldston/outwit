const services = [
  {
    title: "SEO & Content Strategy",
    description: "Build content systems that generate consistent traffic.",
  },
  {
    title: "Conversion Funnels",
    description: "Turn visitors into leads and customers.",
  },
  {
    title: "Growth Strategy",
    description: "Identify the highest leverage opportunities for growth.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-cream px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-deep-gray sm:text-4xl">
          How we help companies grow.
        </h2>
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-strategy-navy/10 bg-white p-8 shadow-sm transition-all duration-300 hover:border-fox-orange/20 hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-strategy-navy">
                {service.title}
              </h3>
              <p className="mt-4 leading-relaxed text-deep-gray/85">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
