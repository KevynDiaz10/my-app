import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AppWindowIcon, CircleHelp, TrendingUp } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <div className="shadow-sm bg-background rounded-lg p-5 font-semibold">
      <div className="flex justify-center">
        <h1 className="p-5 flex">Frequently Asked Questions<CircleHelp className="pl-1"/></h1>
      </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="px-3 rounded-lg m-3">
          <AccordionTrigger>
            ¿Qué es este dashboard y para qué lo creé?
          </AccordionTrigger>
          <AccordionContent>
            <p className="font-normal">
              Este dashboard es una herramienta personalizada que diseñé para
              organizar mis conocimientos y habilidades en programación. Me
              permite realizar un seguimiento de mi progreso, acceder
              rápidamente a recursos importantes y visualizar mis estadísticas
              de aprendizaje.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="px-3 rounded-lg m-3">
          <AccordionTrigger>
            ¿Para qué niveles de experiencia está diseñada esta aplicación?
          </AccordionTrigger>
          <AccordionContent>
            <p className="font-normal">
              Nuestra aplicación es adecuada tanto para principiantes como para
              programadores con experiencia intermedia. Ofrecemos una amplia
              gama de recursos y desafíos para adaptarse a diferentes niveles de
              conocimiento.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="px-3 rounded-lg m-3">
          <AccordionTrigger>
            ¿Qué lenguajes de programación se enseñan en la aplicación?
          </AccordionTrigger>
          <AccordionContent>
            <p className="font-normal">
              Actualmente, nos enfocamos en enseñar los fundamentos de [menciona
              los lenguajes de programación que cubre tu app, por ejemplo:
              JavaScript, Python, React]. Sin embargo, estamos trabajando
              constantemente en expandir nuestra oferta.
            </p>
          </AccordionContent>
        </AccordionItem>
        <div className="flex justify-center ">
          <h1 className="p-5 flex">Sobre las Tecnologías Utilizadas<AppWindowIcon className="pl-1"/></h1>
        </div>
        <AccordionItem value="item-4" className="px-3 rounded-lg m-3">
          <AccordionTrigger>
            ¿Con qué tecnologías está construida esta aplicación?
          </AccordionTrigger>
          <AccordionContent>
            <p className="font-normal">
              Nuestra aplicación está desarrollada utilizando una combinación de
              tecnologías de vanguardia, incluyendo Next.js para el frontend,
              Clerk.js para la autenticación de usuarios, Shadcn para
              componentes de interfaz de usuario prediseñados, Tailwind CSS para
              un estilo personalizado y FullCalendar para la gestión de eventos
              y calendarios.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" className="px-3 rounded-lg m-3">
          <AccordionTrigger>
            ¿Qué ventajas ofrecen estas tecnologías a los usuarios?
          </AccordionTrigger>
          <AccordionContent>
            <p className="font-normal">
              Estas tecnologías nos permiten crear una aplicación rápida,
              escalable y visualmente atractiva. Next.js optimiza el
              rendimiento, Clerk.js facilita la gestión de usuarios, Shadcn y
              Tailwind CSS agilizan el desarrollo de la interfaz, y FullCalendar
              proporciona una forma intuitiva de organizar el contenido.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6" className="px-3 rounded-lg m-3">
          <AccordionTrigger>
            ¿Es necesario tener conocimientos previos sobre estas tecnologías
            para utilizar la aplicación?
          </AccordionTrigger>
          <AccordionContent>
            <p className="font-normal">
              No es necesario tener conocimientos profundos sobre estas
              tecnologías para utilizar nuestra aplicación. Los conceptos más
              complejos están encapsulados y presentados de forma clara y
              sencilla, para que puedas concentrarte en aprender a programar.
            </p>
          </AccordionContent>
        </AccordionItem>
        <div className="flex justify-center ">
          <h1 className="p-5 flex">Preguntas Adicionales<TrendingUp className="pl-1"/></h1>
        </div>
        <AccordionItem value="item-7" className="px-3 rounded-lg m-3">
          <AccordionTrigger>
            ¿Cuáles son mis próximos pasos para mejorar este dashboard?
          </AccordionTrigger>
          <AccordionContent>
            <p className="font-normal">
              Estoy planeando agregar nuevas funcionalidades como [menciona las
              nuevas características que deseas implementar, por ejemplo:
              integración con herramientas de version control, creación de un
              sistema de notas colaborativo, implementación de un chat para
              discutir dudas].
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8" className="px-3 rounded-lg m-3">
          <AccordionTrigger>
            ¿Qué consejos le darías a alguien que quiera crear su propio
            dashboard de aprendizaje?
          </AccordionTrigger>
          <AccordionContent>
            <p className="font-normal">
              Les recomendaría que empiecen por definir claramente sus objetivos
              de aprendizaje y que seleccionen las tecnologías que mejor se
              adapten a sus necesidades. Además, es importante ser constante y
              dedicar tiempo regularmente a actualizar y mejorar el dashboard.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
