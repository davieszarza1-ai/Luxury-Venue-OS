export default function InventoryManagement(){

const inventory = [

{
product:"Premium Champagne",
category:"Beverage",
stock:24,
status:"AVAILABLE"
},

{
product:"Vintage Wine Collection",
category:"Wine",
stock:8,
status:"LOW STOCK"
},

{
product:"Luxury Spirits",
category:"Premium Bar",
stock:15,
status:"AVAILABLE"
},

{
product:"VIP Cigar Selection",
category:"VIP Service",
stock:3,
status:"CRITICAL"
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
Inventory Intelligence
</h3>


<p className="
text-neutral-500
mt-2
">
Premium inventory monitoring
</p>

</div>


<div className="
text-sm
text-neutral-400
">
Total Items: 50
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
inventory.map((item)=>(


<div

key={item.product}

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
{item.product}
</h4>


<p className="
text-sm
text-neutral-500
">
{item.category}
</p>


<p className="
text-xs
text-neutral-600
mt-1
">
Stock: {item.stock}
</p>


</div>



<div>


<p className={`
text-sm

${
item.status === "AVAILABLE"
?
"text-green-400"

:

item.status === "LOW STOCK"
?
"text-yellow-400"

:

"text-red-400"
}

`}>

{item.status}

</p>


</div>



</div>


))

}


</div>


</section>

)

}