import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { Logo } from "@/lib/assets";
import { signIn } from "next-auth/react";
import { useState } from "react";

const OAuth = () => {
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isGithubLoading, setIsGithubLoading] = useState(false);

  const onClick = async (provider: "google" | "github") => {

    if (provider === "google") {
      setIsGoogleLoading(true);
    } else {
      setIsGithubLoading(true);
    }


    await signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });

    if (provider === "google") {
      setIsGoogleLoading(false);
    } else {
      setIsGithubLoading(false);
    }
  };

  return (
    <div className="w-full space-y-5 flex flex-col">
      <Button
        label={null}
        variant="outline"
        icon={() => <Logo.Google/>}

        className="w-full text-base rounded-lg p-5 transition-all duration-75"
        loading={isGoogleLoading}
        onClick={() => onClick("google")}
      />
      <Button
        label={null}
        variant="outline"
        icon={() => <Logo.Github/>}
        className="w-full text-base rounded-lg p-5 transition-all duration-75"
        loading={isGithubLoading}
        onClick={() => onClick("github")}
      />
    </div>
  );
};

export default OAuth;
