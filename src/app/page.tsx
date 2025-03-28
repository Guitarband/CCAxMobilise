import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <div className="relative w-full h-auto">
          <Image
            className="w-full h-full"
            src="/background.jpg"
            alt="Next.js logo"
            width={1000}
            height={600}
            priority
            style={{ width: '100vw', height: 'auto' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#3A3335] to-[#FDF0D5] opacity-25"></div>
        <div className="absolute w-full h-full flex flex-row items-baseline justify-center gap-40 pt-[16vw] text-[#FDF0D5] whitespace-nowrap">
          <div className="perspective-dramatic">
            <p className="text-[5vw] font-bold -translate-z-30 rotate-z-18 rotate-y-20 skew-y-15 skew-x-18">Bringing Change</p>
          </div>
          <div className="perspective-dramatic">
            <p className="text-[5vw] font-bold -translate-y-[2vw] -translate-z-35 -rotate-z-20 -rotate-y-20 -skew-y-15 -skew-x-18">To the community</p>
          </div>
        </div>
        <div className="-translate-y-[14.5vw] w-full z-10">
          <Image
            className="w-full h-full translate-y-[0.1vw]"
            src="/hill.png"
            alt="Next.js logo"
            width={1000}
            height={600}
            priority
            style={{ width: '100vw', height: '10vh' }}
            />
          <div className="bg-[#3A3335] h-[10vw]"></div>
          <div className="z-10 flex flex-col items-center pt-[8vw] pb-[8vw] w-full h-auto bg-[#FDF0D5] text-[#F0544F] gap-y-[2vw] border-b-2">
            <p className="text-[3vw] font-bold -skew-x-4">Help people. Make change.</p>
            <p className="text-[1.8vw] -skew-x-4">Looking to volunteer, donate, or even learn more about homelessness in Australia?</p>
            <a href="https://wearemobilise.org.au/" className="bg-transparent text-[#D81E5B] border-[#D81E5B] border-2 rounded-4xl pt-[1vw] pb-[1vw] pl-[2vw] pr-[2vw] text-[1.2vw] -skew-x-4 cursor-pointer hover:bg-[#D81E5B] hover:text-[#FDF0D5] transition-all">Visit Mobilise</a>
          </div>
          <div className="z-10 flex flex-col p-[5vw] pb-[10vw] w-full h-auto bg-[#FDF0D5] text-[#F0544F] gap-y-[2vw]">
            <p className="text-[2.4vw] font-bold -skew-x-4">Quick Resources</p>
            <p className="text-[1.5vw] -skew-x-4">Safe hubs across Melbourne</p>
            <div className="h-100 w-full bg-white">
              Map here
            </div>
          </div>
          <div className="bg-[#3A3335] h-[10vw]"></div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
