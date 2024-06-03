"use client";

import { trpc } from "@/trpc/client";
import { Loader2, XCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

interface VerifyEmailProps {
  token: string;
}

const VerifyEmail = ({ token }: VerifyEmailProps) => {
  const { data, isLoading, isError } = trpc.auth.verifyEmail.useQuery({
    token,
  });

  if (isError) {
    return (
      <div className="flex flex-col items-center gap-2">
        <XCircle className="h-8 w-8 text-red-600" />
        <h3 className="font-semibold text-xl">Houve um problema</h3>
        <p className="text-muted-foreground text-sm text-center">
          O token não é válido ou ele pode ter expirado. Por favor, tente
          novamente.
        </p>
      </div>
    );
  }

  if (data?.success) {
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <div className="relative mb-4 h-60 w-60 text-muted-foreground">
          <Image src="/hippo-email-sent.png" fill alt="The email was sent" />
        </div>
        <h3 className="font-semibold text-2xl">Você está preparado(a)!</h3>
        <p className="text-muted-foreground text-center mt-1">
          Obrigado por verificar seu e-mail!
        </p>
        <Link href="/sign-in" className={buttonVariants({ className: "mt-4" })}>
          Entrar
        </Link>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="animate-spin  h-8 w-8 text-zinc-300" />
        <h3 className="font-semibold text-xl">Verificando...</h3>
        <p className="text-muted-foreground text-sm text-center">
          Não vai demorar muito...
        </p>
      </div>
    );
  }
};

export default VerifyEmail;
