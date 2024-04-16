"use client";

import { signOut, useSession } from "next-auth/react";

import { Avatar } from "../ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { Popover } from "@/components/ui/popover";
import { ThemeToggler } from "@/components/modules";
import { useState } from "react";

export default function UserDropdown() {
  const { data: session } = useSession();
  const [openPopover, setOpenPopover] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const handleSignOut = async () => {
    setIsSigningOut(true);
    await signOut();
    setIsSigningOut(false);
  };

  return (
    <div>
      <Popover
        content={
          <div className="flex w-full sm:w-72 flex-col space-y-px rounded-md p-3 gap-3">
            <span className="border p-3 rounded-lg">
              {session?.user && (
                <span className="flex flex-col gap-1 justify-center text-base font-medium">
                  <div className="flex">
                  Bienvenue, <p className="truncate pl-1 uppercase bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"> 
                  {session?.user?.name}
                  </p>
                  </div>
                  <p className="truncate text-foreground/50 text-sm">
                    {session?.user?.email}
                  </p>
                </span>
              )}
            </span>

            <ThemeToggler />
            <Button
              title="Se deconnecter"
              className="w-full rounded-md p-3 transition-all duration-75 hover:bg-opacity-90 "
              loading={isSigningOut}
              label="Se deconnecter"
              icon={(() => (<LogOut size={20} />))}
              iconPos="end"
              onClick={() => {
                handleSignOut();
              }}
            />
          </div>
        }
        align="end"
        openPopover={openPopover}
        setOpenPopover={setOpenPopover}
      >
        <div

          onClick={() => setOpenPopover(!openPopover)}
          className="group cursor-pointer h-10 w-10 rounded-lg"
        >
          {session?.user ? (
            <Avatar
              user={session.user}
              className=" transition-all duration-75 group-focus:outline-none group-active:scale-95"
            />
          ) : (
            <div className="h-10 w-10 animate-pulse rounded-lg border sm:h-10 sm:w-10" />
          )}
        </div>
      </Popover>
    </div>
  );
}