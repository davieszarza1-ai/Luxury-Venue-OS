export default function LiveOperations(){

return (

<section className="
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
mb-8
">

<div>

<h3 className="
text-xl
font-semibold
">
Live Operations
</h3>

<p className="
text-neutral-500
mt-2
">
Real time venue activity
</p>

</div>


<div className="
text-sm
text-green-400
">
● LIVE
</div>


</div>



<div className="
grid
grid-cols-1
md:grid-cols-4
gap-5
">


<div className="
rounded-2xl
bg-black
border
border-neutral-800
p-5
">

<p className="text-neutral-500 text-sm">
Active Tables
</p>

<p className="text-3xl mt-3">
12
</p>

</div>



<div className="
rounded-2xl
bg-black
border
border-neutral-800
p-5
">

<p className="text-neutral-500 text-sm">
Reservations
</p>

<p className="text-3xl mt-3">
8
</p>

</div>



<div className="
rounded-2xl
bg-black
border
border-neutral-800
p-5
">

<p className="text-neutral-500 text-sm">
Orders Active
</p>

<p className="text-3xl mt-3">
6
</p>

</div>



<div className="
rounded-2xl
bg-black
border
border-neutral-800
p-5
">

<p className="text-neutral-500 text-sm">
Payments Today
</p>

<p className="text-3xl mt-3">
€4850
</p>

</div>


</div>


</section>

)

}