import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    
  } from "@/components/ui/command";
import Link  from 'next/link';
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
            <CommandInput placeholder="Type a command or search..." />
                <CommandList>  
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        <CommandItem>
                            <LayoutDashboard className="mr-2 w-4 h-4" size={16} />
                            <Link href="/dashboard">Dashboard</Link>
                        </CommandItem>
                        <CommandItem>
                        <GraduationCap className="mr-2 w-4 h-4" size={16} />
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
                    </CommandGroup>
                </CommandList>
        </Command>

     );
}
 
export default Sidebar;