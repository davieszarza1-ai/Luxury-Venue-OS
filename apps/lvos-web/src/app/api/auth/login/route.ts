import {
  NextResponse
} from "next/server";


import {
  createSession
} from "@/lib/auth/auth";



export async function POST(
  request: Request
) {


  const body =
    await request.json();



  const {
    email,
    password
  } = body;



  if (
    email !== "owner@lvos.com" ||
    password !== "lvos123"
  ) {


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



  const session =
    createSession({

      id:"1",

      name:"LVOS Owner",

      email,

      role:"OWNER"

    });



  const response =
    NextResponse.json({

      success:true

    });



  response.cookies.set(

    "lvos_token",

    session.token,

    {

      httpOnly:true,

      secure:false,

      sameSite:"lax",

      maxAge:60*60*24

    }

  );



  return response;


}