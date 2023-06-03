import { Box, Typography, styled } from '@mui/material';

const Image = styled(Box)`
    background: url(https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2020/05/black-paper-background.jpg) center/100% repeat-x #000;
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;

const Banner = () => {
    return (
        <Image>
            <Heading>BLOGBUDZ</Heading>
        </Image>
    )
}

export default Banner;