import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import backgroundImage from '../../assets/images/reg 9.png';
import backgroundImageMobile from '../../assets/images/LoginMD.png';
import LogoImg from '../../assets/images/attendme1 - Copy.png'

export default function Signout() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const defaultTheme = createTheme();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (username === "Admin" && password === "Admin@123") {
      const MyToken = 'dtscustomtokenforlogin';
      localStorage.setItem('token', MyToken);
      navigate("/attendenceLog");
    } else {
      Swal.fire({
        icon: "error",
        title: "Error...",
        text: "Your username or password is incorrect.",
      });
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          justifyContent: "center",
          pr: "10%",
          pl: "10%",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          xl={3}
          sx={{
            background: "rgba(163,189,222,0.2);",
            WebkitBackdropFilter: "blur(1px)", // Use Webkit prefix
            backdropFilter: "blur(1px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "25px"
          }}
        >
          <Box>
            <Box
              sx={{
                my: 4,
                mx: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={LogoImg}
                alt="Logo"
                style={{
                  width: "200px",
                  height: "auto",
                }}
              />
              <Typography
                component="h1"
                variant="h5"
                sx={{
                  my: 2,
                  fontFamily: "segoe ui",
                  fontWeight: "bold",
                  color: "Black",
                }}
              >
                Log in to your Account
              </Typography>
            </Box>

            <Box
              component="form" // Form element for handling submission
              onSubmit={handleSubmit} // Handle form submission
              sx={{
                my: 2,
                mx: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box sx={{ mt: -2 }}>
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <EmailOutlinedIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                  <TextField
                    required
                    fullWidth
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    variant="outlined"
                    margin="normal"
                    autoComplete="email"
                    autoFocus
                    autoCapitalize="none"
                    autocompletetype="email"
                    inputMode="text"
                    type="text"
                    size="small"
                    InputProps={{ disableUnderline: true }}
                    style={{
                      backgroundColor: "rgba(255,255,255,0.5)",
                      borderRadius: "4px",
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <VpnKeyOutlinedIcon sx={{ color: "action.active", mr: 1, my: 1 }} />
                  <TextField
                    required
                    margin="normal"
                    autoComplete="password"
                    label="Password"
                    autoFocus
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoCapitalize="none"
                    autocompletetype="password"
                    inputMode="text"
                    type="password"
                    variant="outlined"
                    size="small"
                    InputProps={{ disableUnderline: true }}
                    style={{
                      backgroundColor: "rgba(255,255,255,0.5)",
                      borderRadius: "4px",
                    }}
                  />
                </Grid>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 2, mb: 1 }}
                  autoFocus
                >
                  Log In
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
