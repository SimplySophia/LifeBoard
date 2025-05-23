import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

interface BackButtonProps {
    text: string;
    link: string;
}

const BackButton = ({ text, link }: BackButtonProps) => {
    return (
        <Link 
            href={link} 
            className="flex items-center py-2 px-4 hover:underline font-bold mb-5">
            <ArrowLeftCircle className="mr-2" size={18} />
            {text}
        </Link>
    )
}

export default BackButton;