import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/components/modules/theme";
import { Toaster } from "sonner";
import { auth } from "@/auth";
type Props = {
  children: ReactNode;
};

export default async function Provider({ children }: Props) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <Toaster />
      </ThemeProvider>
    </SessionProvider>
  );
}
