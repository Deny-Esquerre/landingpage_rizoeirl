"use client";

import { useState } from "react";

import Image from "next/image";

import {
  ArrowRight,
  BarChart3,
  Landmark,
  Package,
  Users,
  X,
} from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

const features = [
  {
    title: "Gestión de planillas y empleados",
    description: "Control de asistencia, deducciones y planillas en un solo lugar.",
    icon: Users,
  },
  {
    title: "Inventario centralizado",
    description: "Coordina stock, entradas y salidas entre almacenes sin fricción.",
    icon: Package,
  },
  {
    title: "Cierres financieros",
    description: "Desglosa periodos contables en fases: emisión, revisión, cierre.",
    icon: Landmark,
  },
  {
    title: "Dashboard financiero en tiempo real",
    description: "Visualiza ingresos, egresos y rentabilidad con gráficos actualizados.",
    icon: BarChart3,
  },
];

export const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          <h1 className="text-foreground max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl">
            Rizor E.I.R.L — ERP para empresas peruanas
          </h1>

          <p className="text-muted-foreground text-1xl mt-5 md:text-3xl">
            Controla personal, inventario y finanzas en un solo sistema. Hecho
            para la realidad PYME del Perú.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <Button asChild>
              <a href="https://rizor-e-i-r-l.vercel.app/login">Iniciar sesión</a>
            </Button>
            <Button
              variant="outline"
              className="from-background h-auto gap-2 bg-linear-to-r to-transparent shadow-md"
              onClick={() => setOpen(true)}
            >
              Conocer más
              <ArrowRight className="stroke-3" />
            </Button>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:pl-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                <Icon className="text-foreground mt-1 size-4 shrink-0 lg:size-5" />
                <div>
                  <h2 className="font-text text-foreground font-semibold">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground max-w-76 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <div className="flex items-start justify-between">
          <DialogTitle>¿Qué es Rizor E.I.R.L?</DialogTitle>
          <button
            onClick={() => setOpen(false)}
            className="text-muted-foreground hover:text-foreground -mr-1 -mt-1 rounded-sm p-1 transition-colors"
          >
            <X className="size-5" />
          </button>
        </div>
        <DialogDescription>
          Rizor E.I.R.L es el sistema de gestión todo-en-uno que reemplaza tus
          hojas de cálculo. Centraliza personal, inventario y finanzas en un
          solo lugar con control de asistencias, planillas automáticas, stock en
          tiempo real y dashboard financiero. Hecho para la PYME peruana, sin
          complicaciones.
        </DialogDescription>
      </Dialog>

      <div className="mt-12 max-lg:ml-6 md:mt-20 lg:container lg:mt-24">
        <div className="relative w-full">
          <Image
            src="/favicon/pantalla principal clara.png"
            alt="hero"
            width={1570}
            height={793}
            className="w-full h-auto rounded-2xl shadow-lg max-lg:rounded-tr-none"
          />
        </div>
      </div>
    </section>
  );
};
