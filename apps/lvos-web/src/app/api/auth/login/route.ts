import { NextResponse } from "next/server";


export async function POST(request: Request){


const body = await request.json();


const {
email,
password
} = body;



if(
email === "admin@lvos.com" &&
password === "lvos12345"
){


const response = NextResponse.json({

success:true,

user:{
email,
role:"ADMIN"
}

});



response.cookies.set(
"lvos_session",
"authenticated",
{
httpOnly:true,
path:"/",
sameSite:"lax"
}
);



return response;


}



return NextResponse.json(

{
success:false,
message:"Invalid credentials"
},

{
status:401
}

);


}