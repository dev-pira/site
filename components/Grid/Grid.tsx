import {
  Grid as MuiGrid,
  GridDirection,
  GridSize,
  GridWrap,
  SxProps,
  Theme,
} from "@mui/material";
import { ResponsiveStyleValue } from "@mui/system";
import React from "react";

interface GridProps {
  sx?: SxProps<Theme>;
  children?: React.ReactNode;
  container?: boolean;
  item?: boolean;
  wrap?: GridWrap;
  zeroMinWidth?: boolean;
  direction?: ResponsiveStyleValue<GridDirection>;
  xs?: boolean | GridSize;
  sm?: boolean | GridSize;
  md?: boolean | GridSize;
  lg?: boolean | GridSize;
  xl?: boolean | GridSize;
}

const Grid: React.FC<GridProps> = ({
  sx,
  children,
  container,
  item,
  wrap,
  zeroMinWidth,
  direction,
  xs = true,
  sm,
  md,
  lg,
  xl,
}: GridProps) => {
  return (
    <MuiGrid
      sx={sx}
      container={container}
      item={item}
      wrap={wrap}
      zeroMinWidth={zeroMinWidth}
      direction={direction}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
    >
      {children}
    </MuiGrid>
  );
};

export default Grid;
