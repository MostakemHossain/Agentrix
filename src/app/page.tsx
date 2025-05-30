"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function Home() {
  const { 
    data: session, 
} = authClient.useSession() 


  const onSubmit= ()=>{
    authClient.signUp.email({
      email,
      password, 
      name, 
      
  }, {
      
      onSuccess: () => {
          window.alert("Success")
      },
      onError: () => {
       window.alert("Something went wrong")
      },
})
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");


  if(session){
    return (
      <div>
        <p>{session.user.name}</p>
        <p>{session.user.email}</p>
        <Button onClick={()=>authClient.signOut()}>
          Sign Out
        </Button>
      </div>
    )
  }
  return (

   <div>
    <Input placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
    <Input placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <Input placeholder="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <Button onClick={onSubmit}>
      Create User
    </Button>
    
   </div>
  );
}
