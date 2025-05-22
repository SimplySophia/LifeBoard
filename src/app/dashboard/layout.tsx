import Navbar from "./Navbar/page";
import Sidebar from "../../components/Sidebar/page";

import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
    return ( 
        <div>
            <div>
                <Sidebar />
            </div>
            <div>
                <Navbar />
                {children}
            </div>
        </div>
     );
}
 
export default Layout;