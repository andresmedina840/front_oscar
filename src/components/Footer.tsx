import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const Footer: React.FC = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60px",
        backgroundColor: theme.palette.primary.main,
        marginTop: "auto",
      }}
    >
      <Typography 
        variant="body1" // Cambié body2 a body1 para que sea más grande
        color="white"
        sx={{ fontSize: "2rem" }} // Puedes ajustar el tamaño aquí si necesitas un ajuste fino
      >
        © {currentYear} Todos los derechos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
