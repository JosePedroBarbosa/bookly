import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-svh flex-col">
      <Link
        href="/"
        className={buttonVariants({
          variant: "outline",
          className: "absolute top-4 left-4 z-10",
        })}
      >
        <ArrowLeft className="size-4" />
        Back
      </Link>
      
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md space-y-8">
          <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            {children}
          </div>
        </div>
      </div>

      <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          <div className="text-balance text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link href="/terms" className="hover:text-primary hover:underline cursor-pointer font-medium">
              Terms of service
            </Link>
            {" "}and{" "}
            <Link href="/privacy" className="hover:text-primary hover:underline cursor-pointer font-medium">
              Privacy Policy
            </Link>
            .
          </div>
        </div>
      </footer>
    </div>
  );
}