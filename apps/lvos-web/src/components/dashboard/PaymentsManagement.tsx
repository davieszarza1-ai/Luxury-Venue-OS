export default function PaymentsManagement(){

const payments = [

{
type:"VIP Reservation",
guest:"Lorenzo Luxury VIP",
amount:"EUR 4500",
status:"COMPLETED"
},

{
type:"Premium Table Service",
guest:"Alexander Club",
amount:"EUR 1800",
status:"COMPLETED"
},

{
type:"Private Event Deposit",
guest:"Royal Group",
amount:"EUR 7500",
status:"PENDING"
},

{
type:"Luxury Beverage Package",
guest:"Elite Member",
amount:"EUR 950",
status:"FAILED"
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
Payments Intelligence
</h3>


<p className="
text-neutral-500
mt-2
">
Financial transaction monitoring
</p>


</div>



<div className="
text-sm
text-neutral-400
">
Processed: EUR 14750
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
payments.map((payment)=>(


<div

key={payment.guest}

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
{payment.type}
</h4>


<p className="
text-sm
text-neutral-500
">
{payment.guest}
</p>


<p className="
text-xs
text-neutral-600
mt-1
">
{payment.amount}
</p>


</div>



<div>

<p className={`
text-sm

${
payment.status === "COMPLETED"

?

"text-green-400"

:

payment.status === "PENDING"

?

"text-yellow-400"

:

"text-red-400"

}

`}>

{payment.status}

</p>


</div>


</div>


))

}


</div>


</section>

)

}