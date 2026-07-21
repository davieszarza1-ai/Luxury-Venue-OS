"use client";

export default function UserManagement(){

return (

<section className="
mt-10
rounded-3xl
bg-neutral-900
border
border-neutral-800
p-8
">


<h2 className="text-2xl font-semibold">
User Role Intelligence
</h2>


<p className="
text-neutral-500
mt-2
">
LVOS access control and staff permissions.
</p>



<div className="
grid
grid-cols-1
md:grid-cols-4
gap-5
mt-8
">


<div className="
rounded-2xl
bg-neutral-950
border
border-neutral-800
p-5
">

<h3 className="text-lg">
Owner
</h3>

<p className="text-neutral-500 mt-2">
Full command access
</p>

</div>



<div className="
rounded-2xl
bg-neutral-950
border
border-neutral-800
p-5
">

<h3 className="text-lg">
Manager
</h3>

<p className="text-neutral-500 mt-2">
Operations control
</p>

</div>



<div className="
rounded-2xl
bg-neutral-950
border
border-neutral-800
p-5
">

<h3 className="text-lg">
Staff
</h3>

<p className="text-neutral-500 mt-2">
Service operations
</p>

</div>



<div className="
rounded-2xl
bg-neutral-950
border
border-neutral-800
p-5
">

<h3 className="text-lg">
VIP Host
</h3>

<p className="text-neutral-500 mt-2">
Guest relations
</p>

</div>


</div>


</section>

)

}