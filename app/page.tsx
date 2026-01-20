import Image from "next/image";
import Link from "next/link";
import { FeaturesSection } from "@/components/bento-grid";
import { ModeSwitcher } from "@/components/mode-switcher";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EncryptedText } from "@/components/ui/encrypted-text";

export default function Home() {
	return (
		<>
			{/* Header */}
			<header className="absolute top-0 right-0 left-0 z-50 flex items-center justify-between px-6 py-4">
				<div className="flex items-center gap-2">
					<Image
						alt="Foundry"
						className="rounded-md"
						height={40}
						src="/foundry.png"
						width={40}
					/>
				</div>
				<div className="flex items-center gap-3">
					<ModeSwitcher />
					<Link href="/login">
						<Button variant="ghost">Login</Button>
					</Link>
					<Link href="/signup">
						<Button>Sign up</Button>
					</Link>
				</div>
			</header>

			{/* Hero */}
			<main className="flex min-h-screen flex-col items-center justify-center px-6 pt-24">
				<div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
					{/* Left: Text */}
					<div className="flex flex-col gap-6 text-center md:text-left">
						<EncryptedText
							className="font-bold text-4xl tracking-tight md:text-6xl"
							text="Foundry"
						/>

						<p className="text-lg text-muted-foreground md:text-xl">
							The modern home for mods. Share your creations.
							Discover new worlds. Build your version of the
							story.
						</p>

						<div className="flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
							<Link href="/browse">
								<Button className="w-full sm:w-auto" size="lg">
									Browse Mods
								</Button>
							</Link>
							<Link href="/signup">
								<Button
									className="w-full sm:w-auto"
									size="lg"
									variant="outline"
								>
									Upload a Mod
								</Button>
							</Link>
						</div>

						{/* Quick stats (fake for now, real later) */}
						<div className="mt-4 grid grid-cols-3 gap-4 text-center md:text-left">
							<div>
								<p className="font-bold text-2xl">12k+</p>
								<p className="text-muted-foreground text-sm">
									Mods
								</p>
							</div>
							<div>
								<p className="font-bold text-2xl">4.8M</p>
								<p className="text-muted-foreground text-sm">
									Downloads
								</p>
							</div>
							<div>
								<p className="font-bold text-2xl">38k</p>
								<p className="text-muted-foreground text-sm">
									Creators
								</p>
							</div>
						</div>
					</div>

					{/* Right: Visual */}
					<div className="relative mx-auto flex w-full max-w-md items-center justify-center">
						<div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/10 blur-2xl" />
						<Card className="relative w-full rounded-2xl border bg-background/60 backdrop-blur">
							<CardContent className="flex flex-col items-center gap-4 p-6">
								<Image
									alt="Foundry"
									className="rounded-xl"
									height={180}
									src="/foundry.png"
									width={180}
								/>
								<p className="text-center text-muted-foreground text-sm">
									Upload • Version • Discover • Collaborate
								</p>
							</CardContent>
						</Card>
					</div>
				</div>

				{/* Features */}
				<section className="mt-24 w-full max-w-6xl px-2">
					<h2 className="mb-8 text-center font-bold text-3xl">
						Built for creators & players
					</h2>

					<FeaturesSection />
				</section>

				{/* Bottom CTA */}
				<section className="mt-24 w-full max-w-5xl px-4 pb-24">
					<Card className="rounded-2xl border bg-gradient-to-br from-primary/10 to-purple-500/5">
						<CardContent className="flex flex-col items-center gap-6 p-10 text-center">
							<h3 className="font-bold text-2xl">
								Ready to forge something new?
							</h3>
							<p className="max-w-xl text-muted-foreground">
								Foundry is the next-gen mod repository focused
								on creators, performance, and clean UX. Join
								early and help shape the future.
							</p>
							<div className="flex gap-3">
								<Link href="/signup">
									<Button size="lg">Get Started</Button>
								</Link>
								<Link href="/browse">
									<Button size="lg" variant="outline">
										Explore Mods
									</Button>
								</Link>
							</div>
						</CardContent>
					</Card>
				</section>
			</main>
		</>
	);
}
