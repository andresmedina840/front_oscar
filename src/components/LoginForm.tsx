import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Box,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import authService from "../services/authService";

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      numeroCelular: "",
      password: "",
      token: "",
      recaptcha: "",
    },
    validationSchema: Yup.object({
      numeroCelular: Yup.string()
        .matches(/^[0-9]+$/, "Solo se permiten números")
        .min(5, "Debe tener al menos 5 dígitos")
        .max(15, "No puede tener más de 15 dígitos")
        .required("Número de celular es requerido"),
      password: Yup.string().required("Contraseña es requerida"),
      token: Yup.string()
        .matches(/^\d{6}$/, "Debe ser un número de 6 dígitos")
        .required("Token de Microsoft Authenticator es requerido"),
      recaptcha: Yup.string().required(
        "La validación de reCAPTCHA es requerida"
      ),
    }),
    onSubmit: async (values) => {
      try {
        await authService.login(values);
        window.location.href = "/dashboard";
      } catch (error) {
        console.error("Login fallido", error);
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
            label="Token"
            fullWidth
            margin="normal"
            slotProps={{
              input: {
                inputProps: { maxLength: 6 },
              },
            }}
            {...formik.getFieldProps("token")}
            error={formik.touched.token && Boolean(formik.errors.token)}
            helperText={formik.touched.token && formik.errors.token}
          />

          <ReCAPTCHA
            sitekey="6LeX940qAAAAAIr_yYjPtV-sma0YiJSHUKrtBP3T"
            onChange={(value) => formik.setFieldValue("recaptcha", value)}
          />
          {formik.touched.recaptcha && formik.errors.recaptcha && (
            <Typography color="error">{formik.errors.recaptcha}</Typography>
          )}

          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
        </form>

        <Button
          variant="outlined"
          fullWidth
          sx={{ mt: 2 }}
          onClick={() => (window.location.href = "/register")}
        >
          Ir al Registro
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
