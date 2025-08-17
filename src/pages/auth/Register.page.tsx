import FormInput from "@/components/form/FormInput";
import { FormInputProps } from "@/components/form/formLabel";
import { PageTitle } from "@/components/page-title/PageTitle";
import UploadFile from "@/components/smallComponents/uploadFile";
import { FormInputs, GenderEnum, UserRoles } from "@/constant/constant";
import { NavLink, useNavigate } from "react-router";
import LeftHandSideOfAuthPage from "./leftHandSideOfAuth";
import { useForm } from "react-hook-form";
import { FaPaperPlane } from "react-icons/fa6";
import { MultipleSelect } from "@/components/form/MultipleSelect";
import { RadioGroupSelect } from "@/components/form/FormInputsAll";
import { RegisterDTO, type IRegisterData } from "@/contract/auth.contract";
import { yupResolver } from "@hookform/resolvers/yup";
import baseServices from "@/services/base.services";
import { toast } from "sonner";

const LABEL_WIDTH = "w-40"; // 8rem — consistent label width
const RegisterPage = () => {
    const { handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            role: UserRoles.CUSTOMER,
            gender: GenderEnum.MALE,
            phone: "",
            address: "",
            dob: "",
            image: ""

        },
        resolver: yupResolver(RegisterDTO)

    })
    const navigate=useNavigate()

    const submitHandle = async (data: IRegisterData) => {
        console.log("submit data", data);
        const formData = new FormData();

        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("password", data.password);
        formData.append("confirmPassword", data.confirmPassword);
        formData.append("role", data.role);
        formData.append("gender", data.gender);
        formData.append("phone", data.phone || "");
        formData.append("address", data.address || "");
        formData.append("dob", data.dob || "");

        // Append image only if it exists
        if (data.image && data.image instanceof File) {
            formData.append("image", data.image);
        } 
        try {
            const response = await baseServices.postRequest("auth/register",data,{hasFile:true})
            console.log("hello for the response from Response", response);
            toast.success("Email verification",{description:"Please check your email and click link to activate account"})
            navigate("/account-activation")
        } catch (exception) {
            toast.error("Account not Registered!!!",{description:`${data.email} is already used!`})
            console.log("exception from the axios section", exception);

        }

    }
    return (
        <div className="min-h-screen w-full  flex flex-col md:flex-row">
            <LeftHandSideOfAuthPage />
            {/* Form Section */}
            <div className="flex-1 pt-8 md:pd-10 overflow-auto">
                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-5 md:p-10 ">
                    <div className="flex flex-row justify-between sm:flex-col md:flex-col lg:flex-row border-b-2 border-black/30">
                        <div className="w-5/5 ">
                            <PageTitle className="font-semibold not-italic" title="Create an Account " />
                        </div>
                        <div className="flex space-x-2 mt-5 w-full justify-end ">
                            <p>Have already an Account?</p>
                            <NavLink to="/login" ><span className="text-cyan-500 italic hover:underline hover:cursor-pointer hover:text-cyan-600">Sign in now!</span></NavLink>
                        </div>
                    </div>
                    <form
                        onSubmit={handleSubmit(submitHandle)}
                        className="space-y-4 mt-5">
                        {/* User Name */}
                        <div className="flex items-center">
                            <div className={`${LABEL_WIDTH}`}>
                                <FormInputProps label="User Name:" htmlFor="name" />
                            </div>
                            <FormInput
                                type={FormInputs.TEXT}
                                className="w-full"
                                id="name"
                                placeholder="Please input your username..."
                                control={control}
                                name="name"
                                errorMsg={errors?.name?.message}
                            />
                        </div>
                        {/* Email */}
                        <div className="flex items-center">
                            <div className={`${LABEL_WIDTH}`}>
                                <FormInputProps label="Email:" htmlFor="email" />
                            </div>
                            <FormInput
                                type={FormInputs.EMAIL}
                                className="w-full"
                                id="email"
                                placeholder="Please input your email..."
                                control={control}
                                name="email"
                                errorMsg={errors?.email?.message}
                            />
                        </div>
                        {/* Password */}
                        <div className="flex items-center">
                            <div className={`${LABEL_WIDTH}`}>
                                <FormInputProps label="Password:" htmlFor="password" />
                            </div>
                            <FormInput
                                type={FormInputs.PASSWORD}
                                className="w-full"
                                id="password"
                                placeholder="Please enter your password"
                                control={control}
                                name="password"
                                errorMsg={errors?.password?.message}
                            />
                        </div>
                        {/* Confirm Password */}
                        <div className="flex items-center">
                            <div className={`${LABEL_WIDTH}`}>
                                <FormInputProps label="Confirm Password:" htmlFor="confirmPassword" />
                            </div>
                            <FormInput
                                type={FormInputs.PASSWORD}
                                className="w-full "
                                id="confirmPassword"
                                placeholder="Rewrite your password"
                                control={control}
                                name="confirmPassword"
                                errorMsg={errors?.confirmPassword?.message}
                            />
                        </div>
                        {/* Address */}
                        <div className="flex items-center">
                            <div className={`${LABEL_WIDTH}`}>
                                <FormInputProps label="Address:" htmlFor="address" />
                            </div>
                            <FormInput
                                type={FormInputs.TEXT}
                                className="w-full"
                                id="address"
                                placeholder="Please enter address"
                                control={control}
                                name="address"
                                errorMsg={errors?.address?.message}
                            />
                        </div>
                        {/* Role & Phone */}
                        <div className="flex flex-col md:flex-row gap-4 w-full">
                            {/* role */}
                            <div className="flex items-center flex-1 gap-7">
                                <div className={`${LABEL_WIDTH}`}>
                                    <FormInputProps label="Role:" htmlFor="role" />
                                </div>
                                <MultipleSelect />
                            </div>
                            {/* phone */}
                            <div className="flex items-center flex-1">
                                <div className={`${LABEL_WIDTH}`}>
                                    <FormInputProps label="phone:" htmlFor="phone" />
                                </div>
                                <FormInput
                                    placeholder="Enter phone number"
                                    type={FormInputs.TEXT}
                                    className="w-full"
                                    id="phone"
                                    control={control}
                                    name="phone"
                                />
                            </div>
                        </div>
                        {/* Gender & DOB */}
                        <div className="flex flex-col md:flex-row gap-4 w-full">
                            {/* Gender */}
                            <div className="flex items-center flex-1 gap-7">
                                <div className={`${LABEL_WIDTH} `}>
                                    <FormInputProps label="Gender:" htmlFor="gender" />
                                </div>
                                <div className="w-full ">
                                    <RadioGroupSelect
                                        control={control}
                                        name="gender"
                                    />
                                </div>
                            </div>
                            {/* DOB */}
                            <div className="flex items-center flex-1">
                                <div className={`${LABEL_WIDTH} text-start justify-start`}>
                                    <FormInputProps label="DOB:" htmlFor="dob" />
                                </div>
                                <FormInput
                                    type={FormInputs.DATE}
                                    className="w-full"
                                    id="dob"
                                    control={control}
                                    name="dob"
                                    errorMsg={errors?.dob?.message}
                                />
                            </div>
                        </div>
                        {/* Image URL */}
                        <div className="flex flex-col md:flex-row md:items-start w-full">
                            <div className={`${LABEL_WIDTH}`}>
                                <FormInputProps label="Image URL:" htmlFor="image" />
                            </div>
                            <div className="w-full ">
                                <div className="max-w-sm h-27 overflow-hidden flex" >
                                    <UploadFile


                                    />
                                </div>
                            </div>
                        </div>
                        {/* Submit Button */}
                        <div className=" text-center">
                            <button
                                type="submit"
                                className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-md shadow"
                            >
                                <div className="flex text-center justify-center gap-2">
                                    <div className="mt-1">
                                        <FaPaperPlane />
                                    </div>
                                    <div>
                                        Register
                                    </div>
                                </div>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default RegisterPage;
