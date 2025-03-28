import React from "react";

import { Brain } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area"

import Conversation from "@/components/conversation";

function page({ params: { id } }: { params: { id: string } }) {
  console.log(`/pdfjs/web/viewer.html?file=/papers/.pdf`, id);
  return (
    <div className="flex justify-around gap-2 h-[91vh]">
      <div className="w-full md:w-[70%] border relative">
        <iframe
          src={`/pdfjs/web/viewer.html?file=/papers/${id}.pdf`}
          className="w-full h-full"
        ></iframe>
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden fixed bottom-4 right-4 z-50 bg-slate-50 dark:bg-black shadow-lg rounded-full p-2">
              <Brain className="size-4" />
              <span className="sr-only">Settings</span>
            </Button>
          </DrawerTrigger>
          <DrawerContent className="max-h-[80vh]">
            <ScrollArea className="h-full w-full overflow-auto">
              <Conversation protocol={id}/>
            </ScrollArea>
          </DrawerContent>
        </Drawer>
      </div>
      <div className="hidden md:block w-2/4 border p-4 overflow-y-auto">
        <Conversation protocol={id}/>
      </div>
    </div>
  );
}

export default page;
