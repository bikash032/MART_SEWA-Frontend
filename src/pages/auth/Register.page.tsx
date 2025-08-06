import FormInput from "@/components/form/FormInput";
import { FormInputProps } from "@/components/form/formLabel";
import LinkComponentss from "@/components/linkComponent/LinkComponent";

import { PageTitle } from "@/components/page-title/PageTitle";
import UploadFile from "@/components/smallComponents/uploadFile";
import { FormInputs } from "@/constant/constant";

const LABEL_WIDTH = "w-40"; // 8rem — consistent label width

const RegisterPage = () => {
    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-cyan-600 to-cyan-50 flex flex-col md:flex-row">
            {/* Sidebar */}
            <div className="md:w-2/5 w-full bg-gradient-to-b from-cyan-600 to-cyan-50 flex flex-col justify-center items-center p-6">
                <PageTitle className="text-white text-center" title="Welcome to Mart Sewa!!!" />
                <p className="italic text-sm text-white mb-4 text-center">
                    Connect customers online with Market
                </p>
                <div className="w-full max-w-sm rounded-xl overflow-hidden shadow-lg">
                    <img
                        src="https://www.shutterstock.com/image-photo/online-shopping-ecommerce-technology-internet-260nw-2562256001.jpg"
                        className="w-full h-60 object-cover"
                        alt="E-commerce"
                    />
                </div>
            </div>

            {/* Form Section */}
            <div className="flex-1 p-6 md:p-10 overflow-auto">
                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10 border border-cyan-300">
                    <div className="flex">
                        <div>
                            <PageTitle className="text-center mb-6" title="Register New User!" />
                        </div>
                        <div>
                           <LinkComponentss to="/login" className="text-black" title="hello"></LinkComponentss>
                        </div>
                    </div>
                    <form className="space-y-4">

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
                            />
                        </div>

                        {/* Role & Phone */}
                        <div className="flex flex-col md:flex-row gap-4 w-full">
                            {/* Role */}
                            <div className="flex items-center flex-1 gap-7">
                                <div className={`${LABEL_WIDTH}`}>
                                    <FormInputProps label="Role:" htmlFor="role" />
                                </div>
                                <FormInput
                                    type={FormInputs.TEXT}
                                    className="w-full"
                                    id="role"
                                    placeholder="Enter role"
                                />
                            </div>

                            {/* Phone */}
                            <div className="flex items-center flex-1 ">
                                <div className={`${LABEL_WIDTH}`}>
                                    <FormInputProps label="Phone:" htmlFor="phone" />
                                </div>
                                <FormInput
                                    type={FormInputs.TEXT}
                                    className="w-full"
                                    id="phone"
                                    placeholder="Enter phone number"
                                />
                            </div>
                        </div>

                        {/* Gender & DOB */}
                        <div className="flex flex-col md:flex-row gap-4 w-full">
                            {/* Gender */}
                            <div className="flex items-center flex-1 gap-7">
                                <div className={`${LABEL_WIDTH}`}>
                                    <FormInputProps label="Gender:" htmlFor="gender" />
                                </div>
                                <FormInput
                                    type={FormInputs.TEXT}
                                    className="w-full"
                                    id="gender"
                                    placeholder="Enter gender"
                                />
                            </div>

                            {/* DOB */}
                            <div className="flex items-center flex-1">
                                <div className={`${LABEL_WIDTH}`}>
                                    <FormInputProps label="DOB:" htmlFor="dob" />
                                </div>
                                <FormInput
                                    type={FormInputs.DATE}
                                    className="w-full"
                                    id="dob"
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
                                    <UploadFile />
                                </div>
                            </div>
                        </div>



                        {/* Submit Button */}
                        <div className="pt-2 text-center">
                            <button
                                type="submit"
                                className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-md shadow"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
