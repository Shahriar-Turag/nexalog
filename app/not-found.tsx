import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-content-center space-y-5 text-center">
      <h2 className="text-3xl font-semibold">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">
        <Button variant="outline" className="font-semibold">
          Return Home
        </Button>
      </Link>
    </main>
  );
}
