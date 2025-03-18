export default async function  userLogIn(userEmail:string, userPassword: string) {

    const response = await fetch("https://a08-venue-explorer-backend.vercel.app/api/v1/auth/login",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email:userEmail,
            password: userPassword
        }),

   })
//    console.log("Response status:", response.status);
//     console.log("Response headers:", response.headers);

    //const responseData = await response.json();
  //  console.log("Response JSON:", responseData);
    
   if(!response.ok){
    throw new Error("Failed to log-in")
   }

   return await response.json();
    
}