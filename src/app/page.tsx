import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";
import { auth, currentUser, useUser } from "@clerk/nextjs";

type HeroParallaxDemoProps = {
  userId: string | null;
};

export default function Home() {
  return (
    <main className="min-h-scren flex flex-col">
      <HeroParallaxDemo />
    </main>
  );
}
