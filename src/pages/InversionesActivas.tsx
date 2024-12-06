// pages/InversionesActivas.tsx
import * as React from "react";
import { Grid, Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from "@mui/material";
import Layout from "../components/Layout";

const InversionesActivas = () => {
  const inversion = {
    porcentajeDiario: "0,40% cada día durante 30 días",
    invertido: "50,00 USD (El capital se recuperará)",
    fechaInicio: "19 de noviembre de 2024 09:39 a. m.",
    fechaFinal: "19 de diciembre de 2024 09:39 a. m.",
    proximoRetorno: "30 de noviembre de 2024 09:46 a. m.",
    rendimientoTotal: "0,20 x 11 = 2,20 USD",
  };

  return (
    <Layout>
      <Grid container spacing={3} sx={{ padding: 3 }}>
        <Grid item xs={12} sm={6} md={8}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Inversión inteligente nº 2
              </Typography>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="investment details table">
                  <TableBody>
                    <TableRow>
                      <TableCell><strong>Inversión:</strong></TableCell>
                      <TableCell>{inversion.porcentajeDiario}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><strong>Invertido:</strong></TableCell>
                      <TableCell>{inversion.invertido}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><strong>Fecha de inicio:</strong></TableCell>
                      <TableCell>{inversion.fechaInicio}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><strong>Fecha Final:</strong></TableCell>
                      <TableCell>{inversion.fechaFinal}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><strong>Próximo retorno:</strong></TableCell>
                      <TableCell>{inversion.proximoRetorno}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><strong>Rendimiento total:</strong></TableCell>
                      <TableCell>{inversion.rendimientoTotal}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default InversionesActivas;
