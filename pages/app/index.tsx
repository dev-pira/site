import { useRouter } from "next/router";
import { useEffect } from "react";

const SuaPagina = () => {
  const router = useRouter();

  useEffect(() => {
    // Faz o redirecionamento imediatamente
    router.push("https://devpira-festival-25.glide.page/");
  }, [router]);

  return (
    <div>
      <p>Redirecionando para DEVPIRA Festival 2025...</p>
      {/* Conteúdo que deseja exibir durante o redirecionamento */}
    </div>
  );
};

export default SuaPagina;
