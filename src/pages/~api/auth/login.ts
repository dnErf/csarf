// import type { APIRoute } from "astro"
// export const POST:APIRoute =  () => {
//     return new Response(JSON.stringify({ isFine: true }), { status: 200 })
// }

export async function POST({ request }) {
    let body = await request.json()
    console.log('= ~api login')
    console.log(body.email)
    console.log(body.password)
    console.log('===')
    return new Response(JSON.stringify({ isFine: true }), { status: 200 })
}

export async function GET() {
    return new Response(JSON.stringify({ isFine: true }), { status: 200 })
}