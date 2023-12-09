import { useRouter } from "next/router";
import { useEffect } from "react";

const SuaPagina = () => {
  const router = useRouter();

  useEffect(() => {
    // Faz o redirecionamento imediatamente
    router.push("https://www.devpira.com.br/eventos/devpira-festival-2023");
  }, [router]);

  return (
    <div>
      <p>Redirecionando para DEVPIRA Festival 2023...</p>
      {/* Conteúdo que deseja exibir durante o redirecionamento */}
    </div>
  );
};

export default SuaPagina;
