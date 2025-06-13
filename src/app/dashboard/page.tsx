// coming from middleware step - dashboard only visible to signed-in users

import { Logout } from "@/components/ui/logout";

export default function Dashboard(){
    return(

        <div className="flex flex-col items-center justify-center h-screen">
            <Logout/>
        </div>
    );
}