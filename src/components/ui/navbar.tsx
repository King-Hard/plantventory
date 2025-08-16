import Link from "next/link";
import { Button } from "./button";
import { HomeIcon, LogIn, Sprout } from "lucide-react";
import ModeToggle from "../mode-toggle";
import { stackServerApp } from "@/stack";
import { UserButton } from "@stackframe/stack";

export default async function Navbar() {
  const user = await stackServerApp.getUser();
  const app = stackServerApp.urls;

  return (
    <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4 "> 
        <div className="flex justify-between items-center h-16">

          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-primary font-mono tracking-wider"
            >
              🌱 Plantventory
            </Link>
          </div>

          <div className="hidden sm:flex items-center sapace-x-4 gap-2">
            <Button 
              asChild
              variant="ghost"
              className="flex items-center gap-2"
            >
              <Link href="/plants">
                <Sprout className="h-4 w-4"/>
                <span className="hidden lg:inline">Plants</span>
              </Link>
            </Button>

            <Button 
              asChild
              variant="ghost"
              className="flex items-center gap-2"
            >
              <Link href="/">
                <HomeIcon className="h-4 w-4"/>
                <span className="hidden lg:inline">Home</span>
              </Link>
            </Button>

            <div className="">
              <ModeToggle/>
            </div>

            {user ? (
              <>
                <UserButton/>
              </>
            ) : (
              <>
                <Button 
                  asChild
                  variant="ghost"
                  className="flex items-center gap-2"
                >
                  <Link href={app.signIn}>
                    <LogIn className="h-4 w-4"/>
                    <span className="hidden lg:inline">Sign In</span>
                  </Link>
                </Button>
              </>
            )}

          </div>

        </div>
      </div>
    </nav>
  );
};