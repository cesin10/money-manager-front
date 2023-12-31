import { InsertActivityForm } from "@/components/dashboard";
import { ActivityBalance } from "@/components/dashboard/activity-balance";
import { ActivityTable } from "@/components/dashboard/activity-table";


export default function Dashboard() {
    return (
       <>

       <InsertActivityForm />
       <ActivityTable />
       <ActivityBalance />
       
       </>
    )
}