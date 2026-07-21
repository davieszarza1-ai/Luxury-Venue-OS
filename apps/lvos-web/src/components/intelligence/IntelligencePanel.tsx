export default function IntelligencePanel({
title,
children
}:{
title:string;
children:React.ReactNode;
}){


return (

<div
className="
rounded-3xl
border
border-neutral-800
bg-gradient-to-br
from-neutral-900
to-black
p-8
shadow-2xl
"
>


<h3
className="
text-lg
font-semibold
tracking-wide
text-white
"
>

{title}

</h3>


<div
className="
mt-6
text-neutral-400
"
>

{children}

</div>


</div>

)

}
