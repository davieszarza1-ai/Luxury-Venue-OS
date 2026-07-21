export default function LuxuryMetric({
label,
value,
detail
}:{
label:string;
value:string;
detail:string;
}){


return (

<div
className="
rounded-2xl
border
border-neutral-800
bg-neutral-950
p-6
"
>


<p
className="
text-xs
uppercase
tracking-widest
text-neutral-500
"
>

{label}

</p>


<h2
className="
mt-4
text-3xl
font-bold
text-white
"
>

{value}

</h2>


<p
className="
mt-2
text-sm
text-neutral-500
"
>

{detail}

</p>


</div>

)

}
