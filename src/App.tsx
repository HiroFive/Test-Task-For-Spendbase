import React from "react";
import "./App.css";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import TreeViewer from "./components/TreeViewer/TreeViewer";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <TreeViewer></TreeViewer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
