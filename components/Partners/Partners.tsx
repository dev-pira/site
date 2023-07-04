import { Box, Container, Grid, Link } from "@mui/material";
import { Button } from "../Button";
import { Typography } from "../Typography";
import { Partner } from "../../models/model";

export interface PartnersProps {
  description: string;
  partners?: Partner[];
}

const Partners: React.FC<PartnersProps> = ({
  description,
  partners,
}: PartnersProps) => {
  let partnersBlock;
  if (partners) {
    const categories = partners
      .map((p) => p.category)
      .filter((value, index, self) => self.indexOf(value) === index);

    partnersBlock = (
      <Grid item md={6}>
        <Box>
          {categories.map((category) => {
            const partnersInCategory = partners.filter(
              (p) => p.category === category
            );
            return (
              <Box sx={{ flex: 1, display: "flex" }} key={category}>
                <Grid container sx={{ display: "flex", gap: "16px" }}>
                  <Box>
                    <Box sx={{ padding: "8px" }}>
                      <Typography variant="h4">{category}</Typography>
                    </Box>
                    <Grid container sx={{ display: "flex", gap: "16px" }}>
                      {partnersInCategory.map((partner) => {
                        return (
                          <Grid item key={partner.name}>
                            <Link href={partner.link} target="_blank">
                              <Box>
                                {partner.logoUrl ? (
                                  <picture>
                                    <img
                                      src={partner.logoUrl}
                                      alt={`Logotipo de ${partner.name}`}
                                      style={{ maxWidth: "100%" }}
                                    />
                                  </picture>
                                ) : (
                                  partner.name
                                )}
                              </Box>
                            </Link>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Box>
                </Grid>
              </Box>
            );
          })}
        </Box>
      </Grid>
    );
  }
  return (
    <Container>
      <Grid container>
        <Box
          sx={{
            padding: "88px 0px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: "110px" }}>
            {partnersBlock}
            <Grid item md={partnersBlock ? 6 : 12}>
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <Typography variant="h3">Apoio</Typography>
                <Typography>{description}</Typography>
                <Box>
                  <Button href="mailto:contato@devpira.com.br">
                    Apoiar o evento
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Container>
  );
};

export default Partners;
