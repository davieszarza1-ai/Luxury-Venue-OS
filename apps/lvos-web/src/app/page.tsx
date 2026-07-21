import CommandShell from "@/components/command/CommandShell";
import LuxuryCard from "@/components/luxury/LuxuryCard";

import RevenueOverview from "@/components/dashboard/RevenueOverview";
import LiveOperations from "@/components/dashboard/LiveOperations";
import VIPGuests from "@/components/dashboard/VIPGuests";
import Reservations from "@/components/dashboard/Reservations";

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

<CommandShell>


<section className="
grid
grid-cols-1
md:grid-cols-4
gap-6
">


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
grid
grid-cols-1
md:grid-cols-3
gap-6
">


<div className="
rounded-3xl
bg-neutral-900
border
border-neutral-800
p-8
">

<h3 className="text-xl">
Revenue Intelligence
</h3>

<p className="
text-neutral-500
mt-3
">
Live financial performance monitoring.
</p>

</div>



<div className="
rounded-3xl
bg-neutral-900
border
border-neutral-800
p-8
">

<h3 className="text-xl">
VIP Experience
</h3>

<p className="
text-neutral-500
mt-3
">
Premium guest relationship intelligence.
</p>

</div>



<div className="
rounded-3xl
bg-neutral-900
border
border-neutral-800
p-8
">

<h3 className="text-xl">
Operational Flow
</h3>

<p className="
text-neutral-500
mt-3
">
Real time venue operations.
</p>

</div>


</section>



<RevenueOverview />

<LiveOperations />

<VIPGuests />

<Reservations />


</CommandShell>

)

}