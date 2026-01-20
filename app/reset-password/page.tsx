import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { ResetPasswordForm } from "@/components/forms/reset-password-form";

export default function LoginPage() {
	return (
		<div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
			<div className="flex w-full max-w-sm flex-col gap-6">
				<Link
					className="flex items-center gap-2 self-center font-medium"
					href="/"
				>
					<div className="flex size-8 items-center justify-center rounded-md bg-card text-primary-foreground">
						<Image
							alt="Foundry"
							height={64}
							priority
							src={"/foundry.png"}
							width={64}
						/>
					</div>
					Foundry - Homestead Systems
				</Link>
				<Suspense>
					<ResetPasswordForm />
				</Suspense>
			</div>
		</div>
	);
}
