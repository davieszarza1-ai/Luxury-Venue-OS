import {
NextResponse
} from "next/server";


import type {
NextRequest
} from "next/server";



export function middleware(
request:NextRequest
){


const token =
request.cookies.get(
"lvos_token"
);



const path =
request.nextUrl.pathname;



if(
path.startsWith("/login")
){

return NextResponse.next();

}



if(
!token
){

return NextResponse.redirect(

new URL(
"/login",
request.url
)

);

}



return NextResponse.next();


}



export const config={

matcher:[

"/",
"/dashboard/:path*"

]

};