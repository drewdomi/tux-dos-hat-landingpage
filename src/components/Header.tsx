import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

function Header() {
  return (
    <header className="flex justify-between p-4 px-5">
      <div>
        <h2>Logo</h2>
      </div>

      <ul className="gap-6 hidden md:flex">
        <li>
          <a href="#">Home</a>
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
