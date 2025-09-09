"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader, Loader2, Send } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

export function LoginForm() {
  const router = useRouter();
  const [googlePending, startGoogleTransition] = useTransition();
  const [emailPending, startEmailTransition] = useTransition();
  const [email, setEmail] = useState("");

  async function signInWithGoogle() {
    startGoogleTransition(async () => {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
        fetchOptions: {
          onSuccess: () => {
            toast.success("Signed in with Google, you will be redirected...");
          },
          onError: (error) => {
            toast.error("Internal Server Error");
          },
        },
      });
    });
  }

  function signInWithEmail() {
    startEmailTransition(async () => {
      await authClient.emailOtp.sendVerificationOtp({
        email: email,
        type: "sign-in",
        fetchOptions: {
          onSuccess: () => {
            toast.success("Email sent");
            router.push(`/verify-request?email=${email}`);
          },
          onError: () => {
            toast.error("Error sending email");
          },
        },
      });
    });
  }

  return (
    <Card className="w-full max-w-md mx-auto border border-blue-100/60 shadow-xl bg-gradient-to-b from-white to-blue-50/20 rounded-2xl backdrop-blur-sm">
  <CardHeader className="space-y-3 pb-8 text-center">
    <CardTitle className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent drop-shadow-sm">
      Welcome back!
    </CardTitle>
    <CardDescription className="text-base text-gray-500">
      Choose your preferred sign-in method
    </CardDescription>
  </CardHeader>

  <CardContent className="space-y-6 px-6 pb-8">
    {/* Social Login */}
    <div className="grid grid-cols-1 gap-3">
      <Button
        disabled={googlePending}
        onClick={signInWithGoogle}
        className="cursor-pointer h-12 font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-blue-200 bg-white hover:bg-blue-50 text-blue-600 rounded-xl shadow-sm hover:shadow-md"
        variant="outline"
      >
        {googlePending ? (
          <Loader className="size-4 animate-spin" />
        ) : (
          <>
            <GoogleIcon className="size-5" />
            <span className="hidden sm:inline ml-2">Continue with Google</span>
          </>
        )}
      </Button>
    </div>

    {/* Divider */}
    <div className="relative flex items-center justify-center">
      <span className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <span className="relative bg-white px-3 py-0.5 rounded-full text-xs font-medium text-gray-400 border border-blue-100/60 shadow-sm">
        Or continue with email
      </span>
    </div>

    {/* Email Form */}
    <div className="space-y-4">
      <div className="space-y-2 text-left">
        <Label htmlFor="email" className="text-sm font-semibold text-blue-600">
          Email address
        </Label>
        <Input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="you@example.com"
          required
          className="h-12 border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 rounded-xl shadow-sm"
        />
      </div>

      <Button
        className="cursor-pointer w-full h-12 font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] bg-blue-600 text-white hover:bg-blue-700 rounded-xl shadow-md hover:shadow-blue-200/50"
        onClick={signInWithEmail}
        disabled={emailPending || !email.trim()}
      >
        {emailPending ? (
          <>
            <Loader2 className="size-4 animate-spin mr-2" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send className="size-4 mr-2" />
            <span>Continue with Email</span>
          </>
        )}
      </Button>
    </div>
  </CardContent>
</Card>


  );
}