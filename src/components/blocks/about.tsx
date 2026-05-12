import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const About = () => {
  return (
    <section className="container mt-10 flex max-w-5xl flex-col-reverse gap-8 md:mt-14 md:gap-14 lg:mt-20 lg:flex-row lg:items-end">
      {/* Images Left - Text Right */}
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <ImageSection
          images={[
            { src: "/about/1.webp", alt: "Team collaboration" },
            { src: "/about/2.webp", alt: "Team workspace" },
          ]}
          className="xl:-translate-x-10"
        />

        <TextSection
          title="El equipo"
          paragraphs={[
            "Comenzamos a construir Rizor ERP en 2019 y lanzamos en 2022. Cada módulo ha sido diseñado desde cero — sin deuda técnica ni sistemas heredados. Estamos construidos para impulsar la innovación en gestión empresarial para los próximos cien años.",
            "Somos 100% propiedad del equipo fundador, rentables, y mantenemos un equipo ágil. Estamos enfocados en ofrecer la mejor solución ERP para empresas en crecimiento.",
            "Si te interesa construir el futuro de la gestión empresarial, revisa nuestras vacantes a continuación.",
          ]}
          ctaButton={{
            href: "/careers",
            text: "Ver vacantes",
          }}
        />
      </div>

      {/* Text Left - Images Right */}
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <TextSection
          paragraphs={[
            "En Rizor, estamos dedicados a transformar la forma en que las empresas gestionan sus recursos, finanzas, inventario y operaciones. Nuestra misión es proporcionar a nuestros clientes una ventaja competitiva frente a retrasos, ineficiencias y desorganización a través de información procesable y una integración perfecta entre departamentos.",
            "Somos obsesivos con nuestros clientes — invertimos tiempo en entender cada aspecto de tu operación para ayudarte a operar mejor que nunca. Estamos juntos en esto porque tu éxito es nuestro éxito. En nuestra historia como empresa, nunca hemos perdido un cliente, porque cuando tu negocio crece, nosotros crecemos contigo.",
          ]}
        />
        <ImageSection
          images={[
            { src: "/about/3.webp", alt: "Modern workspace" },
            { src: "/about/4.webp", alt: "Team collaboration" },
          ]}
          className="hidden lg:flex xl:translate-x-10"
        />
      </div>
    </section>
  );
};

export default About;

interface ImageSectionProps {
  images: { src: string; alt: string }[];
  className?: string;
}

export function ImageSection({ images, className }: ImageSectionProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-[2/1.5] overflow-hidden rounded-2xl"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

interface TextSectionProps {
  title?: string;
  paragraphs: string[];
  ctaButton?: {
    href: string;
    text: string;
  };
}

export function TextSection({
  title,
  paragraphs,
  ctaButton,
}: TextSectionProps) {
  return (
    <section className="flex-1 space-y-4 text-lg md:space-y-6">
      {title && <h2 className="text-foreground text-4xl">{title}</h2>}
      <div className="text-muted-foreground max-w-xl space-y-6">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {ctaButton && (
        <div className="mt-8">
          <Link href={ctaButton.href}>
            <Button size="lg">{ctaButton.text}</Button>
          </Link>
        </div>
      )}
    </section>
  );
}
