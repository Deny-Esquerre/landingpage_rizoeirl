import { DashedLine } from "@/components/dashed-line";

const stats = [
  {
    value: "500+",
    label: "Empresas",
  },
  {
    value: "50K",
    label: "Usuarios activos",
  },
  {
    value: "99.9%",
    label: "Uptime",
  },
  {
    value: "24/7",
    label: "Soporte",
  },
];

export function AboutHero() {
  return (
    <section className="">
      <div className="container flex max-w-5xl flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24 xl:gap-24">
        <div className="flex-[1.5]">
          <h1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Potenciando tu negocio con ERP
          </h1>

          <p className="text-muted-foreground mt-5 text-2xl md:text-3xl lg:text-4xl">
            Rizor transforma la gestión empresarial con tecnología ERP de clase mundial.
          </p>

          <p className="text-muted-foreground mt-8 hidden max-w-lg space-y-6 text-lg text-balance md:block lg:mt-12">
            En Rizor, estamos dedicados a transformar la forma en que las empresas planifican,
            ejecutan y controlan sus recursos. Nuestra misión es proporcionar a nuestros
            clientes una ventaja competitiva frente a la ineficiencia, la desorganización
            y la falta de visibilidad a través de un sistema ERP integral y fácil de usar.
            <br />
            <br />
            Somos obsesivos con nuestros clientes — invertimos tiempo en entender cada aspecto
            de tu operación para ayudarte a operar mejor que nunca. Estamos juntos en esto
            porque tu éxito es nuestro éxito. En nuestra historia como empresa, nunca hemos
            perdido un cliente, porque cuando tu negocio crece, nosotros crecemos contigo.
          </p>
        </div>

        <div
          className={`relative flex flex-1 flex-col justify-center gap-3 pt-10 lg:pt-0 lg:pl-10`}
        >
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <div className="font-display text-4xl tracking-wide md:text-5xl">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
