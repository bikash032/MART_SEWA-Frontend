import LeftHandSideOfAuthPage from "./leftHandSideOfAuth"
import { PageTitle } from "@/components/page-title/PageTitle"
import { NavLink, useNavigate } from "react-router"
import { TrashIcon } from "lucide-react"
import { FaPaperPlane } from "react-icons/fa6"
import { FormInputProps } from "@/components/form/formLabel"
import { FormInputs } from "@/constant/constant"
import FormInput from "@/components/form/FormInput";
import { useForm } from "react-hook-form"

import { yupResolver } from "@hookform/resolvers/yup"
import { CreditionalDTO, type ICreditionals } from "@/contract/auth.contract"
<<<<<<< HEAD
import { useAuth } from "@/context/auth.context"
import { toast } from "sonner"
const LABEL_WIDTH = "w-[260px]"
const LoginPage = () => {
    const { login } = useAuth()
=======
import { useAuth } from "@/hooks/auth.hooks"

const LABEL_WIDTH = "w-65"

const LoginPage = () => {
    const {login}=useAuth()

>>>>>>> 31eee3d90fa6e6983779154213d9a597b2d5a4d4
    const { handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
            email: "",
            password: ""
        },
        resolver: yupResolver(CreditionalDTO)
    })
    const navigate = useNavigate()
    const submitHandle = async (data: ICreditionals) => {
        try {
<<<<<<< HEAD
            await login(data)
            
         

=======
            // trigger hook
          await  login(data)
>>>>>>> 31eee3d90fa6e6983779154213d9a597b2d5a4d4
        } catch (exception) {
            throw exception
        }
    }
    return <>
        <div className="min-h-screen w-full  flex flex-col md:flex-row">
            <LeftHandSideOfAuthPage />
            <div className="flex-1  pt-40 md:pd-10 overflow-auto">
                <div className="max-w-4xl mx-auto bg-white  p-6 md:p-10">
                    <div className="flex flex-row justify-between sm:flex-col md:flex-col lg:flex-row mr-15 border-b-2 border-black/20  ">
                        <div className="flex flex-row justify-between sm:flex-col md:flex-col lg:flex-row">
                            <PageTitle className="font-semibold not-italic" title="Login" />
                        </div>
                        <div className="flex space-x-2 mt-5 w-full justify-end">
                            <p>Don't Have an Account?</p>
                            <NavLink to="/register" ><span className="text-cyan-500 italic hover:underline hover:cursor-pointer hover:text-cyan-600">Register now!</span></NavLink>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(submitHandle)}
                        className="space-y-4 mt-5 mr-15">
                        <div className="flex items-center">
                            <div className={`${LABEL_WIDTH}`}>
                                <FormInputProps label="Email:" htmlFor="email" />
                            </div>
                            <FormInput
                                type={FormInputs.EMAIL}
                                id="email"
                                placeholder="Enter your email"
                                control={control}
                                name="email"
                                errorMsg={errors?.email?.message}
                                className="w-full"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="password" className="flex flex-row " >
                                <div className={`${LABEL_WIDTH}`}>

                                    <FormInputProps label="Password:" htmlFor="password" />
                                </div>
                                <FormInput
                                    type={FormInputs.PASSWORD}
                                    placeholder="Enter your Password..."
                                    id="password"
                                    className="w-full"
                                    control={control}
                                    name="password"
                                    errorMsg={errors?.password?.message}
                                />
                            </label>
                            <div className="text-end">
                                <NavLink to="/forget-password"><span className="text-cyan-500 italic hover:cursor-pointer hover:underline">Forget Password</span></NavLink>
                            </div>
                        </div>
                        <div className=" ml-48 flex flex-row">
                            <button className="bg-red-600  rounded w-1/2   focus:border-cyan-700 p-2 hover:bg-red-700 hover:cursor-pointer font-medium text-white flex gap-2 items-center justify-center">
                                <div>
                                    <TrashIcon />
                                </div>
                                <div>
                                    Cancel
                                </div>
                            </button>
                            <button className="bg-cyan-600 rounded  w-1/2  focus:border-cyan-700 p-2 hover:bg-teal-800 hover:cursor-pointer font-medium text-white  ml-5  flex gap-2 items-center justify-center">
                                <div>
                                    <FaPaperPlane />
                                </div>
                                <div>
                                    Submit
                                </div>
                            </button>
                        </div>
                    </form>

                </div>

            </div>

        </div>
    </>
}
export default LoginPage