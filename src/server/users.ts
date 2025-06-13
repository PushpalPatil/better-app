// coming from dashboard - need to define users
// signIn and signUp methods : pre-defined for now


"use server"; // server action 

import {auth} from "@/lib/auth";

export const signIp = async () => {
    await auth.api.signInEmail({
        body: {
            email: "pushpal@fractaltechhub.com",
            password: "lezgetit",
        }
    })
}

export const signUp = async () =>{
    await auth.api.signUpEmail({
        body: {
            email: "pushpal@fractaltechhub.com",
            password: "lezgetit",
            name: "Pushpal"
        }
    })
}