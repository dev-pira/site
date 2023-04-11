import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
    interface TypographyVariants {
        introSpan: React.CSSProperties;
    }
  
    interface TypographyVariantsOptions {
        introSpan?: React.CSSProperties;
    }
  }
  
  declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        introSpan: true;
        h3: false;
    }
  }

export const theme = createTheme({
    typography: {
        fontFamily: '"Roboto", sans-serif',
        introSpan: {
            fontFamily: '"Inter", sans-serif;',
            fontWeight: 800,
            fontStyle: 'normal',
            fontSize: '4.25rem',
            lineHeight: '100%',
            letterSpacing: '-0.045em'
        },
        h1: {
            fontFamily: '"Inter", sans-serif;',
            fontWeight: 800,
            fontStyle: 'normal',
            fontSize: '4.25rem',
            lineHeight: '100%',
            letterSpacing: '-0.045em',
            
        },
        h2: {
            fontFamily: '"Inter", sans-serif;',
            fontWeight: 800,
            fontStyle: 'normal',
            fontSize: '2.5rem',
            lineHeight: '100%',            
        },
        h3: {
            fontFamily: '"Inter", sans-serif;',
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: '3rem',
            lineHeight: '100%',
        },
        h4: {
            fontFamily: '"Inter", sans-serif;',
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: '1.25',
            lineHeight: '100%',            
        },
        h5: {
            fontFamily: '"Inter", sans-serif;',
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: '1rem',
            lineHeight: '100%',
        },
        h6: {
            fontFamily: '"Inter", sans-serif;',
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: '1rem',
            lineHeight: '100%',            
        },
        body1: {
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: '160%',
        },
        body2: {
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: '100%',
        },
    },

    components: {
        MuiTypography: {
          defaultProps: {
            variantMapping: {
              introSpan: 'span',
            },
          },
        },
      },
});