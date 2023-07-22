import react, { useEffect, useState } from 'react';
import question from '../assets/Question.png';
import check from '../assets/check.png';
import ShieldChekered from '../assets/ShieldCheckered.png';
import ChatsCircle from '../assets/ChatsCircle.png';
import Calender from '../assets/Calender.png';
import Detaiils from '../Component/details';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import Footer from '../Component/footer/index';


const MainComponent = () => {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowHeight(window.innerHeight);
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'center', }}>
                    <div style={{ width: '80%' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <h2 style={{ fontSize: 24, fontWeight: 600, color: "#474747" }}>ticket</h2>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: "4%" }}>
                                    <img src={question} style={{ height: 18, width: 18 }} alt="fireSpot" />
                                    <span style={{ marginLeft: 5, fontSize: 16, fontWeight: 400 }}>Help</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Detaiils />
                        </div>
                        <div style={{ height: 100 }}>
                            <div style={{ marginTop: 20 , marginLeft: (windowWidth > 600 && windowWidth < 900) ? 10 : null}}>
                                <span style={{ color: "#474747", fontSize: 24, fontWeight: 600 }}>
                                    {'The Tickete promise'}
                                </span>
                            </div>

                        </div>
                        {
                            windowWidth < 600 ? (<div >
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <div style={{ marginLeft: 15 }}>
                                        <img src={check} style={{ height: 30, width: 30 }} alt="fireSpot" />
                                    </div>
                                    <div >
                                        <Typography gutterBottom variant="h5" component="div" sx={{ marginLeft: 2 }}>
                                            Official tickets
                                        </Typography>
                                        <Typography sx={{ marginLeft: 2 }}>
                                            Authorised reseller to top attraction
                                        </Typography>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', marginTop: 30 }}>
                                    <div style={{ marginLeft: 15 }}>
                                        <img src={ChatsCircle} style={{ height: 30, width: 30 }} alt="fireSpot" />
                                    </div>
                                    <div >
                                        <Typography gutterBottom variant="h5" component="div" sx={{ marginLeft: 2 }}>
                                        24/7 dedicated support
                                        </Typography>
                                        <Typography sx={{ marginLeft: 2 }}>
                                        We're here to help, talk to an expert
                                        </Typography>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', marginTop: 30 }}>
                                    <div style={{ marginLeft: 15 }}>
                                        <img src={Calender} style={{ height: 30, width: 30 }} alt="fireSpot" />
                                    </div>
                                    <div >
                                        <Typography gutterBottom variant="h5" component="div" sx={{ marginLeft: 2 }}>
                                        Flexible bookings
                                        </Typography>
                                        <Typography sx={{ marginLeft: 2 }}>
                                        Book stress-free with easy cancellation
                                        </Typography>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', marginTop: 30 }}>
                                    <div style={{ marginLeft: 15 }}>
                                        <img src={ShieldChekered} style={{ height: 30, width: 30 }} alt="fireSpot" />
                                    </div>
                                    <div >
                                        <Typography gutterBottom variant="h5" component="div" sx={{ marginLeft: 2 }}>
                                        100% secure payments
                                        </Typography>
                                        <Typography sx={{ marginLeft: 2 }}>
                                        Internationally recognized encrypted payment process
                                        </Typography>
                                    </div>
                                </div>

                            </div>) : <div style={{ display: 'flex', flexDirection:  (windowWidth > 600 && windowWidth < 900) ? 'column': 'row', alignItems: (windowWidth > 600 && windowWidth < 900) ? 'center': null }}>
                                <Card sx={{ maxWidth: 245, marginTop: (windowWidth > 600 && windowWidth < 900) ? 0 :  20, padding: 2, marginBottom: 5, marginRight: 5, maxHeight: 200 }}>
                                    <CardActionArea>
                                        <div style={{ marginLeft: 15 }}>
                                            <img src={check} style={{ height: 30, width: 30 }} alt="fireSpot" />
                                        </div>
                                        <CardContent>
                                            <Typography gutterBottom variant={windowWidth < 1000? "h6" :"h5"} component="div">
                                                Official tickets
                                            </Typography>
                                            <Typography >
                                                Authorised reseller to top attraction
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ maxWidth: 245, marginTop: (windowWidth > 600 && windowWidth < 900) ? 0 :  20, padding: 2, marginBottom: 5, marginRight: 5, maxHeight: 200 }}>
                                    <CardActionArea>
                                        <div style={{ marginLeft: 15 }}>
                                            <img src={ChatsCircle} style={{ height: 30, width: 30 }} alt="fireSpot" />
                                        </div>
                                        <CardContent>
                                            <Typography gutterBottom variant={windowWidth < 1000? "h6" :"h5"} component="div">
                                                24/7 dedicated support
                                            </Typography>
                                            <Typography >
                                                We're here to help, talk to an expert
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ maxWidth: 245, marginTop: (windowWidth > 600 && windowWidth < 900) ? 0 :  20, padding: 2, marginBottom: 5, marginRight: 5, maxHeight: 200 }}>
                                    <CardActionArea>
                                        <div style={{ marginLeft: 15 }}>
                                            <img src={Calender} style={{ height: 30, width: 30 }} alt="fireSpot" />
                                        </div>
                                        <CardContent>
                                            <Typography gutterBottom variant={windowWidth < 1000? "h6" :"h5"} component="div">
                                                Flexible bookings
                                            </Typography>
                                            <Typography >
                                                Book stress-free with easy cancellation
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ maxWidth: 245, marginTop: (windowWidth > 600 && windowWidth < 900) ? 0 :  20, padding: 2, marginBottom: 5, marginRight: 5, maxHeight: 200 }}>
                                    <CardActionArea>
                                        <div style={{ marginLeft: 15 }}>
                                            <img src={ShieldChekered} style={{ height: 30, width: 30 }} alt="fireSpot" />
                                        </div>
                                        <CardContent>
                                            <Typography gutterBottom variant={windowWidth < 1000? "h6" :"h5"} component="div">
                                                100% secure payments
                                            </Typography>
                                            <Typography >
                                                Internationally recognized encrypted payment process
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                        }

                    </div>
                </div>
                <Footer></Footer>
            </div>
        </>
    )
}

export default MainComponent; 