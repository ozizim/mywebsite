import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className={`flex flex-col items-center mx-auto px-5 py-24  ${inter.className}`}
    >
      <Image
        src={"/avatar.png"}
        alt="logo"
        priority
        className="rounded-full "
        width={100}
        height={100}
      />

      <div className="mt-8 text-gray-700 dark:text-gray-300">
        <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-600 font-semibold text-center">
          Hey, I&apos;m Oğuzhan.
        </h1>
      </div>

      <div>
        <p className="flex flex-col mt-4 text-lg text-gray-300 dark:text-gray-300 text-center">
          <span>
            Merhaba. Hayat sizler gibi güzel ve narin. Kamanda yaşamanın
          </span>
          <span>
            zorlukları hakkın da en ufak bilginiz yok. en kısa zaman da görüşmek
          </span>
          <span>üzere. evet kaçırıldım. Tarafından.</span>
        </p>
      </div>

      <Link href="mailto:oguzhandtrx@gmail.com" passHref>
        <button className="mt-8 px-4 py-2 text-white bg-[#101010] border-2 border-[#222] rounded-md hover:bg-[#121212] transition-all ease-out duration-400">
          Contact me
        </button>
      </Link>

      <div className="flex items-center justify-center mt-8 space-x-12 text-lg">
        <Link
          href="https://twitter.com/oguzhandtr_"
          passHref
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="text-gray-500 hover:underline hover:text-gray-200 duration-300 ease-out">
            Twitter
          </button>
        </Link>
        <Link
          href="https://www.behance.net/ozizim"
          passHref
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="text-gray-500 hover:underline hover:text-gray-200 duration-300 ease-out">
            Behance
          </button>
        </Link>
        <Link
          href="https://dribbble.com/ozizim"
          passHref
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="text-gray-500 hover:underline hover:text-gray-200 duration-300 ease-out">
            Dribbble
          </button>
        </Link>
      </div>
    </div>
  );
}
