import { createServerClient, parseCookieHeader } from "@supabase/ssr"

export const supabase = async (context, next) => {

	context.locals.supabaseSsr = createServerClient(
		import.meta.env.PUBLIC_SUPABASE_URL,
		import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
		{
			cookies: {
				getAll() {
					return parseCookieHeader(context.request.headers.get('Cookie') ?? '')
				},
				setAll(cookiesToSet) {
					cookiesToSet.forEach(({ name, value, options }) =>
						context.cookies.set(name, value, options))
				},
			},
		}
	)
	
	return next()
}
