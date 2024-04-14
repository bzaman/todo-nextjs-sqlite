"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function SignInBtn() {
  return (
    <div>
      <Button onClick={() => signIn(undefined, {callbackUrl: '/tasks'})}>Sign In</Button>
    </div>
  );
}
