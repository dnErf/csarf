// import type { APIRoute } from "astro"
// export const POST:APIRoute =  () => {
//     return new Response(JSON.stringify({ isFine: true }), { status: 200 })
// }

export async function POST({ cookies, locals, request }) {
    let body = await request.json()
    
    if (body.access_token === undefined || body.access_token === null || body.access_token === '') {
        return new Response(JSON.stringify({ isFine: false }), { status: 200 })
    }

    cookies.set('sb-access-token', body.access_token, { path: "/"})
    cookies.set('sb-refresh-token', body.refresh_token, { path: "/"})
    cookies.set('sb-user-id', body.user.id, { path: "/"})

    return new Response(JSON.stringify({ isFine: true }), { status: 200 })
}

export async function GET() {
    return new Response(JSON.stringify({ isFine: true }), { status: 200 })
}