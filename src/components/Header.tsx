import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import "@/styles/Header.css";
import { SiDiscord } from "react-icons/si";
import { LuInfo, LuUserCircle2, LuMenu } from "react-icons/lu";

function Header() {
  return (
    <header className="flex justify-between items-center py-6 px-4 max-w-screen-lg mx-auto">
      <div>
        <img
          src="/_76c8f30d-930b-40e7-8444-369a12e85e7d.jpg"
          alt=""
          width="70px"
          height="70px"
          className="[border-radius:50%;]"
        />
      </div>

      <ul className="gap-6 hidden md:flex">
        <li>
          <a href="https://discord.gg/pqZ64SGaVG" target="_blank">
            <SiDiscord />
            Discord
          </a>
        </li>
        <li>
          <a href="#sobre">
            <LuInfo />
            Sobre
          </a>
        </li>
        <li>
          <a href="#contato">
            <LuUserCircle2 />
            Contato
          </a>
        </li>
      </ul>

      <div className="block md:hidden">
        <Sheet>
          <SheetTrigger className="pr-3">
            <LuMenu className="w-8 h-8" />
          </SheetTrigger>
          <SheetContent side="left" className="pt-32">
            <SheetDescription>
              <ul className="ml-4 gap-5 text-2xl flex flex-col">
                <li>
                  <a href="https://discord.gg/pqZ64SGaVG" target="_blank">
                    <SiDiscord />
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#sobre">
                    <LuInfo />
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#contato">
                    <LuUserCircle2 />
                    Contato
                  </a>
                </li>
              </ul>
            </SheetDescription>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default Header;
