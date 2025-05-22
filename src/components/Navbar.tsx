import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import ThemeToggler from "@/components/ThemeToggler";


const Navbar = () => {
    return ( 
        <div className="flex justify-between px-5 py-2 dark:bg-slate-700 bg-opacity-80 backdrop-blur">
            <Link href="/" className="text-2xl font-bold">
               &lt;<span className="text-primary">Sophire👩🏽‍💻</span>/&gt;
            </Link>
            <div>
                <ThemeToggler />
                <DropdownMenu>
                    <DropdownMenuTrigger className="focus:outline-none">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                            <AvatarFallback className="text-black">SO</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Link href="/profile">Profile</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href="/auth">Logout</Link>
                        </DropdownMenuItem>
                   </DropdownMenuContent>
               </DropdownMenu>
            </div>
        </div>
     );
}
 
export default Navbar;