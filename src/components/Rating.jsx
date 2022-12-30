import {StarIcon} from "@heroicons/react/24/solid/index.js";
import {StarIcon as StarIconOutline} from "@heroicons/react/24/outline/index.js";

export default function Rating({rating}) {
    return (
        <span>
            {[...Array(rating)].map((_, i) => (
                <StarIcon key={i} width={20} height={20} className="text-warning"/>
            ))}
            {[...Array(5 - rating)].map((_, i) => (
                <StarIconOutline key={i} width={20} height={20} className="text-warning"/>
            ))}
        </span>
    );
}