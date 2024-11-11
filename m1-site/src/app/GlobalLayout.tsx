'use client'
import { usePathname, useRouter } from "next/navigation"
import { FC, ReactElement } from "react"
import Image from "next/image"
import './GlobalLayout.css'
import { Button } from "./components/Button"

type Props = {
  children: ReactElement | ReactElement[]
}

export const GlobalLayout: FC<Props> = ({ children }) => {
  const router = useRouter()
  const pathname = usePathname()
  
  // Nous permet de changer le style pour savoir sur quelle page nous sommes
  const getButtonStyle = (path: string) => {
    return pathname === path
      ? 'bg-red-400 ' // Active state
      : 'hover:bg-red-400 '; // Inactive state
  };

  return (
    <>
      <div className="flex min-h-screen ">
        <div className="text-center   w-24 min-h-screen bg-custom-light">
            <div className="">
                <Button onClick={() => router.push('/')} className={getButtonStyle('/')} aria-label="Home">
                    <Image src="/images/icon/icons8-accueil-24 (1).png" alt="Avatar" width={24} height={24} />
                </Button>
                <Button onClick={() => router.push('/books')} className={getButtonStyle('/books')} aria-label="Books">
                    <Image src="/images/icon/icons8-livre-24 (2).png" alt="Livre" width={24} height={24} />
                </Button>
                <Button onClick={() => router.push('/authors')} className={getButtonStyle('/authors')} aria-label="Authors">
                    <Image src="/images/icon/icons8-avatar-241.png" alt="Avatar" width={24} height={24} />
                </Button>
            </div>
        </div>
        <div className="flex-1 bg-slate-50 p-6 ">
          {children}
        </div>
      </div>
    </>
  )
}
