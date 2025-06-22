import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Welcome to MitWallet 💼</h1>
      <p className="text-muted-foreground mt-2">
        Your personal finance assistant
      </p>
      <Link href={"/about"}>Go to About Page</Link>
      <Link href="./dashboard">Dashboard</Link>
      <div className="size-10 bg-red-500"></div>
    </main>
  );
}
