import { Box } from "@mui/material";
import { Member } from "../../models/member";
import { MemberCard } from "../MemberCard";
import { Typography } from "../Typography";

export interface MemberProps {
  members: Member[];
}

const Members: React.FC<MemberProps> = ({ members }: MemberProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#212236;",
        maxWidth: "100vw",
        padding: { xs: "0px", sm: "88px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "100vw",
          rowGap: "2.5rem",
          py: { xs: "2.4rem", sm: "1.8rem" },
          px: { xs: "1rem", sm: "1.8rem" },
          justifyContent: "space-around",
        }}
      >
        <Typography variant="h2" color="contrast">
          Membros da organização
        </Typography>
        {/* CARDS */}
        <Box
          sx={{
            display: "flex",
            maxWidth: "100vw",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
          }}
        >
          {members.map((memberData) => {
            return <MemberCard key={memberData.name} member={memberData} />;
          })}
        </Box>
        {/* /CARDS */}
      </Box>
    </Box>
  );
};

export default Members;
