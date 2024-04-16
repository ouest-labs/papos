"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { OAuth } from "./buttons";
import Header from "./header";

interface AuthCardProps {
  headerLabel: string;
  showOAuth?: boolean;
}

export const AuthCard = ({ headerLabel, showOAuth }: AuthCardProps) => {
  return (
    <Card className="flex p-3 flex-col justify-center w-full bg-background border-0 shadow-none " >
      <CardHeader className="text-foreground">
        <Header label={headerLabel} />
      </CardHeader>
      {showOAuth && (
        <CardContent>
          <OAuth />
        </CardContent>
      )}
    </Card>
  );
};


