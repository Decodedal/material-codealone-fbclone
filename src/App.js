import Feed from "./components/Feed";
import Rigthbar from "./components/Rigthbar";
import Sidebar from "./components/Sidebar";
import { Box, Container, createTheme, ThemeProvider } from "@mui/material";
import { Stack } from "@mui/system";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { useState } from "react";

function App() {

 const [mode,setMode] = useState("light")

 const darkTheme = createTheme({
  palette:{
    mode:mode,
  },
 })

  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent='space-between'>
        <Sidebar mode={mode} setMode ={setMode} />
        <Feed/>
        <Rigthbar/> 
        <Add/>
       </Stack>
    </Box>
    </ThemeProvider>
  );
}

export default App;
