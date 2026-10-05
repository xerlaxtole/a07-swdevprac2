import Image from 'next/image'
import TopMenuItem from './TopMenuItem'

export default function TopMenu() {
  return (
    <nav className="fixed top-0 left-0 z-30 flex h-16 w-full items-center justify-between border-b border-neutral-200 bg-white px-6 text-neutral-900">
      <div className="flex items-center">
        <TopMenuItem title="Booking" pageRef="/booking" />
      </div>
      <Image src="/img/logo.png" alt="Venue Explorer logo" width={40} height={40} className="h-10 w-auto" />
    </nav>
  )
}
