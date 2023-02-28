import Carousel from "../components/Carousel"
import Box from '@mui/material/Box';

export default function HomePage () {
    return(
        <div className="HomePage">
            <Box sx={{ p: 4}}>
                <h1> HomePage </h1>
                <Carousel/>   
            </Box>  
        </div>
    )
}