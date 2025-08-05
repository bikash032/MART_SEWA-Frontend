import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
 export const  AccordinaoUser=()=>{
    return(<>
     <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger><div className="font-bold text-xl">Category</div></AccordionTrigger>
      <AccordionContent>
        <li>
        <select name="" id="">hello</select>
        </li>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
    </>)
 }
 