import { Box, Container } from "@mui/material";
import { Typography } from "../Typography";
import { Button } from "../Button";

const JobsIntro: React.FC = () => {
  const defaultHeight = "560px";
  return (
    <Box
      sx={{
        background: "linear-gradient(45deg, #E63462, #1E90FF)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Container
        sx={{
          display: "flex",
          height: { xs: "320px", sm: defaultHeight },
          alignItems: "center",
        }}
      >
        <Box sx={{ marginLeft: { xs: "0px", sm: "100px" }, width: "800px" }}>
          <Box sx={{ marginBottom: { xs: "32px", sm: "40px" } }}>
            <Typography variant="h3" color="contrast">
              Vagas de
            </Typography>
            <Typography variant="h3" color="contrast">
              emprego
            </Typography>
          </Box>
          <Typography variant="body1" color="contrast">
            Aqui você encontra as vagas de empregos de emprego compartilhadas
            com todos da comunidade.
          </Typography>
          <Box sx={{ display: "flex", gap: "8px", mt: "20px" }}>
            <Button color="transparent" href="/vagas/nova">
              Enviar uma vaga
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: { xs: "none", sm: "flex" }, width: "740px" }}>
          <Box
            sx={{
              background: 'url("/images/JobsHeader/Fly.svg")',
              width: "400px",
              height: "400px",
            }}
          ></Box>
        </Box>
      </Container>
    </Box>
  );
};

export default JobsIntro;
