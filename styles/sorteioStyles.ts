import { SxProps, Theme } from "@mui/system";

export const container: SxProps<Theme> = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background:
    "radial-gradient(farthest-corner circle at 0% 0%, #f6f7f8 0%, #ebf5ff 100%)",
  padding: "1.5rem",
};

export const mainContent: SxProps<Theme> = {
  display: "flex",
  flex: 1,
  flexDirection: "column",
  justifyContent: "center",
  gap: "1rem",
  textAlign: "center",
};

export const footerContent: SxProps<Theme> = {
  display: "flex",
  flex: 0,
  width: "100%",
};

export const button: SxProps<Theme> = {
  background: "linear-gradient(225.5deg, #04FFB4 9.38%, #57ACFF 95.68%)",
  borderRadius: "30px",
  color: "#fff",
  width: "100%",
  fontSize: "1.5rem",
  fontWeight: "bold",
};
