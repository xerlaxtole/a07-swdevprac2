import Button from '@mui/material/Button'
import DateReserve from '@/components/DateReserve'

export default function Booking() {
  return (
    <main className="mx-auto max-w-md p-8">
      <h1 className="mb-6 text-2xl font-medium">Venue Booking</h1>
      <form className="flex flex-col items-start gap-6">
        <DateReserve />
        <Button variant="contained" type="submit" name="Book Venue">
          Book Venue
        </Button>
      </form>
    </main>
  )
}
