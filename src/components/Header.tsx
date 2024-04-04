import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Button } from "../components/ui/button"


function Header() {
  return (
    <header className="flex justify-between items-center p-4 px-5 max-w-screen-lg mx-auto">
      <div>
        <img src="/_76c8f30d-930b-40e7-8444-369a12e85e7d.jpg" alt="" width="70px" height="70px" className="[border-radius:50%;]"/>
      </div>

      <ul className="gap-6 hidden md:flex">
        <li>
          <a href="#">img</a>
        </li>
        <li>
          <a href="#">Sobre</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </ul>

      <div className="block md:hidden">
        <Sheet>
          <SheetTrigger>
            <MenuIcon className="w-8 h-8" />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default Header;

{
  /* <style>
  svg {
    @apply inline
      w-8
      h-8
      text-8xl
      cursor-pointer;
  }
</style> */
}
