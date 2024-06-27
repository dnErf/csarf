import { sequence } from "astro:middleware"
import { supabase } from "@/lib/supabase/ssrClient"

async function auth(context, next) {
    let accessToken = context.cookies.get('sb-access-token')
    let hasAccess = accessToken !== undefined && accessToken !== null && accessToken !== ''

    if (context.url.pathname === '/auth/login' || context.url.pathname === '/~api/auth/login') {
        return next()
    }

    if (!hasAccess) {
        return context.redirect('/auth/login')
    }

    return next()
}

export const onRequest = sequence(auth, supabase)