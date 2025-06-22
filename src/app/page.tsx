import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Welcome to MitWallet 💼</h1>
      <p className="text-muted-foreground mt-2">
        Your personal finance assistant
      </p>
      <div className="flex flex-row gap-2">
        <Button asChild>
          <Link href={"/about"}>About Page</Link>
        </Button>
        <Button asChild>
          <Link href="./dashboard">Dashboard</Link>
        </Button>
      </div>
    </main>
  );
}
