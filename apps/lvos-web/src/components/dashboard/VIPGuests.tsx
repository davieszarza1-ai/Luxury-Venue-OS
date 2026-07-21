export default function VIPGuests(){

const guests = [
{
name:"Lorenzo Luxury VIP",
level:"PLATINUM",
visits:12,
status:"Active",
lastVisit:"21 Jul 2026"
},
{
name:"Alexander Royal",
level:"GOLD",
visits:8,
status:"Active",
lastVisit:"18 Jul 2026"
},
{
name:"Sophia Elite",
level:"VIP",
visits:5,
status:"Returning",
lastVisit:"15 Jul 2026"
}
]


return (

<section className="
mt-10
rounded-3xl
bg-neutral-900
border
border-neutral-800
p-8
">


<h3 className="
text-xl
font-semibold
">
VIP Guest Intelligence
</h3>


<p className="
text-neutral-500
mt-2
">
Premium guest relationship monitoring
</p>


<div className="
mt-8
space-y-4
">


{
guests.map((guest)=>(

<div
key={guest.name}
className="
rounded-2xl
border
border-neutral-800
p-5
flex
justify-between
items-center
"
>


<div>

<h4 className="
font-semibold
">
{guest.name}
</h4>


<p className="
text-sm
text-neutral-500
">
Last visit: {guest.lastVisit}
</p>


</div>


<div className="
text-right
">


<p className="
text-sm
text-yellow-400
">
{guest.level}
</p>


<p className="
text-xs
text-neutral-500
">
{guest.visits} visits
</p>


</div>


</div>

))

}


</div>


</section>

)

}