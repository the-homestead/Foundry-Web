import Image from "next/image";
import Link from "next/link";
import { FaPaintBrush } from "react-icons/fa";
import { FeaturesSection } from "@/components/bento-grid";
import ThemeSwitcher from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EncryptedText } from "@/components/ui/encrypted-text";

export default function Home() {
	return (
		<>
			{/* Header */}
			<header className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b bg-background/80 px-4 py-3 backdrop-blur md:px-6">
				<div className="flex items-center gap-2">
					<Image
						alt="Foundry"
						className="rounded-md"
						height={32}
						src="/foundry.png"
						width={32}
					/>
					<span className="font-semibold text-sm md:text-base">
						Foundry
					</span>
				</div>

				<div className="flex items-center gap-2">
					<ThemeSwitcher>
						<Button
							className="h-9 w-9 rounded-lg"
							size="icon"
							variant="ghost"
						>
							<FaPaintBrush className="h-5 w-5" />
						</Button>
					</ThemeSwitcher>
					<Link className="hidden sm:block" href="/login">
						<Button size="sm" variant="ghost">
							Login
						</Button>
					</Link>
					<Link href="/signup">
						<Button size="sm">Sign up</Button>
					</Link>
				</div>
			</header>

			{/* Hero */}
			<main className="flex min-h-screen flex-col items-center px-4 pt-28 md:px-6">
				<div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
					{/* Text */}
					<div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left">
						<EncryptedText
							className="font-bold text-3xl tracking-tight sm:text-4xl md:text-6xl"
							text="Foundry"
						/>

						<p className="max-w-xl text-base text-muted-foreground sm:text-lg md:text-xl">
							The modern home for mods. Share your creations.
							Discover new worlds. Build your version of the
							story.
						</p>

						<div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
							<Link className="w-full sm:w-auto" href="/browse">
								<Button className="w-full sm:w-auto" size="lg">
									Browse Mods
								</Button>
							</Link>
							<Link className="w-full sm:w-auto" href="/signup">
								<Button
									className="w-full sm:w-auto"
									size="lg"
									variant="outline"
								>
									Upload a Mod
								</Button>
							</Link>
						</div>

						{/* Stats */}
						<div className="mt-4 grid w-full max-w-md grid-cols-3 gap-3 text-center md:text-left">
							<div>
								<p className="font-bold text-xl md:text-2xl">
									12k+
								</p>
								<p className="text-muted-foreground text-xs md:text-sm">
									Mods
								</p>
							</div>
							<div>
								<p className="font-bold text-xl md:text-2xl">
									4.8M
								</p>
								<p className="text-muted-foreground text-xs md:text-sm">
									Downloads
								</p>
							</div>
							<div>
								<p className="font-bold text-xl md:text-2xl">
									38k
								</p>
								<p className="text-muted-foreground text-xs md:text-sm">
									Creators
								</p>
							</div>
						</div>
					</div>

					{/* Visual */}
					<div className="relative mx-auto flex w-full max-w-xs items-center justify-center sm:max-w-sm md:max-w-md">
						<div className="absolute -inset-6 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/10 blur-2xl" />

						<Card className="relative w-full rounded-2xl border bg-background/60 backdrop-blur">
							<CardContent className="flex flex-col items-center gap-4 p-6 md:p-8">
								<Image
									alt="Foundry"
									className="rounded-xl"
									height={140}
									src="/foundry.png"
									width={140}
								/>
								<p className="text-center text-muted-foreground text-xs sm:text-sm">
									Upload • Version • Discover • Collaborate
								</p>
							</CardContent>
						</Card>
					</div>
				</div>

				{/* Features */}
				<section className="mt-20 w-full max-w-6xl px-2 md:mt-28">
					<h2 className="mb-6 text-center font-bold text-2xl sm:text-3xl">
						Built for creators & players
					</h2>

					<FeaturesSection />
				</section>

				{/* Bottom CTA */}
				<section className="mt-20 w-full max-w-5xl px-2 pb-24 md:mt-28">
					<Card className="rounded-2xl border bg-gradient-to-br from-primary/10 to-purple-500/5">
						<CardContent className="flex flex-col items-center gap-5 p-6 text-center sm:p-8 md:p-10">
							<h3 className="font-bold text-xl sm:text-2xl">
								Ready to forge something new?
							</h3>

							<p className="max-w-xl text-muted-foreground text-sm sm:text-base">
								Foundry is the next-gen mod repository focused
								on creators, performance, and clean UX. Join
								early and help shape the future.
							</p>

							<div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
								<Link
									className="w-full sm:w-auto"
									href="/signup"
								>
									<Button
										className="w-full sm:w-auto"
										size="lg"
									>
										Get Started
									</Button>
								</Link>
								<Link
									className="w-full sm:w-auto"
									href="/browse"
								>
									<Button
										className="w-full sm:w-auto"
										size="lg"
										variant="outline"
									>
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
