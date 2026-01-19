import Image from "next/image";
import Link from "next/link";
import { ModeSwitcher } from "@/components/mode-switcher";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <header className="absolute top-0 right-0 flex items-center justify-end p-4">
        <ModeSwitcher />
      </header>
      <div className="flex h-screen flex-col items-center justify-center gap-5 px-5 text-center">
        <Image
          alt="Foundry"
          className="rounded-lg"
          height={256}
          src="/foundry.png"
          width={256}
        />

        <h1 className="font-bold text-4xl">Foundry</h1>

        <p className="text-lg">
          You're place to share your version of the story. A new user first mod
          repository website.
        </p>

        <div className="flex gap-2">
          <Link href="/login">
            <Button>Login</Button>
          </Link>
          <Link href="/signup">
            <Button>Signup</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
