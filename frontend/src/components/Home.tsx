import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Home() {
    return (
        <div>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "88vh",
                    overflow: "hidden",
                }}
            >
                <Typography 
                component="h1"
                variant="h6"
                color="inherit"
                gutterBottom
              >
                Home
              </Typography>
            </Box>
        </div>
    );
}

export default Home;