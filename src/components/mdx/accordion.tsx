import { Accordion as AccordionPrimitive } from "@kobalte/core/accordion";
import { createContext, type JSX, useContext } from "solid-js";

const DebugContext = createContext();

export function Accordions(props: { children: JSX.Element }) {
  return (
    <DebugContext.Provider value={{ text: "root" }}>
      <AccordionPrimitive>{props.children}</AccordionPrimitive>;
    </DebugContext.Provider>
  );
}

export function Accordion(props: { title: string; children: JSX.Element }) {
  const context = useContext(DebugContext);
  console.log(context);
  return (
    <AccordionPrimitive>
      <AccordionPrimitive.Item>
        <AccordionPrimitive.Header>
          <AccordionPrimitive.Trigger>{props.title}</AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
        <AccordionPrimitive.Content>{props.children}</AccordionPrimitive.Content>
      </AccordionPrimitive.Item>
    </AccordionPrimitive>
  );
}
