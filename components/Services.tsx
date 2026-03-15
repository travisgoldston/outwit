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
    <section id="services" className="border-t border-white/10 bg-vibe-bg px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          How we help companies grow.
        </h2>
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]"
            >
              <h3 className="text-xl font-bold text-white">
                {service.title}
              </h3>
              <p className="mt-4 leading-relaxed text-white/75">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
