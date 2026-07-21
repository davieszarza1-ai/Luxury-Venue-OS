export default function FloorManagement(){

const tables = [

{
name:"VIP Table 01",
zone:"VIP Lounge",
guests:6,
status:"OCCUPIED"
},

{
name:"Table 04",
zone:"Main Floor",
guests:0,
status:"AVAILABLE"
},

{
name:"Table 08",
zone:"Main Floor",
guests:4,
status:"SERVING"
},

{
name:"Private Room",
zone:"Exclusive",
guests:8,
status:"RESERVED"
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


<div className="
flex
justify-between
items-center
">


<div>

<h3 className="
text-xl
font-semibold
">
Floor Management Intelligence
</h3>


<p className="
text-neutral-500
mt-2
">
Real time venue floor operations
</p>

</div>


<div className="
text-sm
text-neutral-400
">
Capacity 18 / 120
</div>


</div>



<div className="
mt-8
grid
grid-cols-1
md:grid-cols-2
gap-4
">


{
tables.map((table)=>(


<div
key={table.name}
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
{table.name}
</h4>


<p className="
text-sm
text-neutral-500
">
{table.zone}
</p>


<p className="
text-xs
text-neutral-600
mt-1
">
Guests: {table.guests}
</p>


</div>



<div className="
text-right
">


<p className={`
text-sm
${
table.status === "AVAILABLE"
?
"text-green-400"
:
table.status === "OCCUPIED"
?
"text-red-400"
:
"text-yellow-400"
}
`}>
{table.status}
</p>


</div>


</div>


))

}


</div>


</section>

)

}