export default function Reservations(){

const reservations = [
{
name:"Marco Rossi",
time:"20:00",
guests:4,
status:"CONFIRMED",
table:"VIP-01"
},
{
name:"Isabella Luxury",
time:"21:30",
guests:6,
status:"PENDING",
table:"VIP-03"
},
{
name:"Daniel Royal",
time:"22:00",
guests:2,
status:"CONFIRMED",
table:"TABLE-08"
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
Reservations Intelligence
</h3>


<p className="
text-neutral-500
mt-2
">
Real time reservation operations
</p>



<div className="
mt-8
space-y-4
">


{
reservations.map((reservation)=>(


<div
key={reservation.name}
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
{reservation.name}
</h4>


<p className="
text-sm
text-neutral-500
">
{reservation.time} · {reservation.guests} guests
</p>


</div>



<div className="
text-right
">


<p className="
text-sm
text-yellow-400
">
{reservation.status}
</p>


<p className="
text-xs
text-neutral-500
">
{reservation.table}
</p>


</div>


</div>


))

}


</div>


</section>

)

}