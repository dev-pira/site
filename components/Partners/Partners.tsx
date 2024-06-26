import { Box, Container, Grid, Link } from "@mui/material";
import { Button } from "../Button";
import { Typography } from "../Typography";
import { Partner } from "../../models/partner";
import Image from "next/legacy/image";
import { sendGAEvent } from "@next/third-parties/google";

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
              (p) => p.category === category,
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
                            <Link href={partner.siteUrl} target="_blank">
                              <Box>
                                {partner.logoUrl ? (
                                  <Image
                                    src={partner.logoUrl}
                                    alt={partner.name}
                                    height={78}
                                    width={171}
                                    objectFit="contain"
                                  />
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
    <Container data-scroll-wrapper>
      <Grid container>
        <Box
          sx={{
            padding: "52px 0px",
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
                  <Button
                    href="mailto:contato@devpira.com.br"
                    onClick={() =>
                      sendGAEvent({
                        event: "Clicou no botão na seção Apoio",
                        value: "Apoio",
                      })
                    }
                  >
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
