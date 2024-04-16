"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { useRouter } from "next/navigation";
import { AuthCard } from "../card";

interface SignInButtonProps {
  label?: string;
  children?: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const AuthWidget = ({
  children,
  label = "Se Connecter",
  mode = "redirect",
  asChild = false,
}: SignInButtonProps) => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/auth/login");
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (mode === "modal") {
    return (
      <>
        {asChild ? (
          React.cloneElement(children as React.ReactElement, {
            onClick: handleOpenModal,
          })
        ) : (
          <Button label={label} onClick={handleOpenModal} className="cursor-pointer"/>
        )}
        {showModal && (
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            onClose={handleCloseModal}
          >
            <AuthCard showOAuth headerLabel={label} />
          </Modal>
        )}
      </>
    );
  }

  return (
    <Button label={label} onClick={handleRedirect} className="cursor-pointer"/>
  );
};
