import styled from "@emotion/styled";
import Avatar from "../../../../assets/images/avatar.png";
import { Box, Container, Grid, Typography } from "@mui/material";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/StyledButton/AnimatedBackground/AnimatedBackground";
import theme from "../../../../theme";

const Hero = () => {

    const StyledHero = styled("div")(()=> ({
        backgroundColor: "black",
        height:"100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up("xs")]: {
            paddingTop: "100px", 
        },
        [theme.breakpoints.up("md")]: {
            paddingTop: "0", 
        }
    }))

    const StyledImg = styled("img")(()=> ({
        width: "80%",
        borderRadius: "50%",
        border: '1px solid white'
    }))

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid size={{xs: 12, md: 5}} >
                            <Box position={"relative"}>
                                <Box position={"absolute"} width={"150%"} top={-100} right={0}>
                                    <AnimatedBackground/>
                                </Box>
                                <Box position={"relative"} textAlign={"center"}>
                                    <StyledImg src={Avatar}/>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid size={{xs: 12, md: 7}}>
                            <Typography color="secondary" variant="h1" textAlign="center" pb={2}>William Hatakeyama</Typography>
                            <Typography color="primary" variant="h2" textAlign="center" pb={2}>I'm a Software Engineer</Typography>
                            <Grid container display={"flex"} justifyContent={"center"} spacing={3} pt={3}>
                                <Grid size={{xs: 12, md: 4}} display={"flex"} justifyContent={"center"}>
                                    <StyledButton>
                                        <DownloadForOfflineIcon/>
                                        <Typography>
                                            Download CV
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid size={{xs: 12, md: 4}} display={"flex"} justifyContent={"center"}>                                   
                                    <StyledButton>
                                        <MailOutlineIcon/>
                                        <Typography>
                                            Contact me
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero
