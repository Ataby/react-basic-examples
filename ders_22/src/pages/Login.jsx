import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/result.svg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Formik,Form } from 'formik';
import  TextField   from "@mui/material/TextField";
import LoadingButton from '@mui/lab/LoadingButton';
import * as yup from 'yup';
import React from 'react';
import useAuthCall from "../hooks/useAuthCall";
import { useEffect } from "react";





const loginSchema = yup.object().shape({
  //VALIDATION YAPILMASI ICIN ISTERSEK BURADA YAZABILIRIZ VEYA INLINE OLARAK DA BELIRTEBILIRIZ.
  // name: yup.string().required(),
  // age: yup.number().required().positive().integer(),
  email: yup
    .string()
    .email("Dogru formatta mail giriniz")
    .required("Lutfen mail adresi giriniz"),
  password: yup
    .string()
    .required("Lutfen sifrenizi giriniz")
    .min(8,"En az 8 karakter gerekir")
    .max(16,"En fazla 16 karakter kullanabilirsiniz")
    .matches(/\d+/,"Sifreniz en az 1 rakam icermelidir")
    .matches(/[a-z]+/,"Sifreniz en az 1 kucuk harf icermelidir")
    .matches(/[A-Z]+/,"Sifreniz en az 1 buyuk harf icermelidir")
  // website: yup.string().url().nullable(),
  // createdOn: yup.date().default(() => new Date())
});
 

const Login = () => {
  const navigate = useNavigate();
  const { currentUser, error, loading } = useSelector((state) => state?.auth);
  const {login}= useAuthCall();

  useEffect(() => {
    if(currentUser){
      navigate("/stock")
    }
  
    //DEPENDENCY ARRAY EKLENDIKTEN SONRA DID.MOUNT VE DID.UPDATE GIBI CALISMASINI SAGLADIK.
  }, [currentUser])
  // GIRIS YAPILDIKTAN SONRA SAYFANIN VERILERI GETIRMESI ICIN RENDER EDILMESI GEREKIR. BUNU DA CURRENT USER'A BAGLAYARAK SAYFANIN RENDER EDILMESINI SAGLAMIS OLDUK. 
  

  return (
     
    <Container maxWidth="lg">
    
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12} mb={3}>
          <Typography variant="h3" color="primary" align="center">
            STOCK APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={4}
            color="secondary.light"
          >
            Login
          </Typography>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values, actions) => {
              //LOGIN VEYA REGISTER ISTEGI GONDER, SONRA DA FORMU TEMIZLE
              login(values);
              navigate("/stock");
              actions.resetForm();
              actions.setSubmitting(false);
              //SUBMIT BUTONUNA BASILDIGINDA FORMIK BUNU OTOMATIK TRUE YAPAR. ISLEM BITINCE MANUEL FALSE YAPILIR.
               
            }}
          >
            {({
              values,
              isSubmitting,
              handleChange,
              handleBlur,
              touched,
              errors,
            }) => (
              <Form>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <TextField
                    label="Email"
                    name="email"
                    id="email"
                    type="email"
                    variant="outlined"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />

                  <TextField
                    label="Password"
                    name="password"
                    id="password"
                    type="password"
                    variant="outlined"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                  />
                  <LoadingButton
                    type="submit"
                    loading={loading}
                    loadingPosition="center"
                    variant="contained"
                  >
                    Submit
                  </LoadingButton>
                </Box>
              </Form>
            )}
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/register">Do you have not an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={10} sm={7} md={6}>
          <Container>
            <img src={image} alt="img" />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
