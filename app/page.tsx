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
        <h1 className="text-xl text-stone-400 font-normal font-atkinson">To Do Prototype</h1>
        <svg
          width="45"
          height="15"
          viewBox="0 0 45 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.200012 0.640015V2.26002H4.64001V14H6.52001V2.26002H10.96V0.640015H0.200012ZM14.9536 3.92002C12.6736 3.92002 10.1936 5.50002 10.1936 9.08002C10.1936 12.66 12.6736 14.24 14.9536 14.24C17.2536 14.24 19.7136 12.66 19.7136 9.08002C19.7136 5.50002 17.2536 3.92002 14.9536 3.92002ZM14.9536 12.76C13.5336 12.76 11.9936 11.64 11.9936 9.08002C11.9936 6.52001 13.5336 5.40002 14.9536 5.40002C16.3936 5.40002 17.9136 6.52001 17.9136 9.08002C17.9136 11.64 16.3936 12.76 14.9536 12.76ZM21.9888 14V0.640015H22.0202H25.6288H25.6549C29.8887 0.640015 32.9442 2.21985 32.9442 7.29931C32.9442 12.0639 30.2975 13.7626 26.5176 13.9752C26.2278 13.992 25.9313 14 25.6288 14H21.9888ZM39.4458 3.92002C37.1658 3.92002 34.6858 5.50002 34.6858 9.08002C34.6858 12.66 37.1658 14.24 39.4458 14.24C41.7458 14.24 44.2058 12.66 44.2058 9.08002C44.2058 5.50002 41.7458 3.92002 39.4458 3.92002ZM39.4458 12.76C38.0258 12.76 36.4858 11.64 36.4858 9.08002C36.4858 6.52001 38.0258 5.40002 39.4458 5.40002C40.8858 5.40002 42.4058 6.52001 42.4058 9.08002C42.4058 11.64 40.8858 12.76 39.4458 12.76Z"
            fill="#444"
          />
        </svg>

        <div>
          {session ? (
            <Link href="/tasks">
              <Button>
                Go to app <ArrowRightIcon className="ml-2" />{" "}
              </Button>
            </Link>
          ) : (
            <SignInBtn />
          )}
        </div>
      </div>
    </div>
  );
}
