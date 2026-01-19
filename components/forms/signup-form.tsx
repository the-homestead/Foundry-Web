"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { IoLogoGithub, IoLogoGoogle } from "react-icons/io";
import { IoLogoDiscord } from "react-icons/io5";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { signUp } from "@/server/users";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const formSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: "Username must be at least 3 characters long." })
      .max(32, { message: "Username must be at most 32 characters long." }),
    email: z.email({ message: "Invalid email address." }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long." })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter.",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter.",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one number." })
      .regex(/[^A-Za-z0-9]/, {
        message: "Password must contain at least one special character.",
      }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long." })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter.",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter.",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one number." })
      .regex(/[^A-Za-z0-9]/, {
        message: "Password must contain at least one special character.",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match.",
    path: ["confirmPassword"], // Set the error on the confirmPassword field
  });

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const signInWithGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
    });
  };

  const signInWithDiscord = async () => {
    await authClient.signIn.social({
      provider: "discord",
      callbackURL: "/dashboard",
    });
  };

  const signInWithGithub = async () => {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/dashboard",
    });
  };

  const email = useWatch({
    name: "email",
    control: form.control,
    defaultValue: "",
  });

  const password = useWatch({
    name: "password",
    control: form.control,
    defaultValue: "",
  });

  const confirmPassword = useWatch({
    control: form.control,
    name: "confirmPassword",
    defaultValue: "",
  });

  const isDisabled = !(email && password) || password !== confirmPassword;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    const { success, message } = await signUp(
      values.email,
      values.password,
      values.username
    );

    if (success) {
      toast.success(
        `${message as string} Please check your email for verification.`
      );
      router.push("/dashboard");
    } else {
      toast.error(message as string);
    }

    setIsLoading(false);
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>Signup with your Google account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-6">
                <div className="flex flex-col gap-4">
                  <Button
                    className="w-full"
                    onClick={signInWithGoogle}
                    type="button"
                    variant="outline"
                  >
                    <IoLogoGoogle />
                    Signup W/ Google
                  </Button>
                  <Button
                    className="w-full"
                    onClick={signInWithGithub}
                    type="button"
                    variant="outline"
                  >
                    <IoLogoGithub />
                    Signup W/ Github
                  </Button>
                  <Button
                    className="w-full"
                    onClick={signInWithDiscord}
                    type="button"
                    variant="outline"
                  >
                    <IoLogoDiscord />
                    Signup W/ Discord
                  </Button>
                </div>
                <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-border after:border-t">
                  <span className="relative z-10 bg-card px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Username</FormLabel>
                          <FormControl>
                            <Input placeholder="shadcn" {...field} />
                          </FormControl>
                          {form.formState.errors.username && (
                            <FormMessage>
                              {form.formState.errors.username.message}
                            </FormMessage>
                          )}
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="m@example.com" {...field} />
                          </FormControl>
                          {form.formState.errors.email && (
                            <FormMessage>
                              {form.formState.errors.email.message}
                            </FormMessage>
                          )}
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid gap-3">
                    <div className="flex flex-col gap-4">
                      <Tooltip>
                        <TooltipTrigger>
                          <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="********"
                                    {...field}
                                    type="password"
                                  />
                                </FormControl>
                                {form.formState.errors.password && (
                                  <FormMessage>
                                    {form.formState.errors.password.message}
                                  </FormMessage>
                                )}
                              </FormItem>
                            )}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p> Password Rules:</p>
                          <p> - Must be 8 characters long</p>
                          <p> - Must contain one uppercase</p>
                          <p> - Must contain one lowercase</p>
                          <p> - Must contain one number</p>
                          <p> - Must contain one special</p>
                          number
                        </TooltipContent>
                      </Tooltip>
                      <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="********"
                                {...field}
                                type="password"
                              />
                            </FormControl>
                            {form.formState.errors.confirmPassword && (
                              <FormMessage>
                                {form.formState.errors.confirmPassword.message}
                              </FormMessage>
                            )}
                          </FormItem>
                        )}
                      />
                      <Link
                        className="ml-auto text-sm underline-offset-4 hover:underline"
                        href="/forgot-password"
                      >
                        Forgot your password?
                      </Link>
                    </div>
                  </div>
                  <Button
                    className="w-full"
                    disabled={isLoading || isDisabled}
                    type="submit"
                  >
                    {isLoading ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : (
                      "Signup"
                    )}
                  </Button>
                </div>
                <div className="text-center text-sm">
                  Already have an account?{" "}
                  <Link className="underline underline-offset-4" href="/login">
                    Login
                  </Link>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-muted-foreground text-xs *:[a]:underline *:[a]:underline-offset-4 *:[a]:hover:text-primary">
        By clicking continue, you agree to our{" "}
        <Link href="#">Terms of Service</Link> and{" "}
        <Link href="#">Privacy Policy</Link>.
      </div>
    </div>
  );
}
