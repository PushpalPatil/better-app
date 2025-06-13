// coming from dashboard - need to define users
// signIn and signUp methods : pre-defined for now


"use server"; // server action 

import { auth } from "@/lib/auth";

export const signIn = async (email: string, password: string) => {
    try {
        await auth.api.signInEmail({
            body: {
                email,
                password,
            }
        })

        return {
            success: true,
            message: "signed in successfully."
        }

    } catch (error) {
        const e = error as Error
        return {
            success: false,
            message: e.message || "An unknown error occurred." ,

        }

    }

}


export const signUp = async () => {
    await auth.api.signUpEmail({
        body: {
            email: "pushpal@fractaltechhub.com",
            password: "lezgetit",
            name: "Pushpal"
        }
    })
}