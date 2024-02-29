import { IconBadge } from "@/components/icon-badge";
import { LucideIcon } from "lucide-react";

interface InfoCardProps {
	label: string;
	numberOfItems: number;
	icon: LucideIcon;
	variant?: "default" | "success";
}
const InfoCard = ({
	variant,
	icon: Icon,
	numberOfItems,
	label,
}: InfoCardProps) => {
	return (
		<div className="border rounded-md flex items-center p-3 gap-x-2">
			<IconBadge variant={variant} icon={Icon} />
			<div>
				<p className="font-medium">{label}</p>

				<p className="text-gray-500 text-sm">
					{numberOfItems} {numberOfItems === 1 ? "Course" : "Courses"}
				</p>
			</div>
		</div>
	);
};

export default InfoCard;
