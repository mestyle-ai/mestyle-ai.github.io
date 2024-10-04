import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

function WadwaiPreview() {
  return (
    <div>
    <Image
      src="/assets/blog/preview/cover.jpg"
      alt={`Cover Image for Wadwai`}
      className={cn("shadow-sm w-full", {
        "hover:shadow-lg transition-shadow duration-200": "Wadwai",
      })}
      width={1300}
      height={630}
    />
    <h3 className="text-3xl mb-3 leading-snug">
      <Link href="https://wadwai.com/" className="hover:underline">
        Wadwai
      </Link>
    </h3>
    <p className="text-lg leading-relaxed mb-4">
      Wadwai is AI chatbot on LINE messenger app. With its simple chat interface,
      you can use it to draw any kinds of image (e.g. realistic portrait, anime, artworks, etc.)
    </p>
    </div>
  )
}

function RelifePreview() {
  return (
    <div>
    <Image
      src="/assets/blog/preview/cover.jpg"
      alt={`Cover Image for Relife AI`}
      className={cn("shadow-sm w-full", {
        "hover:shadow-lg transition-shadow duration-200": "Relife AI",
      })}
      width={1300}
      height={630}
    />
    <h3 className="text-3xl mb-3 leading-snug">
      <Link href="#" className="hover:underline">
        Relife AI
      </Link>
    </h3>
    <p className="text-lg leading-relaxed mb-4">
      Ever wondered what your life could look like if you chose a different path?

      With ReLife app, you can reimaging yourself in different lifestyle.
    </p>
    <Link href="https://play.google.com/store/apps/details?id=com.mestyle.relife.relife_app">
      <Image src="/assets/banner/play_store.png" alt="Play Store" width={150} height={100} className="mb-1"></Image>
    </Link>
    <Link href="https://apps.apple.com/th/app/relife-ai/id6569248714">
      <Image src="/assets/banner/app_store.svg" alt="App Store" width={150} height={100}></Image>
    </Link>
    </div>
  )
}


export function AppList() {
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        Our Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {/* Wadwai */}
        <WadwaiPreview/>
        {/* Relife AI */}
        <RelifePreview/>
      </div>
    </section>
  );
}
