import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function MultipleSelect() {
  return (
    <Select>
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
  )
}
