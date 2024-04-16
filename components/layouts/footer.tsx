import { Input } from "@/components/ui/input";
import { SendPost } from "@/components/modules";
import { auth } from "@/auth";
import { createPost } from "@/db";
const Footer = async () => {
  const session = await auth();
  return (
    <footer className="fixed inset-x-0 bottom-0 bg-background border-t p-4">
      <form
        action={createPost}
        className="flex items-center justify-between gap-x-2.5"
      >
        <div className="flex-1">
          <Input
            disabled={!session?.user}
            name="desc"
            id="desc"
            placeholder="Votre message..."
            aria-labelledby="votre-message-ici"
            inputMode="text"
          />
        </div>
        {session?.user && <SendPost />}
      </form>
    </footer>
  );
};
export default Footer;
