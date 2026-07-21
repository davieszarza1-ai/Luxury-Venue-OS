"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function LoginPanel(){

const router = useRouter();


const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [error,setError] = useState("");
const [loading,setLoading] = useState(false);



async function login(){


setLoading(true);
setError("");


const res = await fetch(
"/api/auth/login",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
email,
password
})
}
);



const data = await res.json();



if(data.success){

window.location.href="/";

return;

}



setError(data.message);

setLoading(false);


}



return (

<div className="
min-h-screen
bg-black
text-white
flex
items-center
justify-center
">


<div className="
w-full
max-w-md
bg-neutral-950
border
border-neutral-800
rounded-3xl
p-10
">


<h1 className="text-4xl font-bold">
LVOS
</h1>


<p className="text-neutral-500">
Luxury Venue OS
</p>



<div className="mt-10 space-y-5">


<input

className="
w-full
bg-black
border
border-neutral-800
rounded-xl
p-4
"

placeholder="Email"

value={email}

onChange={
e=>setEmail(e.target.value)
}

/>



<input

className="
w-full
bg-black
border
border-neutral-800
rounded-xl
p-4
"

placeholder="Password"

type="password"

value={password}

onChange={
e=>setPassword(e.target.value)
}

/>



{
error &&
<p className="text-red-400">
{error}
</p>
}



<button

onClick={login}

className="
w-full
bg-white
text-black
rounded-xl
p-4
font-semibold
"

>

{
loading
?
"ACCESSING..."
:
"ACCESS COMMAND CENTER"
}

</button>


</div>



<div className="
mt-10
border
border-neutral-800
rounded-xl
p-5
">

SYSTEM STATUS

<div className="mt-2">
🟢 Operational
</div>

</div>


</div>


</div>

)

}