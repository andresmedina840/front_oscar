// pages/dashboard.tsx

import React from "react";
import Layout from "../components/Layout";
import { Typography, Grid, Card, CardContent, Button } from "@mui/material";

const Dashboard: React.FC = () => {
  const products = [
    { name: "smartinvestment No. 1", duration: "30 días", price: "$25" },
    { name: "smartinvestment No. 2", duration: "30 días", price: "$50" },
    { name: "smartinvestment No. 3", duration: "30 días", price: "$500" },
  ];

  return (
    <Layout>
      <Typography variant="h4" gutterBottom textAlign="center" color="black">
        Bienvenido al Dashboard
      </Typography>

      <Typography variant="body1" gutterBottom textAlign="center" color="black">
        Selecciona un producto para invertir.
      </Typography>

      <Grid container spacing={3} mt={2}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Duración: {product.duration}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Precio: {product.price}
                </Typography>
              </CardContent>
              <Button size="small" variant="contained" color="primary" fullWidth>
                Invertir Ahora
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Dashboard;
