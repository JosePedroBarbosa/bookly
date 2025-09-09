"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { authClient } from "@/lib/auth-client";
import { Loader, Mail, Shield, RotateCcw } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";

export default function VerifyRequest() {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [emailPending, startTransition] = useTransition();
  const [resendPending, startResendTransition] = useTransition();
  const params = useSearchParams();
  const email = params.get("email") as string;
  const isOtpCompleted = otp.length === 6;

  function verifyOtp() {
    startTransition(async () => {
      await authClient.signIn.emailOtp({
        email: email,
        otp: otp,
        fetchOptions: {
          onSuccess: () => {
            toast.success("Email verified");
            router.push("/");
          },
          onError: () => {
            toast.error("Error verifying Email/OTP");
          },
        },
      });
    });
  }

  function resendCode() {
    startResendTransition(async () => {
      await authClient.emailOtp.sendVerificationOtp({
        email: email,
        type: "sign-in",
        fetchOptions: {
          onSuccess: () => {
            toast.success("Verification code sent again");
            setOtp(""); // Limpa o campo OTP
          },
          onError: () => {
            toast.error("Error resending code");
          },
        },
      });
    });
  }

  return (
    <Card className="border border-blue-100 shadow-lg bg-white/80 backdrop-blur-xl rounded-2xl">
      <CardHeader className="text-center space-y-4 pb-6">
        <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-2 border border-blue-100">
          <Mail className="w-8 h-8 text-blue-600" />
        </div>
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          Please check your email
        </CardTitle>
        <CardDescription className="text-base leading-relaxed max-w-sm mx-auto text-gray-500">
          We have sent a verification code
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-8 px-6 pb-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <InputOTP
              value={otp}
              onChange={(value) => setOtp(value)}
              maxLength={6}
              className="gap-3"
            >
              <InputOTPGroup className="gap-2">
                <InputOTPSlot
                  index={0}
                  className="w-12 h-12 text-lg font-semibold border-2 border-blue-100 focus:border-blue-500 bg-white/70 backdrop-blur-md transition-all duration-200 focus:ring-2 focus:ring-blue-100 rounded-xl"
                />
                <InputOTPSlot
                  index={1}
                  className="w-12 h-12 text-lg font-semibold border-2 border-blue-100 focus:border-blue-500 bg-white/70 backdrop-blur-md transition-all duration-200 focus:ring-2 focus:ring-blue-100 rounded-xl"
                />
                <InputOTPSlot
                  index={2}
                  className="w-12 h-12 text-lg font-semibold border-2 border-blue-100 focus:border-blue-500 bg-white/70 backdrop-blur-md transition-all duration-200 focus:ring-2 focus:ring-blue-100 rounded-xl"
                />
              </InputOTPGroup>
              <div className="w-4 flex justify-center">
                <div className="w-2 h-0.5 bg-blue-100 rounded-full" />
              </div>
              <InputOTPGroup className="gap-2">
                <InputOTPSlot
                  index={3}
                  className="w-12 h-12 text-lg font-semibold border-2 border-blue-100 focus:border-blue-500 bg-white/70 backdrop-blur-md transition-all duration-200 focus:ring-2 focus:ring-blue-100 rounded-xl"
                />
                <InputOTPSlot
                  index={4}
                  className="w-12 h-12 text-lg font-semibold border-2 border-blue-100 focus:border-blue-500 bg-white/70 backdrop-blur-md transition-all duration-200 focus:ring-2 focus:ring-blue-100 rounded-xl"
                />
                <InputOTPSlot
                  index={5}
                  className="w-12 h-12 text-lg font-semibold border-2 border-blue-100 focus:border-blue-500 bg-white/70 backdrop-blur-md transition-all duration-200 focus:ring-2 focus:ring-blue-100 rounded-xl"
                />
              </InputOTPGroup>
            </InputOTP>
          </div>

          <div className="text-center space-y-2">
            <p className="text-sm text-blue-600 flex items-center justify-center gap-2 font-medium">
              <Shield className="w-4 h-4" />
              Enter the 6-digit verification code
            </p>
            <p className="text-xs text-gray-400">
              Code expires in 10 minutes
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <Button
            onClick={verifyOtp}
            disabled={emailPending || !isOtpCompleted}
            className="w-full h-12 cursor-pointer font-medium transition-all duration-200 rounded-lg bg-blue-600 text-white hover:bg-blue-700 hover:scale-[1.02] disabled:opacity-60"
          >
            {emailPending ? (
              <>
                <Loader className="size-4 animate-spin" />
                <span className="ml-2">Verifying...</span>
              </>
            ) : (
              <>
                <Shield className="size-4" />
                <span className="ml-2">Verify Account</span>
              </>
            )}
          </Button>

          <Button
            variant="outline"
            onClick={resendCode}
            disabled={resendPending}
            className="w-full h-10 cursor-pointer font-medium transition-all duration-200 rounded-lg border-blue-200 text-blue-700 hover:bg-blue-50 hover:scale-[1.02] disabled:opacity-60"
          >
            {resendPending ? (
              <>
                <Loader className="size-4 animate-spin" />
                <span className="ml-2">Sending...</span>
              </>
            ) : (
              <>
                <RotateCcw className="size-4" />
                <span className="ml-2">Resend Code</span>
              </>
            )}
          </Button>
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-400">
            Didn't receive the code? Check your spam folder or click resend above.
          </p>
        </div>
      </CardContent>
    </Card>

  );
}
