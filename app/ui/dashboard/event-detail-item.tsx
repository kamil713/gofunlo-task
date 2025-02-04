import Image from "next/image";
import clsx from "clsx";

interface EventDetailItemProps {
    icon: string;
    text: string;
    iconSize?: number;
    className?: string;
}

const EventDetailItem: React.FC<EventDetailItemProps> = ({
                                                             icon,
                                                             text,
                                                             iconSize = 16,
                                                             className,
                                                         }) => {
    return (
        <div className={clsx("flex items-center gap-x-1", className)}>
            <Image src={icon} alt={text} width={iconSize} height={iconSize} draggable={false} />
            <p title={text} className="truncate text-xs md:text-sm text-gray-500">{text}</p>
        </div>
    );
};

export default EventDetailItem;
