import { MenuIcon } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import GenreList from "./GenreList";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon className="size-8 cursor-pointer"/>
      </SheetTrigger>
      <SheetContent className="bg-gray-100 dark:bg-black-1 border-none overflow-auto">
        <SheetHeader>
          <SheetTitle className="my-4 text-2xl font-bold text-white">LevelUp DB</SheetTitle>
        </SheetHeader>
        <GenreList/>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
