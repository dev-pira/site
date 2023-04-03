import { SxProps, Typography as MuiTypography } from "@mui/material";
import { Theme } from "@mui/system";

export interface TypographyProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "span";
  children?: React.ReactNode;
  color?:
    | "primary"
    | "contrast"
    | "transparent"
    | "feature"
    | "green"
    | "gradient_green"
    | "gradient_red";
  bigger?: boolean;
  smaller?: boolean;
  centered?: boolean;
}

const Typography: React.FC<TypographyProps> = ({
  bigger,
  color = "primary",
  centered,
  children,
  smaller,
  variant = "body1",
}: TypographyProps) => {
  const getHeaderColor = (
    color:
      | "primary"
      | "contrast"
      | "transparent"
      | "feature"
      | "green"
      | "gradient_green"
      | "gradient_red"
  ): SxProps<Theme> => {
    if (color === "contrast") return { color: "white" };
    else if (color === "feature") return { color: "#e63462" };
    else if (color === "green") return { color: "#04FFB4" };
    else if (color === "gradient_green")
      return {
        background: "linear-gradient(225.5deg, #04FFB4 9.38%, #57ACFF 95.68%)",
        backgroundClip: "text",
        color: "transparent",
      };
    else if (color === "gradient_red")
      return {
        background: "linear-gradient(233.62deg, #E63462 17.62%, #1E90FF 100%)",
        backgroundClip: "text",
        color: "transparent",
      };
    else if (color === "transparent")
      return {
        color: "rgba(33,34,54,.2)",
      };
    return { color: "#212236" };
  };

  const fontModifier = (
    size: number,
    bigger?: boolean,
    smaller?: boolean
  ): number => {
    if (bigger) return size + 2;
    else if (smaller) return size - 2;
    return size;
  };

  const getFontFormat = (
    variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "span",
    bigger?: boolean,
    smaller?: boolean
  ): SxProps<Theme> => {

    switch (variant) {
      case 'h1':
        return {
          fontFamily: "'Inter', sans-serif;",
          fontWeight: "800",
          fontStyle: "normal",
          fontSize: `${fontModifier(68, bigger, smaller)}px`,
          lineHeight: "100%",
          letterSpacing: '-0.045em;'
        };
      case 'h2':
        return {
          fontFamily: "'Inter', sans-serif;",
          fontWeight: "800",
          fontStyle: "normal",
          fontSize: `${fontModifier(40, bigger, smaller)}px`,
          lineHeight: "100%",
        };
      case 'h3':
        return {
          fontFamily: "'Inter', sans-serif;",
          fontWeight: "700",
          fontStyle: "normal",
          fontSize: `${fontModifier(48, bigger, smaller)}px`,
          lineHeight: "100%",
        };
      case 'h4':
        return {
          fontFamily: "'Inter', sans-serif;",
          fontWeight: "700",
          fontStyle: "normal",
          fontSize: `${fontModifier(20, bigger, smaller)}px`,
          lineHeight: "100%",
        };
      case 'h5':
      case 'h6':
        return {
          fontFamily: "'Inter', sans-serif;",
          fontWeight: "700",
          fontStyle: "normal",
          fontSize: `${fontModifier(16, bigger, smaller)}px`,
          lineHeight: "100%",
        };
      case 'body1':
        return {
          fontFamily: "'Roboto', sans-serif;",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: `${fontModifier(16, bigger, smaller)}px`,
          lineHeight: "160%",
        };
      default:
        return {
          fontFamily: "inherit",
          fontSize: "inherit",
          fontWeight: "inherit",
          lineHeight: "inherit",
          letterSpacing: "inherit",
        };
    }    
  };

  const sx: SxProps<Theme> = Object.assign(
    {},
    getHeaderColor(color),
    getFontFormat(variant, bigger, smaller)
  );

  const adaptedVarian = variant === "span" ? "body2" : variant;
  return (
    <MuiTypography
      align={centered ? "center" : "inherit"}
      variantMapping={{ body2: "span" }}
      variant={adaptedVarian}
      sx={sx}
    >
      {children}
    </MuiTypography>
  );
};

export default Typography;
