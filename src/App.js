import { Button, styled, Typography } from "@mui/material";
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { Add } from "@mui/icons-material";
import { color } from "@mui/system";

const BlueButton = styled(Button)({
  backgroundColor:"skyblue",
  color:"gray",
  margin:5,
  "&:hover":{
    backgroundColor:"lightblue"
  },
  "&:disabled":{
    bgcolor:"gray",
    color:"white"
  },
});

function App() {
  return (
    <div className="App">
        <Button variant="text">Text</Button>
        <Button startIcon={<ElectricBoltIcon/>} size="small" color="secondary" variant="contained">Contained</Button>
        <Button startIcon={<Add/>} size="small" color="success" variant="contained">add new post</Button>
        <Button variant="outlined">Outlined</Button>
        <Typography variant="h1" component='h2'>
          h1.heading
        </Typography>
        <BlueButton startIcon={<Add/>}>Button</BlueButton>
        <BlueButton>Button</BlueButton>
        <BlueButton>Button</BlueButton>
    </div>
  );
}

export default App;
