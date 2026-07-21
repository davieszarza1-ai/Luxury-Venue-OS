export default function SecurityMonitoring(){

const events = [
{
type:"ACCESS",
user:"General Manager",
location:"Command Center",
status:"AUTHORIZED"
},
{
type:"LOGIN",
user:"VIP Operations",
location:"Floor Terminal",
status:"AUTHORIZED"
},
{
type:"ALERT",
user:"Unknown Device",
location:"Remote Access",
status:"BLOCKED"
}
];


return (

<section
className="
mt-10
rounded-3xl
bg-neutral-900
border
border-neutral-800
p-8
"
>

<h2 className="text-2xl">
Security Intelligence
</h2>

<p className="
text-neutral-500
mt-2
">
Real time venue security monitoring
</p>


<div className="
grid
grid-cols-1
md:grid-cols-3
gap-6
mt-8
">


<div className="
rounded-2xl
bg-neutral-950
p-6
">

<p className="text-neutral-500">
SYSTEM STATUS
</p>

<h3 className="text-xl mt-2">
SECURE
</h3>

</div>



<div className="
rounded-2xl
bg-neutral-950
p-6
">

<p className="text-neutral-500">
ACTIVE USERS
</p>

<h3 className="text-xl mt-2">
24
</h3>

</div>



<div className="
rounded-2xl
bg-neutral-950
p-6
">

<p className="text-neutral-500">
SECURITY EVENTS
</p>

<h3 className="text-xl mt-2">
3
</h3>

</div>


</div>



<div className="
mt-8
space-y-4
">

{
events.map((event,index)=>(

<div
key={index}
className="
rounded-2xl
bg-neutral-950
border
border-neutral-800
p-5
flex
justify-between
"
>

<div>

<h4 className="text-lg">
{event.type}
</h4>

<p className="text-neutral-400">
{event.user}
</p>

<p className="text-neutral-600">
{event.location}
</p>

</div>


<span>
{event.status}
</span>


</div>

))
}

</div>


</section>

)

}