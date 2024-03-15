import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "./ui/separator";

export function CollapsibleItem() {
	return (
		<Accordion type="single" collapsible className="w-full">
			<AccordionItem value="item-1">
				<AccordionTrigger>Category</AccordionTrigger>
				<Separator />
				<AccordionContent>
					Computer Science Engineering Filming
				</AccordionContent>
				<AccordionContent>Engineering Filming</AccordionContent>
				<AccordionContent>Filming</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
