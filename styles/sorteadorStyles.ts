import { SxProps, Theme } from "@mui/system";

export const container: SxProps<Theme> = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background:
    "radial-gradient(farthest-corner circle at 0% 0%, #f6f7f8 0%, #ebf5ff 100%)",
};

export const innerContainer: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  marginTop: "30px",
  flexDirection: "column",
  gap: "5px",
  textAlign: "center",
};

export const paper: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "50vh",
  padding: "16px",
  position: "relative",
};

export const buttonNextResult: SxProps<Theme> = {
  background: "linear-gradient(225.5deg, #04FFB4 9.38%, #57ACFF 95.68%)",
  borderRadius: "30px",
  color: "#fff",
  width: "250px",
  fontSize: "1.5rem",
  fontWeight: "bold",
  ":disabled": {
    background: "lightgray",
    ":before": {
      animation: "none",
    },
  },
};

export const buttonNextDrawn: SxProps<Theme> = {
  display: "flex",
  flex: 0,
  alignSelf: "end",
};

export const resultBox: SxProps<Theme> = {
  display: "flex",
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  gap: "5px",
  textAlign: "center",
};

export const footerPaper: SxProps<Theme> = {
  position: "absolute",
  bottom: "0",
  left: "0",
  width: "100%",
  padding: "16px",
};

export const footerContainer: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  gap: "8px",
};
