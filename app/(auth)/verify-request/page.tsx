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
import { Loader, Mail, Shield, RotateCcw, ArrowLeft, CheckCircle } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition, useEffect } from "react";
import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";

export default function VerifyRequest() {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [emailPending, startTransition] = useTransition();
  const [resendPending, startResendTransition] = useTransition();
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const params = useSearchParams();
  const email = params.get("email") as string;
  const isOtpCompleted = otp.length === 6;

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  function verifyOtp() {
    if (!isOtpCompleted) return;
    
    startTransition(async () => {
      await authClient.signIn.emailOtp({
        email,
        otp,
        fetchOptions: {
          onSuccess: () => {
            toast.success("Email verified successfully!");
            router.push("/dashboard");
          },
          onError: (error) => {
            toast.error("Invalid verification code. Please try again.");
            setOtp(""); // Clear the OTP on error
          },
        },
      });
    });
  }

  function resendOtp() {
    if (!canResend) return;
    
    startResendTransition(async () => {
      await authClient.emailOtp.sendVerificationOtp({
        email,
        type: "sign-in",
        fetchOptions: {
          onSuccess: () => {
            toast.success("New verification code sent!");
            setCountdown(60);
            setCanResend(false);
            setOtp(""); // Clear current OTP
          },
          onError: () => {
            toast.error("Failed to resend verification code. Please try again.");
          },
        },
      });
    });
  }

  // Auto-verify when OTP is complete
  useEffect(() => {
    if (isOtpCompleted && !emailPending) {
      verifyOtp();
    }
  }, [otp, isOtpCompleted]);

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
          <CardHeader className="space-y-6 pb-8">
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl flex items-center justify-center shadow-lg">
                <Mail className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="text-center space-y-3">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Check your email
              </CardTitle>
              <CardDescription className="text-gray-600 text-base leading-relaxed">
                We sent a 6-digit verification code to
                <br />
                <span className="font-semibold text-blue-600">{email}</span>
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="space-y-6">
              <div className="space-y-4">
                <label className="text-sm font-medium text-gray-700 block text-center">
                  Enter the 6-digit code
                </label>
                <div className="flex justify-center">
                  <InputOTP
                    maxLength={6}
                    value={otp}
                    onChange={(value) => setOtp(value)}
                    className="gap-3"
                  >
                    <InputOTPGroup className="gap-3">
                      {[0, 1, 2, 3, 4, 5].map((index) => (
                        <InputOTPSlot
                          key={index}
                          index={index}
                          className="w-12 h-12 text-lg font-bold border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg shadow-sm transition-all duration-200 hover:border-blue-400"
                        />
                      ))}
                    </InputOTPGroup>
                  </InputOTP>
                </div>
                <p className="text-xs text-gray-500 text-center">
                  The code will be automatically verified when complete
                </p>
              </div>

              <Button
                onClick={verifyOtp}
                disabled={!isOtpCompleted || emailPending}
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {emailPending ? (
                  <>
                    <Loader className="size-4 animate-spin" />
                    <span className="ml-2">Verifying...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle className="size-4" />
                    <span className="ml-2">Verify Account</span>
                  </>
                )}
              </Button>

              <div className="text-center space-y-4">
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <span className="text-gray-500">Didn't receive the code?</span>
                  <Button
                    variant="link"
                    onClick={resendOtp}
                    disabled={resendPending || !canResend}
                    className="cursor-pointer p-0 h-auto font-semibold text-blue-600 hover:text-blue-700 hover:underline disabled:text-gray-400"
                  >
                    {resendPending ? (
                      <>
                        <Loader className="size-3 animate-spin mr-1" />
                        Sending...
                      </>
                    ) : canResend ? (
                      <>
                        <RotateCcw className="size-3 mr-1" />
                        Resend code
                      </>
                    ) : (
                      <>
                        Resend in {countdown}s
                      </>
                    )}
                  </Button>
                </div>
                
                <div className="text-xs text-gray-500">
                  <p>Check your spam folder if you don't see the email</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
