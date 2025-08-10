import LeftHandSideOfAuthPage from "./leftHandSideOfAuth"
import { PageTitle } from "@/components/page-title/PageTitle"
import { NavLink } from "react-router"
import { TrashIcon } from "lucide-react"
import { FaPaperPlane } from "react-icons/fa6"
import { FormInputProps } from "@/components/form/formLabel"
import { FormInputs } from "@/constant/constant"
import FormInput from "@/components/form/FormInput";
import { useForm } from "react-hook-form"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"


const LABEL_WIDTH = "w-65"

export interface ICreditionals {
    email: string | null
    password: String | null


}

const CreditionalDTO = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().min(5).required()
})
const LoginPage = () => {
    const { handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
            email: "",
            password: ""
        },
        resolver: yupResolver(CreditionalDTO)
    })
    const submitHandle = (data: ICreditionals) => {
        console.log(data);

    }
    console.log(errors)
    return <>
        <div className="min-h-screen w-full bg-gradient-to-b from-cyan-600 to-cyan-50 flex flex-col md:flex-row">
            <LeftHandSideOfAuthPage />
            <div className="flex-1 pt-20 md:pd-10 overflow-auto">
                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10 border border-cyan-300">
                    <div className="flex flex-row justify-between sm:flex-col md:flex-col lg:flex-row mr-15">
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
                                <FormInputProps label="Password:" htmlFor="password" />
                                <FormInput
                                    type={FormInputs.PASSWORD}
                                    placeholder="Enter your Password..."
                                    id="password"
                                    className="mt-0.5 rounded border-gray-300 shadow-sm  w-full p-1.5 border focus:border-cyan-600"
                                    control={control}
                                    name="password"
                                    errorMsg={errors?.password?.message}
                                />
                            </label>
                            <div className="text-end">
                                <NavLink to="/forget-password"><span className="text-cyan-500 italic hover:cursor-pointer hover:underline">Forget Password</span></NavLink>
                            </div>
                        </div>
                        <div className=" ml-45 flex flex-row">
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