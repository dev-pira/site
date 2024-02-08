import { Box } from "@mui/material";
import { Typography } from "../Typography";
import { Member } from "../../models/member";
import { Button } from "../Button";

export type MemberCardProps = { member: Member };

const MemberCard: React.FC<MemberCardProps> = ({ member }: MemberCardProps) => {
  return (
    <Box
      key={member.name}
      sx={{
        background: `white url("${member.portraitUrl}") no-repeat center center`,
        backgroundSize: "cover",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          background:
            "linear-gradient(180.06deg, rgba(33, 34, 54, 0.15) 0.05%, #212236 74.97%)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "362px",
          width: "254px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            padding: "16px",
          }}
        >
          &nbsp;
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            padding: "16px",
          }}
        >
          <Typography variant="h4" color="gradient_green">
            {member.name}
          </Typography>
          <Typography variant="h5" color="contrast">
            {member.job}
          </Typography>
          <Button
            variant="contained"
            color="transparent"
            href={member.profileUrl}
          >
            Entrar em Contato
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MemberCard;
