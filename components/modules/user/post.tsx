"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

export const SendPost = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      variant="secondary"
      type="submit"
      disabled={pending}
      data-umami-event="send-message"
    >
      {!pending && "Poster"}
      {pending && (
        <Loader2
          className={`${
            pending ? "w-4" : "w-0 ml-0"
          } h-4 animate-spin text-muted-foreground transition-all`}
        />
      )}
    </Button>
  );
};
