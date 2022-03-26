import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { signin } from '../api/user'

type Props = {}
type FormInput = {
    email: string,
    password: string
}
const Signin = (props: Props) => {
    const {register, handleSubmit} = useForm<FormInput>()
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<FormInput> = async (formdata: any) => {
        const {data} = await signin(formdata);
        
        localStorage.setItem("user", JSON.stringify(data))
        navigate("/admin");
    }

  return (
    <div>
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <NavLink to="/">
                            <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"/>
                        </NavLink>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Đăng Nhập
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)} >
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label className="sr-only">Email address</label>
                            <input id="email-address" {...register("email")} type="email"required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email"/>
                        </div>
                        <div>
                            <label className="sr-only">Password</label>
                            <input id="password" {...register("password")} type="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Mật khẩu"/>
                        </div>
                        </div>
                
                        <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                            <label className="ml-2 block text-sm text-gray-900">
                            Ghi nhớ tài khoản
                            </label>
                        </div>
                
                        
                        </div>
                        
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                            </svg>
                            </span>
                            Đăng Nhập
                        </button>
                        
                    </form>
                    <div className="bg-green-400 alert succes hidden text-[#fff] min-h-10">
                    <a href="">Đăng nhập</a>
                    </div>
                    <div className="bg-red-500 alert error hidden text-[#fff] min-h-10"></div>
                </div>
            </div>
    </div>
  )
}

export default Signin