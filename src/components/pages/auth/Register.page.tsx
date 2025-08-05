import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Link } from "react-router";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GenderEnum, UserRoles } from "@/constant/constant";
import DateTimePicker from "@/components/smallComponents/dateTimePicker";
import UploadFile from "@/components/smallComponents/uploadFile";
const RegisterPage = () => {

    const form = useForm({
        defaultValues: {
            name: "",
        },
    })
    return (
        <div className="w-full px-10 py-6 bg-">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-4">
                {/* Logo */}
                <div className="w-24 h-24 flex-shrink-0">
                    <img
                        src="https://thumbs.dreamstime.com/b/letter-ms-logotype-design-company-name-colored-blue-swoosh-vector-logo-business-identity-203870151.jpg"
                        alt="Mart Sewa Logo"
                        className="w-full h-full object-contain"
                    />
                </div>
                {/* Text Section */}
                <div className="text-center sm:text-left ">
                    <nav>
                        <Link to="/">
                            <h1 className="font-extrabold text-3xl sm:text-4xl text-cyan-600 italic">
                                MART SEWA
                            </h1>
                        </Link>
                    </nav>
                    <p className="italic opacity-80 text-sm sm:text-base">
                        Connecting customer with virtual Market
                    </p>
                </div>
            </div>
            <div className="flex flex-col  sm:flex-row w-full h-screen border-cyan-700 border-2 rounded-4xl">
                {/* Left Side */}
                <div className="flex-1  relative">
                    <img
                        className="w-full h-full object-cover rounded-none sm:rounded-l-4xl"
                        src="https://fulcrumdigital.com/wp-content/uploads/2023/11/blog-featured-image-77.jpg"
                        alt="Left Image"
                    />

                    <div className="absolute inset-0 flex items-center justify-center  ">
                        va
                        <p className="text-white text-xl sm:text-3xl md:text-4xl font-bold text-center px-4 ">
                            Welcome to MART SEWA
                        </p>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex-1 ">
                    <div className="w-full h-full object-cover rounded-none sm:rounded-r-3xl border-cyan-700">
                        <div className="w-fit">
                            <p className="text-4xl text-cyan-700 font-bold  ml-65 mt-10  ">
                                Register
                            </p>
                        </div>
                        <div >

                            <div>
                                <FormLabel 
                                >

                                </FormLabel>
                            </div>
                            {/* <Form {...form} >
                                <FormField control={form.control}
                                    name="name"
                                    render={(field) => (
                                        <FormItem>
                                            <div className="ml-20 mr-10 mt-5">
                                                <div className="flex flex-row  md:flex-col lg:flex-row sm:flex-col  gap-5">
                                                    <FormLabel htmlFor="name" >Name:</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your name" {...field} />
                                                    </FormControl>
                                                </div>
                                            </div>
                                            <div className="ml-20 mr-10 mt-5">
                                                <div className="flex flex-row  md:flex-col lg:flex-row sm:flex-col  gap-5">
                                                    <FormLabel htmlFor="email" >Email:</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your email" {...field} />
                                                    </FormControl>
                                                </div>
                                            </div>
                                            <div className="ml-20 mr-10 mt-5">
                                                <div className="flex flex-row  md:flex-col lg:flex-row sm:flex-col  gap-5">
                                                    <div>
                                                        <FormLabel htmlFor="password" >Password:</FormLabel>
                                                    </div>
                                                    <FormControl>
                                                        <Input placeholder="Enter your password" {...field} />
                                                    </FormControl>
                                                </div>
                                            </div>
                                            <div className="ml-20 mr-10 mt-5">
                                                <div className="flex flex-row  md:flex-col lg:flex-row sm:flex-col  gap-5">
                                                    <FormLabel htmlFor="confirmPassword" >Confirm Password:</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your name" {...field} />
                                                    </FormControl>
                                                </div>
                                            </div>
                                            <div className="ml-20 mr-10 mt-5">
                                                <div className="flex justify-between">
                                                    <div className="flex flex-row  md:flex-col lg:flex-row sm:flex-col  gap-5">
                                                        <FormLabel htmlFor="address" >Address:</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Enter your name " className="w-[280px]" {...field} />
                                                        </FormControl>
                                                    </div>
                                                    <div className="flex flex-row  md:flex-col lg:flex-row sm:flex-col  gap-5">
                                                        <FormLabel htmlFor="role" >Role:</FormLabel>
                                                        <FormControl>
                                                            <Select>
                                                                <SelectTrigger className="w-[180px]">
                                                                    <SelectValue placeholder="Customer" />
                                                                    <SelectContent className="bg-white" defaultValue={UserRoles.CUSTOMER}>
                                                                        <SelectItem value={UserRoles.ADMIN}>Admin</SelectItem>
                                                                        <SelectItem value={UserRoles.SELLER}>Seller</SelectItem>
                                                                        <SelectItem value={UserRoles.CUSTOMER}>Customer</SelectItem>
                                                                    </SelectContent>
                                                                </SelectTrigger>
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ml-20 mr-10 mt-5">
                                                <div className="flex justify-between">
                                                    <div className="flex flex-row  md:flex-col lg:flex-row sm:flex-col  gap-5">
                                                        <FormLabel htmlFor="phone" >Phone:</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="+977 987654321" className="w-[280px]" {...field} />
                                                        </FormControl>
                                                    </div>
                                                    <div className="flex flex-row  md:flex-col lg:flex-row sm:flex-col  gap-5">
                                                        <FormLabel htmlFor="gender" >Gender:</FormLabel>
                                                        <FormControl>
                                                            <Select>
                                                                <SelectTrigger className="w-[180px]">
                                                                    <SelectValue placeholder="Male" />
                                                                    <SelectContent className="bg-white" defaultValue={GenderEnum.MALE}>
                                                                        <SelectItem value={GenderEnum.MALE}>Male</SelectItem>
                                                                        <SelectItem value={GenderEnum.FEMALE}>Female</SelectItem>
                                                                        <SelectItem value={GenderEnum.OTHER}>Other</SelectItem>
                                                                    </SelectContent>
                                                                </SelectTrigger>
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ml-20 mr-10 mt-5">
                                                <div className="flex justify-between">
                                                    <div className="flex flex-row  md:flex-col lg:flex-row sm:flex-col  gap-5">
                                                        <FormLabel htmlFor="dob" >DOB:</FormLabel>
                                                        <FormControl>
                                                            <DateTimePicker />
                                                        </FormControl>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="ml-20 mr-10 mt-5">
                                                <div className="flex flex-row   md:flex-col lg:flex-row sm:flex-col  gap-5">
                                                    <FormLabel className="justify-baseline items-baseline" htmlFor="gender" >Image:</FormLabel>
                                                    <FormControl >
                                                        <UploadFile />
                                                    </FormControl>
                                                </div>
                                            </div>
                                        </FormItem>
                                    )}
                                />
                            </Form> */}
                        </div>
                    </div>

                </div>
            </div>

        </div>


    );
};

export default RegisterPage;
//<h1 className="font-extrabold text-4xl  text-cyan-600 italic mt-10">MART SEWA </h1>
