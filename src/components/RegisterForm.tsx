import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Box,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const RegisterForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      numeroCelular: "",
      password: "",
      email: "",
      codigoInvitado: "",
    },
    validationSchema: Yup.object({
      numeroCelular: Yup.string()
        .matches(/^[0-9]+$/, "Solo se permiten números")
        .required("El número de celular es obligatorio"),
      password: Yup.string().required("La contraseña es obligatoria"),
      email: Yup.string()
        .email("Correo electrónico inválido")
        .required("El correo es obligatorio"),
      codigoInvitado: Yup.string()
        .matches(/^[0-9]+$/, "Solo se permiten números")
        .min(1, "El código debe tener al menos 1 carácter")
        .max(10, "El código no puede tener más de 10 caracteres"),
    }),
    onSubmit: async (values) => {
      try {
        await authService.register(values);
        navigate("/login");
      } catch (error) {
        console.error("Registration failed", error);
      }
    },
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        backgroundImage: "url(/images/fondo.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Box
        sx={{
          maxWidth: 400,
          width: "90%",
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto 24px",
            overflow: "hidden",
          }}
        >
          <img
            src="/images/logo_1.png"
            alt="Logo"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        <form onSubmit={formik.handleSubmit}>
          <TextField
            label="Número de Celular"
            fullWidth
            margin="normal"
            slotProps={{
              input: {
                inputProps: { maxLength: 15 },
              },
            }}
            {...formik.getFieldProps("numeroCelular")}
            error={
              formik.touched.numeroCelular &&
              Boolean(formik.errors.numeroCelular)
            }
            helperText={
              formik.touched.numeroCelular && formik.errors.numeroCelular
            }
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            slotProps={{
              input: {
                inputProps: { maxLength: 45 },
              },
            }}
            {...formik.getFieldProps("email")}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            label="Contraseña"
            type={showPassword ? "text" : "password"}
            fullWidth
            margin="normal"
            slotProps={{
              input: {
                inputProps: { maxLength: 30 },
              },
            }}
            {...formik.getFieldProps("password")}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="Código de invitado"
            fullWidth
            margin="normal"
            slotProps={{
              input: {
                inputProps: { maxLength: 10 },
              },
            }}
            {...formik.getFieldProps("codigoInvitado")}
            error={
              formik.touched.codigoInvitado &&
              Boolean(formik.errors.codigoInvitado)
            }
            helperText={
              formik.touched.codigoInvitado && formik.errors.codigoInvitado
            }
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Registrar
          </Button>
        </form>
        <Button
          variant="outlined"
          fullWidth
          sx={{ mt: 2 }}
          onClick={() => navigate("/login")}
        >
          Volver a Login
        </Button>
      </Box>
    </Box>
  );
};

export default RegisterForm;
