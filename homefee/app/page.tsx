import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MaintenanceFeeForm } from "./pages/form"
import { HeaderMenu } from "@/components/headermenu"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between px-16 bg-white dark:bg-black ">
        <h2
          className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center
"
        >
          Hausapp
        </h2>
        <div className="my-2">
        Pay monthly maintenance without trouble now
        </div>
        <MaintenanceFeeForm />
      </main>
    </div>
  )
}
