import { Box } from "@mui/material";
import Image from "next/image";
import { Typography } from "../Typography";

const Initiatives: React.FC = () => {
  const defaultWidth = "1345px";

  return (
    <Box
      id="iniciativas"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#F2F9FF",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: defaultWidth,
          maxWidth: "100vw",
          alignItems: "center",
          justifyContent: "space-around",
          minHeight: "574px",
          px: "1.8rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: { md: "50%", lg: "50%" },
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <Typography variant="h3">Iniciativas</Typography>
          <Typography>
            Mas o que fazemos para contribuir para o desenvolvimento das pessoas
            através da tecnologia? Realizamos eventos, encontros, lives,
            podcasts e muitos outros conteúdos gratuitamente com o único
            objetivo de disseminar o conhecimento sobre diversas áreas da
            tecnologia e pessoas.
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "block", lg: "block" },
            width: "500px",
          }}
        >
          <Image
            alt=""
            src="/images/Initiatives.png"
            width="451px"
            height="397px"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Initiatives;
