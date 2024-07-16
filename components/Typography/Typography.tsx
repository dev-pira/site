import { SxProps, Typography as MuiTypography } from "@mui/material";
import { Theme } from "@mui/system";

type Color =
  | "primary"
  // | "contrast"
  | "secondary"
  | "transparent"
  | "feature"
  | "green"
  | "gradient_green"
  | "gradient_blue"
  | "gradient_red";
type Variant =
  | "body1"
  | "body2"
  | "introSpan"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";
type Size =
  | "hyper"
  | "huge"
  | "bigger"
  | "big"
  | "normal"
  | "small"
  | "smaller";
type Weight = "bolder" | "bold" | "regular" | "light";

export interface TypographyProps {
  children?: React.ReactNode;
  color?: Color;
  centered?: boolean;
  variant?: Variant;
  fontSize?: Size;
  fontWeight?: Weight;
  // sx?: SxProps;
}

const Typography: React.FC<TypographyProps> = ({
  color = "primary",
  centered,
  children,
  variant,
  fontSize,
  fontWeight,
}: // sx,
TypographyProps) => {
  // define values for params
  const getColor = (color: Color, weight?: Weight): SxProps<Theme> => {
    switch (color) {
      case "secondary":
        return {
          color: weight === "light" ? "rgba(232, 233, 248, 1)" : "#fff",
        };
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
        return {
          color: weight === "light" ? "rgba(102, 103, 125, 1)" : "#212236",
        };
    }
  };

  const getSize = (size: Size): SxProps<Theme> => {
    switch (size) {
      case "hyper":
        return { fontSize: "68px", lineHeight: "68px" };
      case "huge":
        return { fontSize: "48px", lineHeight: "58.09px" };
      //36px
      case "bigger":
        return { fontSize: "24px", lineHeight: "28.13px" };
      case "big":
        return { fontSize: "20px", lineHeight: "24.2px" };
      case "smaller":
        return { fontSize: "12px", lineHeight: "19.2px" };
      case "small":
        return { fontSize: "14px", lineHeight: "22.4px" };
      default:
        return { fontSize: "16px", lineHeight: "19.36px" };
    }
  };

  const getWeight = (weight: Weight): SxProps<Theme> => {
    switch (weight) {
      case "bolder":
        return { fontWeight: "800" };
      case "bold":
        return { fontWeight: "700" };
      case "regular":
        return { fontWeight: "500" };
      default:
        return { fontWeight: "400" };
    }
  };

  // define template for variants
  let customSx: SxProps<Theme> = {};
  switch (variant) {
    case "body1":
      customSx = Object.assign(
        { fontFamily: "Roboto" },
        getColor(color, fontWeight),
        getSize(fontSize ?? "normal"),
        getWeight(fontWeight ?? "regular")
      );
      break;
    case "body2":
      customSx = Object.assign(
        { fontFamily: "Roboto" },
        getColor(color, fontWeight),
        getSize(fontSize ?? "smaller"),
        getWeight(fontWeight ?? "regular")
      );
      break;
    case "h1":
      customSx = Object.assign(
        { fontFamily: "Inter" },
        getColor(color, fontWeight),
        getSize(fontSize ?? "hyper"),
        getWeight(fontWeight ?? "bolder")
      );
      break;
    case "h2":
      customSx = Object.assign(
        { fontFamily: "Inter" },
        getColor(color, fontWeight),
        getSize(fontSize ?? "huge"),
        getWeight(fontWeight ?? "bold")
      );
      break;
    case "h3":
      customSx = Object.assign(
        { fontFamily: "Inter" },
        getColor(color, fontWeight),
        getSize(fontSize ?? "bigger"),
        getWeight(fontWeight ?? "bold")
      );
      break;
    case "h4":
      customSx = Object.assign(
        { fontFamily: "Inter" },
        getColor(color, fontWeight),
        getSize(fontSize ?? "big"),
        getWeight(fontWeight ?? "bolder")
      );
      break;
    case "h5":
      customSx = Object.assign(
        { fontFamily: "Inter" },
        getColor(color, fontWeight),
        getSize(fontSize ?? "normal"),
        getWeight(fontWeight ?? "bold")
      );
      break;
  }

  return (
    <MuiTypography align={centered ? "center" : "inherit"} sx={customSx}>
      {children}
    </MuiTypography>
  );
};

export default Typography;
