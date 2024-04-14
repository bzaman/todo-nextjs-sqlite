import { CheckboxIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { ModeToggle } from "@/components/mode-toggle";
import AvatarMenu from "@/components/avatar-menu";

export default function Header() {
  return (
    <div className="flex items-center justify-between p-3 border-b-2">
      <Link href="/">
        <CheckboxIcon className="h-8 w-8" />
      </Link>
      <div className="flex items-center gap-3">
        <ModeToggle />
        <AvatarMenu />
      </div>
    </div>
  )
}
