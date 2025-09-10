"use client";

import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu, Home, StarIcon, User, LogIn, DollarSign, HeartIcon } from "lucide-react";
import UserDropdown from "./UserDropdown";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { getUserInitials } from "@/lib/utils"; 

const navigationItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Features", href: "#features", icon: StarIcon },
  { name: "Testimonials", href: "#testimonials", icon: HeartIcon },
  { name: "Pricing", href: "#pricing", icon: DollarSign },
];

export function Navbar() {
  const { data: session, isPending } = authClient.useSession();
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  async function signOut() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
          toast.success("Signed out Successfully");
        },
        onError: () => {
          toast.error("Failed to sign out.");
        },
      },
    });
  }

  const userName =
    session?.user?.name && session.user.name.length > 0
      ? session.user.name
      : session?.user?.email
      ? session.user.email.split("@")[0]
      : "User";

  const userInitials = getUserInitials(userName);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div
        className="container flex min-h-16 items-center justify-between mx-auto px-4 md:px-6 lg:px-8"
        suppressHydrationWarning={true}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl sm:text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
            Bookly
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-10 flex-1 justify-center">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center space-x-4">
          {isPending ? null : session ? (
            <UserDropdown
              email={session.user.email}
              name={userName}
              image={session.user.image ?? undefined} 
            />
          ) : (
            <Link href="/login" className={`${buttonVariants({ variant: "blue" })} w-full justify-center`}>
              Get Started
            </Link>
          )}
        </div>

        {/* Mobile menu */}
        <div className="md:hidden flex items-center space-x-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="p-2 hover:bg-accent rounded-md transition-colors cursor-pointer">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px] p-0">
              <SheetHeader className="px-4 py-4 border-b">
                <SheetTitle className="text-left flex items-center justify-start">
                  <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                    Bookly
                  </span>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col h-full">
                {/* Navigation Links */}
                <div className="flex-1 px-4">
                  <nav className="space-y-1">
                    {navigationItems.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center space-x-3 px-2 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground group justify-start"
                          onClick={() => setIsOpen(false)}
                        >
                          <IconComponent className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground" />
                          <span>{item.name}</span>
                        </Link>
                      );
                    })}
                  </nav>
                </div>

                {/* User Section */}
                <div className="border-t px-4 py-4">
                  {isPending ? (
                    <div className="flex items-center space-x-3 px-0 py-3">
                      <div className="h-8 w-8 rounded-full bg-muted animate-pulse" />
                      <div className="h-4 w-20 bg-muted rounded animate-pulse" />
                    </div>
                  ) : session ? (
                    <div className="space-y-3">
                      {/* User Info */}
                      <div className="flex items-center space-x-3 px-2 py-2 rounded-lg bg-muted/50">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold">
                          {session.user.image ? (
                            <Image
                              src={session.user.image}
                              alt={userName}
                              width={32}
                              height={32}
                              className="rounded-full"
                            />
                          ) : (
                            userInitials
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">
                            {userName}
                          </p>
                          <p className="text-xs text-muted-foreground truncate">
                            {session.user.email}
                          </p>
                        </div>
                      </div>

                      {/* User Actions */}
                      <div className="space-y-1">
                        <Link
                          href="/profile"
                          className="flex items-center space-x-3 px-2 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground justify-start"
                          onClick={() => setIsOpen(false)}
                        >
                          <User className="h-4 w-4 text-muted-foreground" />
                          <span>Profile</span>
                        </Link>
                        <button
                          onClick={() => {
                            signOut();
                            setIsOpen(false);
                          }}
                          className="flex items-center space-x-3 px-2 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground w-full text-left justify-start cursor-pointer"
                        >
                          <LogIn className="h-4 w-4 text-muted-foreground rotate-180" />
                          <span>Sign Out</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Link
                        href="/login"
                        className={`${buttonVariants({ variant: "blue" })} w-full justify-center`}
                        onClick={() => setIsOpen(false)}
                      >
                        Get Started
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}