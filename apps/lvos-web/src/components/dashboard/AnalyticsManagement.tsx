export default function AnalyticsManagement(){

const metrics = [

{
title:"Daily Revenue Growth",
value:"+12.4%",
description:"Compared with previous day",
status:"POSITIVE"
},

{
title:"Average VIP Spend",
value:"EUR 1850",
description:"Per premium guest",
status:"POSITIVE"
},

{
title:"Reservation Conversion",
value:"86%",
description:"Confirmed reservations",
status:"POSITIVE"
},

{
title:"Operational Efficiency",
value:"94%",
description:"Service performance",
status:"POSITIVE"
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
Analytics Intelligence
</h3>


<p className="
text-neutral-500
mt-2
">
Executive venue performance analytics
</p>

</div>


<div className="
text-sm
text-neutral-400
">
Live Metrics
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
metrics.map((metric)=>(


<div

key={metric.title}

className="
rounded-2xl
border
border-neutral-800
p-6
"

>


<div className="
flex
justify-between
">


<h4 className="
font-semibold
">
{metric.title}
</h4>


<span className="
text-green-400
text-sm
">
{metric.status}
</span>


</div>



<p className="
text-3xl
font-bold
mt-4
">
{metric.value}
</p>


<p className="
text-sm
text-neutral-500
mt-2
">
{metric.description}
</p>


</div>


))

}


</div>


</section>

)

}