export default function AccessLogs(){

const logs = [

{
user:"Admin LVOS",
action:"COMMAND CENTER LOGIN",
time:"00:42",
status:"SUCCESS"
},

{
user:"Floor Manager",
action:"TABLE MANAGEMENT ACCESS",
time:"00:38",
status:"SUCCESS"
},

{
user:"VIP Operations",
action:"GUEST DATABASE ACCESS",
time:"00:31",
status:"SUCCESS"
},

{
user:"Unknown Device",
action:"REMOTE LOGIN ATTEMPT",
time:"00:18",
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


<h2 className="
text-2xl
">

Access Logs Intelligence

</h2>


<p className="
text-neutral-500
mt-2
">

Real time user activity monitoring

</p>



<div className="
mt-8
space-y-4
">


{
logs.map((log,index)=>(


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
items-center
"

>


<div>


<h3 className="
text-lg
">

{log.user}

</h3>


<p className="
text-neutral-500
">

{log.action}

</p>


<p className="
text-neutral-600
text-sm
">

{log.time}

</p>


</div>



<span

className={

log.status==="SUCCESS"

?

"text-green-400"

:

"text-red-400"

}

>

{log.status}

</span>



</div>


))

}


</div>


</section>

)

}