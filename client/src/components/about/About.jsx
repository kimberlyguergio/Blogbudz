import { Box, styled, Typography, Link } from  '@mui/material';
import { GitHub, Instagram, Email } from  '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;
const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;
const Text = styled(Typography)`
    color: #878787;
    text-align: center;
`;

const About = () => {
    return (
        <Box>
            <Banner />
            <Wrapper />
            <Typography variant="h3" style={{ textAlign: "center"}}>Blogbudz</Typography>
            <Text variant="h5">Blogbudz is a daily lifestyle site that covers style, culture, food, travel, relationships and parenting.
             Known industry wide for its large and deeply engaged readership, Blogbudz encourages visitors to “come for the blog, stay for the comments.” 
             We're glad you are here. Thank you so much for reading
            <Box component="span" style={{marginLeft: 5 }}>
                <Link href="https://www.github.com/kimguergio" color="inherit" target="_blank"><GitHub /></Link>
                </Box> 
             </Text>
             <Text variant="h5">
                Need something built or simply want to have chat? Reach out to me 
                <Box component="span" style={{marginLeft: 5 }}>
                <Link href="https://www.instagram.com/kimberliamore_" color="inherit" target="_blank"><Instagram /></Link>
             </Box>
             or send me an Email
             <Link href="Emailto:kimberlyguergio@gmail.com?Subject=This is a subject" color="inherit" target="_blank"><Email /></Link>
             </Text>
        </Box>
    )
}

export default About;