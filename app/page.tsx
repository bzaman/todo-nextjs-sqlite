// import { ModeToggle } from "@/components/mode-toggle";
import SignInBtn from "@/components/signin-btn";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col gap-5">
        {/* <ModeToggle /> */}
        <h1 className="text-xl text-stone-400 font-light">To Do Prototype</h1>
        <div>{session ? <Link href="/tasks"><Button>Go to app <ArrowRightIcon className="ml-2" /> </Button></Link> : <SignInBtn />}</div>
      </div>
    </div>
  );
}
