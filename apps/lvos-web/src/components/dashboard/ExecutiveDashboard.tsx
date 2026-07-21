export default function ExecutiveDashboard(){

const executiveMetrics = [

{
title:"Today's Revenue",
value:"EUR 15000",
detail:"+12.4% growth"
},

{
title:"VIP Guests",
value:"128",
detail:"Active premium clients"
},

{
title:"Table Performance",
value:"92%",
detail:"Luxury seating efficiency"
},

{
title:"Payment Volume",
value:"EUR 24750",
detail:"Processed today"
},

{
title:"Inventory Value",
value:"EUR 68500",
detail:"Premium assets"
},

{
title:"Operational Score",
value:"96%",
detail:"Venue performance"
}

]


return (

<section className="
mt-10
rounded-3xl
bg-black
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
text-2xl
font-semibold
">
Executive Dashboard
</h3>


<p className="
text-neutral-500
mt-2
">
Owner level venue intelligence
</p>


</div>


<div className="
rounded-full
border
border-neutral-800
px-5
py-2
text-sm
text-green-400
">
LIVE
</div>


</div>



<div className="
mt-8
grid
grid-cols-1
md:grid-cols-3
gap-6
">


{
executiveMetrics.map((metric)=>(


<div

key={metric.title}

className="
rounded-3xl
bg-neutral-900
border
border-neutral-800
p-6
"

>


<p className="
text-sm
text-neutral-500
">
{metric.title}
</p>


<h4 className="
text-3xl
font-bold
mt-4
">
{metric.value}
</h4>


<p className="
text-sm
text-green-400
mt-3
">
{metric.detail}
</p>


</div>


))

}


</div>


</section>

)

}
