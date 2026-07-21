export type UserRole =
  | "OWNER"
  | "MANAGER"
  | "STAFF";


export interface UserSession {

  id:string;

  name:string;

  email:string;

  role:UserRole;

}



export function createSession(
user:UserSession
){

return {

token:
Buffer
.from(JSON.stringify(user))
.toString("base64"),

user

};

}



export function decodeSession(
token:string
){

try{

return JSON.parse(

Buffer
.from(token,"base64")
.toString()

);


}catch{

return null;

}

}