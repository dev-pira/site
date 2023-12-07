import { Box, Container } from "@mui/material";
import { Button } from "../Button";
import { Typography } from "../Typography";

const JobsFilter: React.FC = () => {
  const defaultHeight = "88px";
  return (
    <Box
      sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
    >
      <Container
        sx={{
          marginLeft: "20px",
          display: "flex",
          height: defaultHeight,
          alignItems: "center",
        }}
      >
        <Typography color="primary">Área de Atuação</Typography>
        <Box
          sx={{
            width: "600px",
            display: "flex",
            justifyContent: "space-around",
            height: defaultHeight,
            alignItems: "center",
          }}
        >
          <Button color="contrast" type="rounded">
            {" "}
            FrontEnd{" "}
          </Button>
          <Button color="contrast" type="rounded">
            {" "}
            BackEnd{" "}
          </Button>
          <Button color="contrast" type="rounded">
            {" "}
            DevOps{" "}
          </Button>
          <Button color="contrast" type="rounded">
            {" "}
            Produtos{" "}
          </Button>
          <Button color="contrast" type="rounded">
            {" "}
            Suporte{" "}
          </Button>
        </Box>
      </Container>

      <Container
        sx={{
          width: "300px",
          display: "flex",
          height: defaultHeight,
          alignItems: "center",
        }}
      >
        <Button type="rounded">Escolher um local V</Button>
      </Container>
    </Box>
  );
};

export default JobsFilter;
