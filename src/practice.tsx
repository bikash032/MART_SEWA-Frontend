import FormInput from "@/components/form/FormInput";
import { FormInputProps } from "@/components/form/formLabel";
import { PageTitle } from "@/components/page-title/PageTitle";
import UploadFile from "@/components/smallComponents/uploadFile";
import { FormInputs, GenderEnum, UserRoles } from "@/constant/constant";
import { NavLink } from "react-router";
import LeftHandSideOfAuthPage from "./leftHandSideOfAuth";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaPaperPlane } from "react-icons/fa6";
import { MultipleSelect } from "@/components/form/MultipleSelect";
import { RadioGroupSelect } from "@/components/form/FormInputsAll";
import { RegisterDTO, type IRegisterData } from "@/contract/auth.contract";
import { yupResolver } from "@hookform/resolvers/yup";

// This matches the *form* values (strings from inputs, not enums/numbers yet)
interface IRegisterFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string; // from <select> or multiselect
  gender: string; // from radio group
  phone?: string;
  address?: string;
  dob?: string;
  image?: any;
}

const LABEL_WIDTH = "w-40"; // consistent label width

const RegisterPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IRegisterFormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: UserRoles.CUSTOMER, // enum will be cast later
      gender: GenderEnum.MALE,
      phone: "",
      address: "",
      dob: "",
      image: "",
    },
    resolver: yupResolver(RegisterDTO),
  });

  const submitHandle: SubmitHandler<IRegisterFormValues> = (formData) => {
    // Transform into IRegisterData
    const payload: IRegisterData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      role: formData.role as UserRoles,
      gender: formData.gender as GenderEnum,
      phone: formData.phone ? Number(formData.phone) : null,
      address: formData.address ?? null,
      dob: formData.dob ? new Date(formData.dob) : null,
      image: formData.image ?? "",
    };

    console.log("Submitting:", payload);
    // TODO: send payload to API
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-cyan-600 to-cyan-50 flex flex-col md:flex-row">
      <LeftHandSideOfAuthPage />

      <div className="flex-1 pt-20 md:pd-10 overflow-auto">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10 border border-cyan-300">
          <div className="flex flex-row justify-between sm:flex-col md:flex-col lg:flex-row">
            <div className="w-5/5 text-end sm:text-start md:text-end lg:text-end">
              <PageTitle
                className="font-semibold not-italic"
                title="Create an account "
              />
            </div>
            <div className="flex space-x-2 mt-5 w-full justify-end">
              <p>Have already an Account?</p>
              <NavLink to="/login">
                <span className="text-cyan-500 italic hover:underline hover:cursor-pointer hover:text-cyan-600">
                  Sign in now!
                </span>
              </NavLink>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(submitHandle)}
            className="space-y-4 mt-5"
          >
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
                <FormInputProps
                  label="Confirm Password:"
                  htmlFor="confirmPassword"
                />
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
              <div className="flex items-center flex-1 gap-7">
                <div className={`${LABEL_WIDTH}`}>
                  <FormInputProps label="Role:" htmlFor="role" />
                </div>
                <MultipleSelect control={control} name="role" />
              </div>

              <div className="flex items-center flex-1">
                <div className={`${LABEL_WIDTH}`}>
                  <FormInputProps label="Phone:" htmlFor="phone" />
                </div>
                <FormInput
                  placeholder="Enter phone number"
                  type={FormInputs.TEXT}
                  className="w-full"
                  id="phone"
                  control={control}
                  name="phone"
                  errorMsg={errors?.phone?.message}
                />
              </div>
            </div>

            {/* Gender & DOB */}
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <div className="flex items-center flex-1 gap-7">
                <div className={`${LABEL_WIDTH}`}>
                  <FormInputProps label="Gender:" htmlFor="gender" />
                </div>
                <div className="w-full">
                  <RadioGroupSelect control={control} name="gender" />
                </div>
              </div>

              <div className="flex items-center flex-1">
                <div className={`${LABEL_WIDTH}`}>
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
                <div className="max-w-sm h-27 overflow-hidden flex">
                  <UploadFile control={control} name="image" />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-md shadow"
              >
                <div className="flex text-center justify-center gap-2">
                  <div className="mt-1">
                    <FaPaperPlane />
                  </div>
                  <div>Register</div>
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
