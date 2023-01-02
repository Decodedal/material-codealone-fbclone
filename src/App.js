import Feed from "./components/Feed";
import Rigthbar from "./components/Rigthbar";
import Sidebar from "./components/Sidebar";
import { Box, Container } from "@mui/material";
import { Stack } from "@mui/system";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
    <Box>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent='space-between'>
        <Sidebar/>
        <Feed/>
        <Rigthbar/> 
       </Stack>
    </Box>

    </div>
  );
}

export default App;
