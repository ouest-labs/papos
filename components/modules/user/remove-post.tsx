"use client";

import { Button } from "@/components/ui/button";
import { Popover } from "@/components/ui/popover";
import { Trash } from "lucide-react";
import { deletePost } from "@/db";
import { useState } from "react";

export const SupprimerPost = ({ id }: { id: number }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [openPopover, setOpenPopover] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    await deletePost(id);
    setIsLoading(false);
    setOpenPopover(false);
  };

  return (
    <Popover
      openPopover={openPopover}
      setOpenPopover={setOpenPopover}
      content={
        <div className="p-3 flex flex-col">
          <Button
            onClick={handleDelete}
            label={"Supprimer"}
            disabled={isLoading}
            loading={isLoading}
            className={`rounded text-white ${
              isLoading ? "bg-muted" : "bg-red-500 hover:bg-red-600"
            }`}
          />
        </div>
      }
      align="start"
    >
      <Button
        type="button"
        variant={"outline"}
        loading={isLoading}
        disabled={isLoading}
        icon={(() => <Trash size={15} />)}
        className="hover:text-destructive transition-colors w-10 h-10"
        onClick={() => setOpenPopover(true)}
        aria-label="Supprimer le post"
      />
    </Popover>
  );
};
