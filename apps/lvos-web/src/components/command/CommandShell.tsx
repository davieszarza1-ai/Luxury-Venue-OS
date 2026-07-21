import Link from "next/link";


export default function CommandShell({
 children
}:{
 children:React.ReactNode
}){


return (

<div className="
min-h-screen
bg-black
text-white
flex
">


<aside className="
w-72
border-r
border-neutral-800
bg-neutral-950
p-8
">


<h1 className="
text-2xl
font-bold
tracking-widest
">
LVOS
</h1>


<p className="
text-xs
text-neutral-500
mt-2
">
Luxury Venue OS
</p>


<nav className="
mt-10
space-y-4
">


{
[
"Command Center",
"Revenue Intelligence",
"VIP Guests",
"Reservations",
"Floor Management",
"Inventory",
"Payments",
"Analytics"
].map(item=>(


<Link
key={item}
href="#"
className="
block
rounded-xl
px-4
py-3
text-sm
text-neutral-400
hover:text-white
hover:bg-neutral-900
transition
"
>

{item}

</Link>


))
}


</nav>


<div className="
mt-16
rounded-2xl
border
border-neutral-800
p-5
">


<p className="
text-xs
text-neutral-500
">
SYSTEM STATUS
</p>


<div className="
mt-3
flex
items-center
gap-2
">


<span className="
h-2
w-2
rounded-full
bg-green-400
">
</span>


<span className="
text-sm
">
Operational
</span>


</div>


</div>


</aside>




<main className="
flex-1
p-10
">


<header className="
flex
justify-between
items-center
mb-10
">


<div>

<h2 className="
text-3xl
font-semibold
">
Command Center
</h2>


<p className="
text-neutral-500
mt-2
">
Venue operational intelligence
</p>

</div>



<div className="
border
border-neutral-800
rounded-full
px-6
py-3
text-sm
">

● Venue Online

</div>


</header>


{children}


</main>


</div>

)

}
