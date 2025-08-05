import { useState } from "react"
import { format } from "date-fns"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Button } from "../ui/button"
import { Calendar as CalendarIcon } from "lucide-react"
import { Calendar } from "../ui/calendar"
const DateTimePicker = () => {
    const [date, setDate] = useState<Date>()
    return <>
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    data-empty={!date}
                    className="data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left font-normal"
                >
                    <CalendarIcon />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white">
                <Calendar mode="single" selected={date} onSelect={setDate} />
            </PopoverContent>
        </Popover>
    </>
}
export default DateTimePicker