import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="h-14 px-6 flex flex-row items-center justify-between border gap-0.5">
      <div className="gap-0.5">
        <Button size={"sm"} variant={"ghost"} className="text-lg" asChild>
          <Link href={"/"}>MitWallet</Link>
        </Button>
        <Button size={"sm"} variant={"ghost"}>
          Docs
        </Button>
        <Button size={"sm"} variant={"ghost"}>
          Dashboard
        </Button>
        <Button size={"sm"} variant={"ghost"}>
          Accounts
        </Button>
        <Button size={"sm"} variant={"ghost"}>
          Records
        </Button>
        <Button size={"sm"} variant={"ghost"}>
          Category
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <Search className="" />
        <Input placeholder="search"></Input>
        <Avatar className="rounded-lg">
          <AvatarImage
            src="https://github.com/evilrabbit.png"
            alt="@evilrabbit"
          />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export function AvatarDemo() {
  return (
    <div className="flex flex-row flex-wrap items-center gap-12">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="rounded-lg">
        <AvatarImage
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
      <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/evilrabbit.png"
            alt="@evilrabbit"
          />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
