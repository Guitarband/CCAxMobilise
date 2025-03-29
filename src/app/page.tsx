"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import moment from "moment";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { PopoverClose } from "@radix-ui/react-popover";


export default function Home() {
  const [endDate, setEndDate] = useState(new Date());
  const [countdownDays, setCountdownDays] = useState(0);
  const [countdownHours, setCountdownHours] = useState(0);
  const [countdownMinutes, setCountdownMinutes] = useState(0);
  const [countdownSeconds, setCountdownSeconds] = useState(0);
  const [dontationEntry, setDonationEntry] = useState(0);
  const [donatedAmount, setDonatedAmount] = useState(0);

  const [timeLoaded, setTimeLoaded] = useState(false);

  useEffect(() => {
    const startDate = new Date("2025-03-26T00:00:00Z");
    const endingDate = moment(startDate).add(122000, 'm').toDate();
    setEndDate(endingDate);
  }, []);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const now = new Date();
      const distance = endDate.getTime() - now.getTime();

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdownDays(days);
      setCountdownHours(hours);
      setCountdownMinutes(minutes);
      setCountdownSeconds(seconds);
      if (!timeLoaded) {
        setTimeLoaded(true);
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [timeLoaded, endDate]);

  const handleDonation = () => {
    setDonatedAmount(donatedAmount + dontationEntry);
    setDonationEntry(0);
    const newEndDate = moment(endDate).subtract(dontationEntry, 'm').toDate();
    setEndDate(newEndDate);
  };

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
        { timeLoaded && (
          <div className="outlined-text absolute bg-transparent flex flex-col text-[#FDF0D5] z-20 items-center w-full text-[4vw] font-bold pt-[10vw] -skew-x-4">
            <p>
              <span className="hover:text-[#F0544F] transition-all">{countdownDays.toString().substring(0, 1)}</span>
              <span className="hover:text-[#F0544F] transition-all">{countdownDays.toString().length > 1 ? countdownDays.toString().substring(1) : null}</span>
              <span className="hover:text-[#F0544F] transition-all"> D</span>
              <span className="hover:text-[#F0544F] transition-all">a</span>
              <span className="hover:text-[#F0544F] transition-all">y</span>
              <span className="hover:text-[#F0544F] transition-all">s</span>
            </p>
            <p>
              <span className="hover:text-[#F0544F] transition-all">{countdownHours.toString().padStart(2, '0').substring(0, 1)}</span>
              <span className="hover:text-[#F0544F] transition-all">{countdownHours.toString().padStart(2, '0').substring(1)}</span>
              <span className="hover:text-[#F0544F] transition-all"> H</span>
              <span className="hover:text-[#F0544F] transition-all">o</span>
              <span className="hover:text-[#F0544F] transition-all">u</span>
              <span className="hover:text-[#F0544F] transition-all">r</span>
              <span className="hover:text-[#F0544F] transition-all">s</span>
            </p>
            <p>
              <span className="hover:text-[#F0544F] transition-all">{countdownMinutes.toString().padStart(2, '0').substring(0, 1)}</span>
              <span className="hover:text-[#F0544F] transition-all">{countdownMinutes.toString().padStart(2, '0').substring(1)}</span>
              <span className="hover:text-[#F0544F] transition-all"> M</span>
              <span className="hover:text-[#F0544F] transition-all">i</span>
              <span className="hover:text-[#F0544F] transition-all">n</span>
              <span className="hover:text-[#F0544F] transition-all">u</span>
              <span className="hover:text-[#F0544F] transition-all">t</span>
              <span className="hover:text-[#F0544F] transition-all">e</span>
              <span className="hover:text-[#F0544F] transition-all">s</span>
            </p>
            <p>
              <span className="hover:text-[#F0544F] transition-all">{countdownSeconds.toString().padStart(2, '0').substring(0, 1)}</span>
              <span className="hover:text-[#F0544F] transition-all">{countdownSeconds.toString().padStart(2, '0').substring(1)}</span>
              <span className="hover:text-[#F0544F] transition-all"> S</span>
              <span className="hover:text-[#F0544F] transition-all">e</span>
              <span className="hover:text-[#F0544F] transition-all">c</span>
              <span className="hover:text-[#F0544F] transition-all">o</span>
              <span className="hover:text-[#F0544F] transition-all">n</span>
              <span className="hover:text-[#F0544F] transition-all">d</span>
              <span className="hover:text-[#F0544F] transition-all">s</span>
            </p>
            <Popover>
              <PopoverTrigger asChild><button className="cursor-pointer text-[3vw] skew-x-1 hover:text-[#F0544F] transition-all">Donate now!</button></PopoverTrigger>
              <PopoverContent className="border-2 border-[#F0544F] bg-[#FDF0D5] text-[#3A3335] rounded-2xl p-[1.4vw]">
                <div className="w-full h-auto flex flex-col">
                  <p className="text-[1.3vw] pb-[0.2vw] font-semibold">Donate to make a change</p>
                  <p className="text-[1vw] pb-[1vw] -skew-x-5">One less minute for every dollar</p>
                  <label className="text-[1vw]" htmlFor="amount">How much do you want to donate?</label>
                  <input autoComplete="off" onChange={(e) => setDonationEntry(parseInt(e.target.value))} value={dontationEntry} type="number" className="border-0 border-b-2 border-[#F0544F] mt-[0.2vw] mb-[1vw] p-[0.3vw] text-[0.9vw]" id="amount" />
                  <PopoverClose asChild>
                    <button className="cursor-pointer hover:text-[#D81E5B] transition-all" onClick={handleDonation}>Confirm</button>
                  </PopoverClose>
                </div>
              </PopoverContent>
            </Popover>
        </div>
        )}
        <div className="absolute w-full h-full flex flex-row items-baseline justify-center gap-40 pt-[16vw] text-[#FDF0D5] whitespace-nowrap">
          <div className="perspective-dramatic">
            <p className="outlined-text text-[5vw] font-bold -translate-z-30 rotate-z-18 rotate-y-20 skew-y-15 skew-x-18">Bringing Change</p>
          </div>
          <div className="perspective-dramatic">
            <p className="outlined-text text-[5vw] font-bold -translate-y-[2vw] -translate-z-35 -rotate-z-20 -rotate-y-20 -skew-y-15 -skew-x-18">To the community</p>
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
          <div className="z-10 flex flex-col items-center pt-[8vw] pb-[8vw] w-full h-auto bg-[#FDF0D5] text-[#F0544F] gap-y-[2vw]">
            <p className="text-[3vw] font-bold -skew-x-4">Help people. Make change.</p>
            <p className="text-[1.8vw] -skew-x-4">Looking to volunteer, donate, or even learn more about homelessness in Australia?</p>
            <p className="text-[1.6vw] -skew-x-4">Check out these organisations!</p>
            <div className="flex flex-row items-center justify-centerw-full gap-[2vw]">
              <a href="https://wearemobilise.org.au/" className="bg-transparent text-[#D81E5B] border-[#D81E5B] border-2 rounded-4xl pt-[1vw] pb-[1vw] pl-[2vw] pr-[2vw] text-[1.2vw] -skew-x-4 cursor-pointer hover:bg-[#D81E5B] hover:text-[#FDF0D5] transition-all">Visit Mobilise</a>
              <a href="https://thebigumbrella.org/" className="bg-transparent text-[#D81E5B] border-[#D81E5B] border-2 rounded-4xl pt-[1vw] pb-[1vw] pl-[2vw] pr-[2vw] text-[1.2vw] -skew-x-4 cursor-pointer hover:bg-[#D81E5B] hover:text-[#FDF0D5] transition-all">Visit The Big Umbrella</a>
              <a href="https://orangesky.org.au/" className="bg-transparent text-[#D81E5B] border-[#D81E5B] border-2 rounded-4xl pt-[1vw] pb-[1vw] pl-[2vw] pr-[2vw] text-[1.2vw] -skew-x-4 cursor-pointer hover:bg-[#D81E5B] hover:text-[#FDF0D5] transition-all">Visit Orange Sky</a>
              <a href="https://www.streetsidemedics.com.au/" className="bg-transparent text-[#D81E5B] border-[#D81E5B] border-2 rounded-4xl pt-[1vw] pb-[1vw] pl-[2vw] pr-[2vw] text-[1.2vw] -skew-x-4 cursor-pointer hover:bg-[#D81E5B] hover:text-[#FDF0D5] transition-all">Visit Street Side Medics</a>
            </div>
          </div>
          <div className="z-10 flex flex-col p-[5vw] pb-[10vw] w-full h-auto bg-[#FDF0D5] text-[#F0544F] gap-y-[2vw] border-t-2 border-[#F0544F]">
            <p className="text-[2.4vw] font-bold -skew-x-4">Quick Resources</p>
            <div className="flex flex-row items-center justify-center h-[30vw] w-full gap-[5vw]">
              <div className="h-full flex-1/2">
                <p className="text-[1.4vw] -skew-x-4 pb-[1vw] font-bold">Where to find us!</p>
                <iframe width="600" height="500" className="h-full w-full" id="gmap_canvas" src="https://www.google.com/maps/embed/v1/place?q=Federation+Square,+Melbourne+VIC,+Australia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
              </div>
              <div className="h-[30vw] flex-1/2">
                <p className="text-[1.4vw] -skew-x-4 pb-[1vw] font-bold">Local Information</p>
                <ul className="h-full w-full text-[1vw] flex flex-col justify-between border-2 rounded-2xl border-[#F0544F] p-[1vw] pb-[2vw] font-semibold">
                  <div>
                    <p className="text-[1.1vw] font-bold">Salvation Army</p>
                    <li className="pl-[1vw]">Phone: <a href="tel:0396533299">03 9653 3299</a></li>
                    <li className="pl-[1vw]">Address: 69 Bourke St, Melbourne VIC 3000</li>
                  </div>

                  <div>
                    <p className="text-[1.1vw] font-bold">The Living Room</p>
                    <li className="pl-[1vw]">Phone: <a href="tel:1800440188">1800 440 188</a></li>
                    <li className="pl-[1vw]">Address: 7-9 Hosier Lane, Melbourne VIC 3000</li>
                  </div>

                  <div>
                    <p className="text-[1.1vw] font-bold">Orange Laundry</p>
                    <li className="pl-[1vw]">Phone: <a href="tel:0730675800">07 3067 5800</a></li>
                    <li className="pl-[1vw]">Address: PO Box 274, Hamilton Central QLD 4007</li>
                  </div>

                  <div>
                    <p className="text-[1.1vw] font-bold">Street Side Medics</p>
                    <li className="pl-[1vw]">Phone: <a href="tel:0283247531">02 8324 7531</a></li>
                    <li className="pl-[1vw]">Address: PO Box 314, Strawberry Hills Post Office, 2012</li>
                  </div>

                  <div>
                    <p className="text-[1.1vw] font-bold">Launch Housing</p>
                    <li className="pl-[1vw]">Phone: <a href="tel:0392889611">03 9288 9611</a></li>
                    <li className="pl-[1vw]">Address: 68 Oxford Street, Collingwood VIC 3000</li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-[#3A3335] flex flex-col items-baseline pt-[6vw] pl-[8vw] pr-[10vw] w-full h-auto text-[#FDF0D5] gap-y-[1vw]">
            <p className="text-[3vw] font-bold -skew-x-4">The Why</p>
            <p className="text-[1.6vw] -skew-x-4 pr-[10vw]">
              As the cost of living crisis in Australia continues to worsen, the number of people experiencing homelessness continues to rise.
               The majority of people live with the misconception that homelessness is only people sleeping on the streets, when in fact, that is just the tip of the iceberg.
               Homelessness affects <span className="text-[1.6vw] text-[#F0544F]">122 thousand</span> people, only 6% of whom people see and consider homeless.
            </p>
          </div>
          <div className="bg-[#3A3335] flex flex-col items-end text-end pt-[4vw] pl-[8vw] pr-[10vw] w-full h-auto text-[#FDF0D5] gap-y-[1vw]">
            <p className="text-[3vw] font-bold -skew-x-4">The How</p>
            <p className="text-[1.6vw] -skew-x-4 pl-[10vw]">
              The bring awareness to this issue, we aim to make homelessness <span className="text-[1.6vw] text-[#F0544F]">everyone&apos;s problem</span>.
               Our approach focuses on a public installation called &apos;The Landmark&apos;, that makes everybody&apos;s day a little more difficult.
               The Landmark acts as an auditory disturbance, playing a constant irritating sound, and a countdown to the end of the installation.
               Individuals can interact with this landmark by donating to temporarily stop the sound, and an interactive UI to learn how they can contribute to the cause.
            </p>
            <p className="text-[1.6vw] -skew-x-4 pl-[10vw]">
              Furthermore, The Landmark also provides accessibility to the homeless community, providing them with information on local services and resources.
            </p>
          </div>
        </div>
      </main>
      <footer className="bg-[#F0544F] text-[#FDF0D5] p-[3vw] row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p className="text-[1.6vw] font-bold -skew-x-2">Making the world a better place</p>
      </footer>
    </div>
  );
}
