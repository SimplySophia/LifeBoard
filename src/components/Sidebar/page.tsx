import {
    Command,
    CommandItem,
    
    
  } from "@/components/ui/command";
import Link  from 'next/link';
import Image from "next/image";
import { 
    LayoutDashboard, 
    GraduationCap, 
    Brain,
    GoalIcon,
} from "lucide-react";

import ColorSwitcher from "@/components/ColorSwitcher";

const Sidebar = () => {
    return ( 
        <Command className="bg-secondary shadow-[0_0_10px_hsl(var(--color-primary))] w-60 md:w-300px h-[100vh] rounded-none mt-5">
            <div className="flex flex-col items-center justify-center bg-secondary shadow-md rounded-2xl p-2 w-50">
                <Image 
                    src="/images/avatar2.png"
                    alt="avatar"
                    width={50}
                    height={50}
                    className="rounded-full shadow-md mt-4"
                />
                <h2 className="text-xl font-semibold text-slate-200 text-left">Sophia Vincent</h2>
            </div>
            <div className="flex flex-col gap-5 mt-4 font-bold">
                <CommandItem>
                    <LayoutDashboard className="mr-2 w-10 h-10" size={16} />
                    <Link href="/">Dashboard</Link>
                </CommandItem>
                <CommandItem>
                    <GraduationCap className="mr-2  w-4 h-4 font-bold" size={16} />
                    <Link href="/academics">Academics & Experience</Link>
                </CommandItem>
                <CommandItem>
                    <Brain className="mr-2 w-4 h-4" size={16} />
                    <Link href="/skills">Skills</Link>
                </CommandItem>
                <CommandItem>
                    <GoalIcon className="mr-2 w-4 h-4" size={16} />
                    <Link href="/goals">Goals</Link>
                </CommandItem>
                <ColorSwitcher />
            </div>
                
        </Command>

     );
}
 
export default Sidebar;