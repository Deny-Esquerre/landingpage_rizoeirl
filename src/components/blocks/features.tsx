import Image from "next/image";
import Link from "next/link";

import { ChevronRight } from "lucide-react";

import { DashedLine } from "../dashed-line";

import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    title: "Manejo y control de los contratos de tu personal, con alertas de vencimiento y renovación automática.",
    image: "/favicon/1 de 3.png",
  },
  {
    title: "Emite facturas, boletas y comprobantes electrónicos al instante. Todo sincronizado con SUNAT.",
    image: "/favicon/2 de 3.png",
  },
  {
    title: "Controla entradas, salidas y stock en tiempo real. evita desabastecimientos y pérdidas.",
    image: "/favicon/3 de 3.png",
  },
];

export const Features = () => {
  return (
    <section id="feature-modern-teams" className="pb-28 lg:pb-32">
      <div className="container">
        {/* Top dashed line with text */}
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            MEASURE TWICE. CUT ONCE.
          </span>
        </div>

        {/* Content */}
        <div className="mx-auto mt-10 grid max-w-4xl items-center gap-3 md:gap-0 lg:mt-24 lg:grid-cols-2">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Hecho para equipos de producto modernos
          </h2>
          <p className="text-muted-foreground leading-snug">
            Rizor E.I.R.L está construido sobre los hábitos que hacen exitosos a
            los mejores equipos: mantenerse enfocados, moverse rápido y apuntar
            siempre a un trabajo de alta calidad.
          </p>
        </div>

        {/* Features Card */}
        <Card className="mt-8 rounded-3xl md:mt-12 lg:mt-20">
          <CardContent className="flex p-0 max-md:flex-col">
            {items.map((item, i) => (
              <div key={i} className="flex flex-1 max-md:flex-col">
                <div className="flex-1 p-4 pe-0! md:p-6">
                  <div className="relative aspect-[1.28/1] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`${item.title} interface`}
                      fill
                      className="object-cover object-left-top ps-4 pt-2"
                    />
                    <div className="from-background absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent" />
                  </div>

                  <Link
                    href="#"
                    className={
                      "group flex items-center justify-between gap-4 pe-4 pt-1 md:pt-2"
                    }
                  >
                    <div className="space-y-3 pe-4 pt-1 md:pt-2">
                    <h3 className="font-display text-2xl leading-tight font-bold tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  <div className="shrink-0 rounded-full border p-2">
                    <ChevronRight className="size-6 transition-transform group-hover:translate-x-1 lg:size-9" />
                  </div>
                  </Link>
                </div>
                {i < items.length - 1 && (
                  <div className="relative hidden md:block">
                    <DashedLine orientation="vertical" />
                  </div>
                )}
                {i < items.length - 1 && (
                  <div className="relative block md:hidden">
                    <DashedLine orientation="horizontal" />
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
