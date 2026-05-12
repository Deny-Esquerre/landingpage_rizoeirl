import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Soporte",
    questions: [
      {
        question: "¿Cómo actualizo mi cuenta sin romper todo?",
        answer:
          "Puedes actualizar tu cuenta desde el panel de configuración. Todos los cambios se guardan automáticamente y no afectarán tus datos existentes. Si tienes dudas, nuestro equipo de soporte te guiará en el proceso.",
      },
      {
        question: "¿El soporte es gratuito o tengo que googlearlo todo?",
        answer:
          "El soporte básico es gratuito para todos los usuarios. Nuestro equipo responde vía email y chat en horario laboral. Los planes Startup y Empresarial incluyen soporte prioritario con tiempos de respuesta garantizados.",
      },
      {
        question: "¿Van a ser reemplazados por la IA?",
        answer:
          "La IA está aquí para ayudarte, no para reemplazarte. Usamos inteligencia artificial para automatizar tareas repetitivas y darte insights, pero las decisiones importantes siempre las tomas tú. Piensa en la IA como tu asistente, no tu reemplazo.",
      },
    ],
  },
  {
    title: "Tu cuenta",
    questions: [
      {
        question: "¿Cómo configuro mi empresa en el sistema?",
        answer:
          "Al registrarte, el asistente de configuración te guiará paso a paso: ingresa el RUC, datos de tu empresa, y podrás invitar a tu equipo inmediatamente. El proceso completo toma menos de 5 minutos.",
      },
      {
        question: "¿Puedo invitar a mi equipo sin costo adicional?",
        answer:
          "Sí, en el plan Gratis puedes invitar miembros ilimitados. Los únicos límites son en la cantidad de equipos (2) y transacciones (500). Los planes pagos eliminan estas restricciones.",
      },
    ],
  },
  {
    title: "Otras preguntas",
    questions: [
      {
        question: "¿Mis datos están seguros?",
        answer:
          "Absolutamente. Usamos cifrado de extremo a extremo, servidores en la nube con certificaciones de seguridad y realizamos copias de seguridad diarias. Tus datos son tuyos y no los compartimos con terceros.",
      },
      {
        question: "¿Funciona en mi celular o necesito una computadora?",
        answer:
          "Rizor funciona completamente en el navegador de tu celular, tablet o computadora. No necesitas instalar nada. La interfaz se adapta automáticamente al tamaño de tu pantalla.",
      },
    ],
  },
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
}) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>
          <div className="space-y-4">
            {headerTag === "h1" ? (
              <h1 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                ¿Preguntas?
              </h1>
            ) : (
              <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                ¿Preguntas?
              </h2>
            )}
            <p className="text-muted-foreground max-w-md leading-snug lg:mx-auto">
              Si no encuentras lo que buscas,{" "}
              <Link href="/contact" className="underline underline-offset-4">
                contáctanos
              </Link>
              .
            </p>
          </div>

          <div className="grid gap-6 text-start">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="">
                <h3 className="text-muted-foreground border-b py-4">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${categoryIndex}-${i}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
