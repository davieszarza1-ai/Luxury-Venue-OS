import UserRoles from "@/components/auth/UserRoles";

import CommandShell from "@/components/command/CommandShell";

import LuxuryCard from "@/components/luxury/LuxuryCard";

import RevenueOverview from "@/components/dashboard/RevenueOverview";
import LiveOperations from "@/components/dashboard/LiveOperations";
import VIPGuests from "@/components/dashboard/VIPGuests";
import Reservations from "@/components/dashboard/Reservations";
import FloorManagement from "@/components/dashboard/FloorManagement";
import InventoryManagement from "@/components/dashboard/InventoryManagement";
import PaymentsManagement from "@/components/dashboard/PaymentsManagement";
import AnalyticsManagement from "@/components/dashboard/AnalyticsManagement";
import ExecutiveDashboard from "@/components/dashboard/ExecutiveDashboard";

import LoginPanel from "@/components/auth/LoginPanel";

import { getAnalytics } from "@/lib/api";


export default async function Home(){


const data = await getAnalytics();


const overview = data.overview;


const product =
data.products?.[0]?.product
||
"No data";


const guest =
data.guests?.[0]?.guest
||
"No data";



return (

<UserRoles />

<CommandShell>


<LoginPanel />



<section
className="
grid
grid-cols-1
md:grid-cols-4
gap-6
mt-10
"
>


<LuxuryCard

title="Revenue Today"

value={`EUR ${overview.revenue}`}

subtitle="Live revenue intelligence"

/>



<LuxuryCard

title="Transactions"

value={`${overview.transactions}`}

subtitle="Completed payments"

/>



<LuxuryCard

title="Signature Product"

value={product}

subtitle="Top performing item"

/>



<LuxuryCard

title="VIP Guest"

value={guest}

subtitle="Highest value guest"

/>



</section>



<section className="
mt-10
space-y-10
">


<ExecutiveDashboard />


<RevenueOverview />


<LiveOperations />


<VIPGuests />


<Reservations />


<FloorManagement />


<InventoryManagement />


<PaymentsManagement />


<AnalyticsManagement />


</section>



</CommandShell>

)

}