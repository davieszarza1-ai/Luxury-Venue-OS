"use client";


export default function StaffManagement(){


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


<h2 className="text-2xl font-semibold">
Staff Management Intelligence
</h2>


<p
className="
text-neutral-500
mt-3
"
>
Real time team operations and permission monitoring.
</p>



<div
className="
grid
grid-cols-1
md:grid-cols-3
gap-6
mt-8
"
>


<div
className="
rounded-2xl
bg-neutral-950
border
border-neutral-800
p-6
"
>

<h3 className="text-xl">
Marco Executive
</h3>

<p className="text-neutral-400 mt-3">
Role: General Manager
</p>

<p className="text-green-400 mt-2">
● ACTIVE
</p>

</div>



<div
className="
rounded-2xl
bg-neutral-950
border
border-neutral-800
p-6
"
>

<h3 className="text-xl">
Sofia Host
</h3>

<p className="text-neutral-400 mt-3">
Role: VIP Host
</p>

<p className="text-green-400 mt-2">
● ACTIVE
</p>

</div>



<div
className="
rounded-2xl
bg-neutral-950
border
border-neutral-800
p-6
"
>

<h3 className="text-xl">
Daniel Service
</h3>

<p className="text-neutral-400 mt-3">
Role: Floor Staff
</p>

<p className="text-yellow-400 mt-2">
● ON SHIFT
</p>

</div>



</div>




<div
className="
mt-8
grid
grid-cols-1
md:grid-cols-4
gap-5
"
>


<div
className="
rounded-xl
bg-neutral-950
border
border-neutral-800
p-5
"
>

<p className="text-neutral-500">
Total Staff
</p>

<p className="text-3xl mt-2">
24
</p>

</div>



<div
className="
rounded-xl
bg-neutral-950
border
border-neutral-800
p-5
"
>

<p className="text-neutral-500">
Active Users
</p>

<p className="text-3xl mt-2">
18
</p>

</div>



<div
className="
rounded-xl
bg-neutral-950
border
border-neutral-800
p-5
"
>

<p className="text-neutral-500">
VIP Hosts
</p>

<p className="text-3xl mt-2">
6
</p>

</div>



<div
className="
rounded-xl
bg-neutral-950
border
border-neutral-800
p-5
"
>

<p className="text-neutral-500">
Security Level
</p>

<p className="text-3xl mt-2">
HIGH
</p>

</div>


</div>


</section>

)

}