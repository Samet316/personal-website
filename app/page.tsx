import Image from "next/image";
import Icon from "../app/images/groundhog.png"
import Cowboy from "../app/images/cowboy-hat.png"
import Aspis from "../app/images/aspis.png"
import Hand from "../app/images/hand.png"
import Monkey from "../app/images/monkey.png"
import Viking from "../app/images/viking.png"
import Zombie from "../app/images/zombie.png"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white px-4 py-10 md:px-8">
      <section className="mx-auto flex max-w-6xl flex-col gap-6 lg:flex-row">
        <div className="flex-1 space-y-6">
          <article className="rounded-3xl bg-[#2C2C2E] p-1">
            <div className="rounded-3xl bg-[#5C5C5E] p-6 sm:p-8">
              <div className="flex flex-col-reverse gap-6 lg:flex-row lg:items-center">
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.3em] text-gray-300">
                    About me
                  </p>
                  <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-[45px]">
                    Hi, I'm Samet
                  </h1>
                  <p className="text-base font-medium text-gray-100 sm:text-lg">
                    I'm an intermediate HTML and CSS developer who loves leveling up my
                    software development skills. I'm currently focused on Tailwind CSS and
                    always open to advice from other web developers.
                  </p>
                </div>
                    <Image
                    src={Icon}
                    alt="Friendly Groundhog Says Hello"
                  />
              </div>
            </div>
          </article>

          <article className="rounded-3xl bg-[#2C2C2E] p-1">
            <div className="rounded-3xl bg-[#5C5C5E] p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-gray-300">
                    Favorites
                  </p>
                  <h2 className="text-2xl font-semibold sm:text-3xl">
                    Favorite games
                  </h2>
                </div>
                <p className="text-sm text-gray-200 sm:max-w-sm">
                  A few titles I keep coming back to when I need to relax or having fun.
                </p>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <a
                  className="flex items-center rounded-2xl border border-transparent bg-[#464648] p-3 text-sm font-medium transition hover:border-white/30 hover:bg-[#3a3a3c]"
                  href="https://www.rockstargames.com/reddeadredemption2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image className="mr-3 w-6" src={Cowboy} alt="Arthur's Hat"
                  width={500}
                  height={500}
                  />
                  Red Dead Redemption 2
                </a>
                <a
                  className="flex items-center rounded-2xl border border-transparent bg-[#464648] p-3 text-sm font-medium transition hover:border-white/30 hover:bg-[#3a3a3c]"
                  href="https://sms.playstation.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image className="mr-3 w-6" src={Aspis} alt="Kratos shield"
                  width={500}
                  height={500}
                  />
                  God of War
                </a>
                <a
                  className="flex items-center rounded-2xl border border-transparent bg-[#464648] p-3 text-sm font-medium transition hover:border-white/30 hover:bg-[#3a3a3c]"
                  href="https://www.cyberpunk.net/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image className="mr-3 w-6" src={Hand} alt="Cyberpunk hand implant"
                  width={500}
                  height={500}
                  />
                  Cyberpunk 2077
                </a>
                <a
                  className="flex items-center rounded-2xl border border-transparent bg-[#464648] p-3 text-sm font-medium transition hover:border-white/30 hover:bg-[#3a3a3c]"
                  href="https://gamesci.cn/wukong/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image className="mr-3 w-6" src={Monkey} alt="Wukong mask"
                  width={500}
                  height={500}
                  />
                  Black Myth: Wukong
                </a>
                <a
                  className="flex items-center rounded-2xl border border-transparent bg-[#464648] p-3 text-sm font-medium transition hover:border-white/30 hover:bg-[#3a3a3c]"
                  href="https://www.ubisoft.com/en-us/game/assassins-creed/valhalla"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image className="mr-3 w-6" src={Viking} alt="Viking helmet"
                  width={500}
                  height={500}
                  />
                  Assassin's Creed Valhalla
                </a>
                <a
                  className="flex items-center rounded-2xl border border-transparent bg-[#464648] p-3 text-sm font-medium transition hover:border-white/30 hover:bg-[#3a3a3c]"
                  href="https://projectzomboid.com/blog/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image className="mr-3 w-6" src={Zombie} alt="Zombie hand"
                  width={500}
                  height={500}
                  />
                  Project Zomboid
                </a>
              </div>
            </div>
          </article>
        </div>

        <aside className="lg:w-[320px]">
          <div className="rounded-3xl bg-[#2C2C2E] p-1">
            <div className="rounded-3xl bg-[#5C5C5E] p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-300">
                Let's talk
              </p>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
                Contact
              </h2>
              <p className="mt-4 text-sm text-gray-200">
                I'm most active on the platforms below. Feel free to reach out if you have tips,
                ideas, or just want to chat about front-end.
              </p>
              <div className="mt-6 space-y-3">
                <a
                  className="flex items-center justify-between rounded-2xl border border-transparent bg-[#464648] px-4 py-3 font-medium transition hover:border-white/30 hover:bg-[#3a3a3c]"
                  href="https://github.com/Samet316"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                  <span className="text-sm text-gray-200">Samet316</span>
                </a>
                <a
                  className="flex items-center justify-between rounded-2xl border border-transparent bg-[#464648] px-4 py-3 font-medium transition hover:border-white/30 hover:bg-[#3a3a3c]"
                  href="https://x.com/broo_samet"
                  target="_blank"
                  rel="noreferrer"
                >
                  X (Twitter)
                  <span className="text-sm text-gray-200">@broo_samet</span>
                </a>
                <a
                  className="flex items-center justify-between rounded-2xl border border-transparent bg-[#464648] px-4 py-3 font-medium transition hover:border-white/30 hover:bg-[#3a3a3c]"
                  href="https://www.instagram.com/sxmetcendik/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                  <span className="text-sm text-gray-200">@sxmetcendik</span>
                </a>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
