import {
  SxProps,
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from "@mui/material";
import { Theme } from "@mui/system";

type Color =
  | "primary"
  | "contrast"
  | "transparent"
  | "feature"
  | "green"
  | "gradient_green"
  | "gradient_blue"
  | "gradient_red";

export interface TypographyProps extends MuiTypographyProps {
  children?: React.ReactNode;
  color?: Color;
  centered?: boolean;
}

const Typography: React.FC<TypographyProps> = ({
  color = "primary",
  centered,
  children,
  ...props
}: TypographyProps) => {
  const getColor = (color: Color): SxProps<Theme> => {
    switch (color) {
      case "contrast":
        return { color: "#fff" };
      case "feature":
        return { color: "#e63462" };
      case "green":
        return { color: "#04FFB4" };
      case "gradient_green":
        return {
          background:
            "linear-gradient(225.5deg, #04FFB4 9.38%, #57ACFF 95.68%)",
          backgroundClip: "text",
          color: "transparent",
        };
      case "gradient_red":
        return {
          background:
            "linear-gradient(233.62deg, #E63462 17.62%, #1E90FF 100%)",
          backgroundClip: "text",
          color: "transparent",
        };
      case "gradient_blue":
        return {
          background:
            "linear-gradient(233.62deg, #1E90FF 17.62%, #E63462 100%)",
          backgroundClip: "text",
          color: "transparent",
        };
      case "transparent":
        return {
          color: "rgba(33,34,54,.2)",
        };

      default:
        return { color: "#212236" };
    }
  };

  const sx: SxProps<Theme> = Object.assign({}, getColor(color));

  return (
    <MuiTypography align={centered ? "center" : "inherit"} sx={sx} {...props}>
      {children}
    </MuiTypography>
  );
};

export default Typography;
