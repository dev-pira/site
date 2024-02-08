import { useRouter } from "next/router";
import { useEffect } from "react";

const SuaPagina = () => {
  const router = useRouter();

  useEffect(() => {
    // Faz o redirecionamento imediatamente
    router.push("https://devpirafestival2023.glide.page/dl/d0a5f4");
  }, []);

  return (
    <div>
      <p>Redirecionando para DEVPIRA Festival 2023...</p>
      {/* Conteúdo que deseja exibir durante o redirecionamento */}
    </div>
  );
};

export default SuaPagina;
