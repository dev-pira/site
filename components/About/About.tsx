import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import { Typography } from "../Typography";

const About: React.FC = () => {
  return (
    <Container>
      <Grid container>
        <Box
          id="sobre"
          sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              maxWidth: "100vw",
              alignItems: "center",
              justifyContent: "space-between",
              minHeight: "453px",
              px: { xs: "1.8rem", sm: "1.8rem", md: "0" },
              py: { xs: "1.8rem", sm: "1.8rem", md: "0" },
            }}
          >
            <Image alt="" src="/images/About.svg" width="451px" height="277px" />
            <Box
              sx={{
                display: "flex",
                width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
                flexDirection: "column",
                gap: "24px",
              }}
            >
              <Typography variant="h3">Sobre o DEVPIRA</Typography>
              <Typography>
                Somos uma comunidade feita de &quot;pessoal do TI&quot; para
                &quot;pessoal do TI&quot;, desde programadores, POs, QAs, PMs,
                designers e até quem não trabalha na área, mas ama pessoas e
                tecnologia! Não temos fins lucrativos, nosso intuito é disseminar o
                conhecimento sobre tecnologia em Piracicaba, &quot;aonde o peixe
                pára&quot; mas a tecnologia avança! Mantenha-se atualizado com as
                práticas modernas de mercado e desperte nas pessoas o interesse
                sobre a área.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Container>
  );
};

export default About;
