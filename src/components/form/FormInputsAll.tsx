import React from "react"
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { Input } from "../ui/input"
// If you're using react-select, import as below:
import ReactSelect from "react-select"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"

// ===== Typed Interfaces =====

interface SelectOption {
  value: string
  label: string
}

interface IMainFormInput {
  firstName: string
  lastName: string
  password: string
  iceCreamType: SelectOption | null
  userRole: string
  gender: string
}

// ===== Field Components =====

// Label Component
export const FormInputLabel = ({
  htmlFor,
  className = "w-1/3 text-xl font-medium text-cyan-900",
  label,
}: {
  htmlFor?: string
  className?: string
  label: React.ReactNode
}) => (
  <Label htmlFor={htmlFor} className={className}>
    {label}
  </Label>
)

// MultipleSelect - Custom select using shadcn/ui select
export function MultipleSelect({
  control,
  name,
}: {
  control: any
  name: string
}) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={{ required: "Role required" }}
      render={({ field }) => (
        <Select onValueChange={field.onChange} value={field.value}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select role" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="customer">Customer</SelectItem>
              <SelectItem value="seller">Seller</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    />
  )
}

export function RadioGroupSelect({
  control,
  name,
}: {
  control: any
  name: string
}) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue="male"
      render={({ field }) => (
        <RadioGroup
          value={field.value}
          onValueChange={field.onChange}
          className="flex gap-6 mb-3"
        >
          <div className="flex gap-3">
            <RadioGroupItem value="male" id="male" />
            <Label htmlFor="male">Male</Label>
          </div>
          <div className="flex gap-3">
            <RadioGroupItem value="female" id="female" />
            <Label htmlFor="female">Female</Label>
          </div>
          <div className="flex gap-3">
            <RadioGroupItem value="other" id="other" />
            <Label htmlFor="other">Other</Label>
          </div>
        </RadioGroup>
      )}
    />
  )
}

// RHF-controlled react-select field
export function ReactSelectField({
  control,
  name,
  options,
}: {
  control: any
  name: string
  options: SelectOption[]
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <ReactSelect
          options={options}
          value={field.value}
          onChange={field.onChange}
        />
      )}
    />
  )
}

// ===== Main Form Component =====

const iceCreamOptions: SelectOption[] = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
]

export default function AllFieldsOnPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IMainFormInput>({
    defaultValues: {
      firstName: "",
      lastName: "",
      password: "",
      iceCreamType: null,
      userRole: "",
      gender: "male",
    },
  })

  const onSubmit: SubmitHandler<IMainFormInput> = (data) => {
    console.log(data)
  }

  return (
    <form
      className="max-w-2xl mx-auto flex flex-col gap-4 p-8 border rounded shadow"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormInputLabel htmlFor="firstName" label="First Name" />
      <Controller
        name="firstName"
        control={control}
        rules={{ required: "First Name required" }}
        render={({ field }) => (
          <Input
            {...field}
            id="firstName"
            type="text"
            placeholder="Enter your first name"
            className="mb-2"
          />
        )}
      />
      {errors.firstName && (
        <span className="text-sm text-red-600">{errors.firstName.message}</span>
      )}

      <FormInputLabel htmlFor="lastName" label="Last Name" />
      <Controller
        name="lastName"
        control={control}
        rules={{ required: "Last Name required" }}
        render={({ field }) => (
          <Input
            {...field}
            id="lastName"
            type="text"
            placeholder="Enter your last name"
            className="mb-2"
          />
        )}
      />
      {errors.lastName && (
        <span className="text-sm text-red-600">{errors.lastName.message}</span>
      )}

      <FormInputLabel htmlFor="password" label="Password" />
      <Controller
        name="password"
        control={control}
        rules={{ required: "Password required" }}
        render={({ field }) => (
          <Input
            {...field}
            id="password"
            type="password"
            placeholder="Enter password"
            className="mb-2"
          />
        )}
      />
      {errors.password && (
        <span className="text-sm text-red-600">{errors.password.message}</span>
      )}

      <FormInputLabel label="Choose Ice Cream (react-select)" />
      <ReactSelectField
        control={control}
        name="iceCreamType"
        options={iceCreamOptions}
      />
      {errors.iceCreamType && (
        <span className="text-sm text-red-600">
          {errors.iceCreamType.message as string}
        </span>
      )}

      <FormInputLabel label="Role (custom select)" />
      <MultipleSelect control={control} name="userRole" />
      {errors.userRole && (
        <span className="text-sm text-red-600">{errors.userRole.message}</span>
      )}

      <FormInputLabel label="Gender (radio group)" />
      <RadioGroupSelect control={control} name="gender" />
      {errors.gender && (
        <span className="text-sm text-red-600">{errors.gender.message}</span>
      )}

      <button
        type="submit"
        className="bg-cyan-700 text-white rounded px-4 py-2 mt-4"
      >
        Submit
      </button>
    </form>
  )
}
