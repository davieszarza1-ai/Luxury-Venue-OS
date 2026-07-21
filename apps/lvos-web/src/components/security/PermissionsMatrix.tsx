export default function PermissionsMatrix(){

const roles = [

{
role:"OWNER",
access:"FULL SYSTEM",
users:1,
level:"MASTER"
},

{
role:"GENERAL MANAGER",
access:"OPERATIONS + FINANCE",
users:3,
level:"HIGH"
},

{
role:"FLOOR MANAGER",
access:"TABLES + RESERVATIONS",
users:6,
level:"MEDIUM"
},

{
role:"VIP OPERATIONS",
access:"GUEST EXPERIENCE",
users:8,
level:"MEDIUM"
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


<h2 className="
text-2xl
">

Permissions Matrix Intelligence

</h2>


<p className="
text-neutral-500
mt-2
">

Role based access control system

</p>



<div className="
mt-8
grid
grid-cols-1
md:grid-cols-2
gap-6
">


{
roles.map((item,index)=>(

<div

key={index}

className="
rounded-2xl
bg-neutral-950
border
border-neutral-800
p-6
"

>


<h3 className="
text-xl
">

{item.role}

</h3>


<p className="
mt-3
text-neutral-400
">

{item.access}

</p>


<p className="
mt-3
text-neutral-500
">

Active Users: {item.users}

</p>


<span className="
inline-block
mt-4
text-sm
">

LEVEL {item.level}

</span>


</div>


))

}


</div>


</section>

)

}