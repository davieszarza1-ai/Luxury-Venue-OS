"use client";


import {
useState
} from "react";


import {
useRouter
} from "next/navigation";



export default function LoginPanel(){


const router =
useRouter();



const [
email,
setEmail
]=useState("");



const [
password,
setPassword
]=useState("");



const [
error,
setError
]=useState("");



const [
loading,
setLoading
]=useState(false);




async function login(){


setLoading(true);

setError("");



const response =
await fetch(
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



const data =
await response.json();



if(!data.success){

setError(
data.message
);

setLoading(false);

return;

}



router.push("/");


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
rounded-3xl
border
border-neutral-800
bg-neutral-950
p-10
">


<h1 className="
text-4xl
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

className="
w-full
rounded-xl
bg-black
border
border-neutral-800
px-5
py-4
outline-none
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
rounded-xl
bg-black
border
border-neutral-800
px-5
py-4
outline-none
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

<p className="
text-red-400
text-sm
">

{error}

</p>

}



<button

onClick={login}

disabled={loading}

className="
w-full
rounded-xl
bg-white
text-black
font-semibold
py-4
hover:bg-neutral-200
transition
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
rounded-2xl
p-5
">


<p className="
text-xs
text-neutral-500
">

SYSTEM STATUS

</p>


<div className="
mt-3
flex
items-center
gap-2
">


<span className="
h-2
w-2
rounded-full
bg-green-400
">
</span>


<span>

Operational

</span>


</div>


</div>



</div>


</div>

)

}