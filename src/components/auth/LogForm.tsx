import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const authSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

export default () => {
    let { register, formState, handleSubmit, watch } = useForm<z.infer<typeof authSchema>>({
        resolver: zodResolver(authSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    async function submitForm(data) {
        console.log('= submitForm')
        let result = await fetch('/~api/auth/login', { 
            method: 'POST', 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ ...data }) 
        })
        .then((response) => response.json())
        .catch((err) => console.error(err))
        console.log(result)
        console.log('=')
    }

    return (
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" onSubmit={handleSubmit(submitForm)}>
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">login</h5>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input {...register("email")} placeholder="name@company.com" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                    { formState.errors?.email?.message && <p className="mt-2 text-sm text-red-600 dark:text-red-500"><small className="font-medium">* { formState.errors?.email?.message.toLowerCase() }</small></p> }
                </div>
                    
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input {...register("password")} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                    { formState.errors?.password?.message && <p className="mt-2 text-sm text-red-600 dark:text-red-500"><small className="font-medium">* invalid password</small></p> }
                </div>
                <div className="flex items-start">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                        </div>
                        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                    </div>
                    <a href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                </div>
                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your Account</button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create Account</a>
                </div>
            </form>
        </div>
    )
}