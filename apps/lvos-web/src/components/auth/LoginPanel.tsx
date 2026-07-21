"use client";


import { useState } from "react";


export default function LoginPanel(){


const [email,setEmail]=useState("");
const [password,setPassword]=useState("");



function login(){

console.log({
email,
password
});

}



return (

<div className="
w-full
max-w-md
rounded-3xl
border
border-neutral-800
bg-neutral-950
p-10
">


<h1 className="
text-3xl
font-bold
tracking-widest
">
LVOS
</h1>


<p className="
text-neutral-500
mt-2
">
Luxury Venue OS
</p>



<div className="
mt-10
space-y-5
">


<input

value={email}

onChange={(e)=>setEmail(e.target.value)}

placeholder="Email"

className="
w-full
rounded-xl
bg-black
border
border-neutral-800
px-5
py-4
outline-none
focus:border-white
"

/>



<input

type="password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

placeholder="Password"

className="
w-full
rounded-xl
bg-black
border
border-neutral-800
px-5
py-4
outline-none
focus:border-white
"

/>



<button

onClick={login}

className="
w-full
rounded-xl
bg-white
text-black
py-4
font-semibold
hover:bg-neutral-200
transition
"

>

ACCESS COMMAND CENTER

</button>



</div>



<div className="
mt-8
border-t
border-neutral-800
pt-5
">


<p className="
text-xs
text-neutral-500
">
SYSTEM STATUS
</p>


<div className="
flex
items-center
gap-2
mt-3
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


</div>

)

}