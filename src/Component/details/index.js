import react, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import Vector from '../../assets/Vector.png';
import Calender from '../../assets/Calender.png';
import Clock from '../../assets/Clock.png';
import Coupon from '../../assets/Coupon.png';
import Radiobutton from '../../assets/Radiobutton.png';
import Rectangle_img from '../../assets/Rectangle_img.png';
import Rectangle_76 from '../../assets/Rectangle_76.png';
import Line from '../../assets/Line.png';
import Line_2 from '../../assets/Line_2.png';
import card from '../../assets/card.png';
import Minus from '../../assets/Minus.png';
import Plus from '../../assets/Plus.png';
import { green } from '@mui/material/colors';
import { spacing } from '@mui/system';
import "./index.css";


const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.title,
});

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },]

const Detaiils = () => {
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
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', marginTop: "8%" }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: windowWidth < 900 ? '100%' : '70%' }}>
                <div style={{ color: '#474747', fontSize: windowWidth < 600 ? 24 :  48, fontWeight: 600, marginTop: -16 }}>Confirm and pay</div>
                {
                    windowWidth < 900 ? (
                        <div style={{ marginTop: -1, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', }}>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <div>
                                        <img src={Rectangle_76} style={{ height: '30%', width: '90%' }} alt="fireSpot" />
                                    </div>
                                    <div>
                                        <span style={{ fontSize: windowWidth < 600 ? 14 : 18, fontWeight: 600, color: '#474747' }}>Amsterdam opeg boat canal cruise - Live Ggide - from Anne Frgnk House</span>
                                    </div>
                                    <div style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                                        <img src={Vector} style={{ height: '3%', width: '5%', marginBottom: -5 }} alt="fireSpot" />
                                        <span style={{ marginLeft: 15, color: "#474747", fontWeight: 600 }}>{'<variant name>'}</span>
                                    </div>
                                    <div style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                                        <img src={Calender} style={{ height: '3%', width: '5%', marginBottom: -3 }} alt="fireSpot" />
                                        <span style={{ marginLeft: 15, color: "#474747", fontWeight: 600 }}>{'<date>'}</span>
                                    </div>
                                    <div style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                                        <img src={Clock} style={{ height: '4%', width: '6%', marginBottom: -6 }} alt="fireSpot" />
                                        <span style={{ marginLeft: 15, color: "#474747", fontWeight: 600, marginLeft: 12 }}>{'<time>'}</span>
                                    </div>
                                </div>

                                <div style={{ marginTop: 55 }}>
                                    <div>
                                        <span style={{ fontSize: 18, fontWeight: 600, color: '#474747' }}>Tickets overview</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                                        <span style={{ color: "#474747" }}>{'<pax type>'}</span>
                                        <span style={{ color: "#474747" }}>{'<price>'}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 17 }}>
                                        <span style={{ color: "#474747" }}>{'<pax type>'}</span>
                                        <span style={{ color: "#474747" }}>{'<price>'}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 17 }}>
                                        <span style={{ color: "#474747" }}>{'<free>'}</span>
                                        <span style={{ color: "#474747" }}>{'<price>'}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 17 }}>
                                        <span style={{ color: "#228B22" }}>{'<discount applied>'}</span>
                                        <span style={{ color: "#228B22" }}>{'<- price>'}</span>
                                    </div>
                                    <div style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                                        <img src={Coupon} style={{ height: '3%', width: '5%', marginBottom: -5 }} alt="fireSpot" />
                                        <span style={{ marginLeft: 20, color: '#228B22', marginLeft: 12, fontSize: 14, fontWeight: 500, textDecoration: "underline" }}>{'Have a promo code?'}</span>
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                                        <span style={{ fontWeight: 600, color: "#474747" }}>{'Total'}</span>
                                        <span style={{ fontWeight: 600, color: "#474747" }}>{'<price>'}</span>
                                    </div>
                                    <div>
                                        <span style={{ fontSize: 12, fontWeight: 400, color: '#595959' }}>{'You will pay in <currency>'}</span>
                                    </div>

                                    <div style={{ backgroundColor: '#F5F5F5', padding: 10, borderRadius: 20, marginTop: 20 }}>
                                        <div>
                                            <spna style={{ fontSize: 14, fontWeight: 600, color: '#474747' }}>{'Free cancellation'}</spna>
                                        </div>
                                        <spna style={{ fontSize: 14, fontWeight: 400, color: '#595959' }}>{'Cancel before <date> for a full refund'}</spna>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null
                }
                <div style={{ marginTop: 32, color: "#474747", fontSize: 24, fontWeight: 600 }}>Enter your details</div>
                <div style={{ fontWeight: 400, fontSize: 15, color: "#595959", lineHeight: 3 }}>We'll be sending your tickets to the details below. Booking for a friend? Add their details.</div>
                <Box
                    // component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 2, width: windowWidth < 520? '30ch': '50ch' },
                        marginTop: 2,
                        width: '95%',
                        display: 'flex',
                        flexDirection: 'column'


                    }}
                // noValidate
                // autoComplete="off"
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: windowWidth < 900 ? 'column': 'row', gap: windowWidth < 900 ? 20 : null  }}>
                        <TextField
                            sx={{ borderRadius: 20, height: 10, width: '100%'}}
                            id="outlined-size-small"
                            label="<Full Name>"
                            defaultValue="Tickete Inc"
                            size="small"
                        />
                        <TextField
                            sx={{ borderRadius: 20, height: 10, width: '100%' }}
                            id="outlined-error-helper-text"
                            label="<Phone Number>"
                            value="+85 2345345678"
                            size="small"
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, flexDirection: windowWidth < 900 ? 'column': 'row', gap: windowWidth < 900 ? 20 : null }}>
                        <TextField
                            sx={{ borderRadius: 20, height: 10, width: '100%'}}
                            id="outlined-size-small"
                            label="<Full Name>"
                            defaultValue="hi@tickete.com"
                            size="small"
                        />
                        <TextField
                            error
                            sx={{ borderRadius: 20, height: 10, width: '100%' }}
                            id="outlined-size-small"
                            label="<Full Name>"
                            helperText="<error message>"
                            defaultValue="hi@tickete.com"
                            size="small"
                        />
                    </div>
                </Box>

                <div style={{ marginTop: 75 }}>
                    <div>
                        <div style={{ color: '#595959', fontSize: 24, fontWeight: 600, lineHeight: 1, marginTop: 32 }}>Additional information</div>
                        <div style={{ fontWeight: 400, fontSize: 15, color: "#595959", lineHeight: 3 }}>We need a few more details to complete your reservation.</div>
                    </div>

                    {/* <div style={{ marginTop: -32 }}>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '50ch' },
                                display: 'flex', alignItems: 'center', flexDirection: 'row', width: "95%"
                            }}
                        >
                            <TextField
                                sx={{ borderRadius: 20, height: 10 }}
                                id="outlined-size-small"
                                label="<Full Name>"
                                defaultValue=""
                                size="small"
                                placeholder="<Custom Input>"
                            />
                            <Autocomplete
                                options={top100Films}
                                getOptionLabel={(option) => option.title}
                                filterOptions={filterOptions}
                                sx={{ marginTop: 4 }}
                                size="small"
                                renderInput={(params) => <TextField {...params} label="<drop down>" />}
                            />

                        </Box>
                    </div> */}
                    {windowWidth < 900 ?
                        <div>
                            <TextField
                                sx={{ borderRadius: 20, height: 10, width: '100%' }}
                                id="outlined-size-small"
                                label="<Full Name>"
                                defaultValue=""
                                size="small"
                                placeholder="<Custom Input>"
                            />
                            <Autocomplete
                                options={top100Films}
                                getOptionLabel={(option) => option.title}
                                filterOptions={filterOptions}
                                sx={{ marginTop: 4 }}
                                size="small"
                                renderInput={(params) => <TextField {...params} label="<drop down>" />}
                            />
                        </div> : (
                            <div style={{ marginTop: -32 }}>
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '50ch' },
                                        display: 'flex', alignItems: 'center', flexDirection: 'row', width: "95%"
                                    }}
                                >
                                    <TextField
                                        sx={{ borderRadius: 20, height: 10 }}
                                        id="outlined-size-small"
                                        label="<Full Name>"
                                        defaultValue=""
                                        size="small"
                                        placeholder="<Custom Input>"
                                    />
                                    <Autocomplete
                                        options={top100Films}
                                        getOptionLabel={(option) => option.title}
                                        filterOptions={filterOptions}
                                        sx={{ marginTop: 4 }}
                                        size="small"
                                        renderInput={(params) => <TextField {...params} label="<drop down>" />}
                                    />

                                </Box>
                            </div>
                        )
                    }
                </div>

                <div style={{ marginTop: 75, width: "95%" }}>
                    <div>
                        <div style={{ color: '#595959', fontSize: windowWidth < 600 ? 16 : 24, fontWeight: 600, lineHeight: 1 }}>Select your mode of payment</div>
                        <div style={{ fontWeight: 400, fontSize: 15, color: "#595959", lineHeight: 3 }}>Payments with Tickete are secure and encrypted.</div>
                    </div>

                    <div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                                <img src={card} style={{ height: 15, width: 20, }} alt="fireSpot" />
                                <span style={{ fontSize: 16, fontWeight: 600, color: '#474747', marginLeft: 20 }}>{'Credit & debit card'}</span>
                            </div>
                            <div style={{ flexDirection: 'row', alignItems: 'center', marginTop: 14 }}>
                                <img src={Radiobutton} style={{ height: 23, width: 23, marginBottom: -22, marginRight: 22 }} alt="fireSpot" />
                            </div>
                        </div>

                        <div >
                            <Box
                                // component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 2, width: windowWidth < 600 ? '30ch' : '50ch' },
                                    marginTop: 5,
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column'


                                }}
                            // noValidate
                            // autoComplete="off"
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: windowWidth < 900  ? 'column' : null, gap: windowWidth < 600 ? 20 : null }}>
                                    <TextField
                                        sx={{ borderRadius: 20, height: 10, width: '100%' }}
                                        id="outlined-size-small"
                                        label="<Name on Card>"
                                        defaultValue="Tickete Inc"
                                        size="small"
                                    />
                                    <TextField
                                        sx={{ borderRadius: 20, height: 10, width: '100%' }}
                                        id="outlined-error-helper-text"
                                        label="<Card Number>"
                                        defaultValue="1234 1234 1234 1234"
                                        size="small"
                                    />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, flexDirection: windowWidth < 900  ? 'column' : null, gap: windowWidth < 600 ? 20 : null }}>
                                    <TextField
                                        sx={{ borderRadius: 20, height: 10, width: '100%' }}
                                        id="outlined-size-small"
                                        label="<Expiry Date>"
                                        defaultValue="06/26"
                                        size="small"
                                    />
                                    <TextField
                                        sx={{ borderRadius: 20, height: 10, width: '100%' }}
                                        id="outlined-size-small"
                                        label="<CVV/CVC>"
                                        defaultValue="***"
                                        size="small"
                                    />
                                </div>
                            </Box>
                        </div>
                    </div>

                </div>


                <div style={{ width: "95%", marginTop: 75 }}>'
                    <div>
                        <img src={Line} style={{ marginTop: 20, width: 1300, marginBottom: 20 }} alt="fireSpot" />
                    </div>
                    <div >
                        <span style={{ fontSize: 24, fontWeight: 600, color: '#474747' }}>{'Frequently asked questions'}</span>
                    </div>

                    <div style={{ marginTop: 20, display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <span style={{ fontSize: windowWidth > 600 ? 18 : 14, fontWeight: 600, color: '#474747' }}>{'Are my tickets transferable?'}</span>
                        </div>
                        <div>
                            <img src={windowWidth > 600 ? Minus : Plus} style={{ height: 23, width: 23, marginBottom: -15, marginRight: 22 }} alt="fireSpot" />
                        </div>
                    </div>


                    { windowWidth > 600 ?  (<div style={{ marginTop: 10, paddingRight: 160 }}>
                        <span style={{ fontSize: 16, fontWeight: 400, color: '#474747' }}>
                            {'No. The tickets can only be used by the person(s) whose details are indicated on the voucher. If you’re booking for friends and family, make sure to key in their details.'}
                        </span>
                    </div>) : null}

                    <div>
                        <img src={Line} style={{ marginTop: 20, width: '80%' }} alt="fireSpot" />
                    </div>

                    <div style={{ marginTop: 20, display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <span style={{ fontSize: windowWidth > 600 ? 18 : 14, fontWeight: 600, color: '#474747' }}>{'How long will it take to receive my ticket?'}</span>
                        </div>
                        <div>
                            <img src={windowWidth > 600 ? Minus : Plus} style={{ height: 23, width: 23, marginBottom: -15, marginRight: 22 }} alt="fireSpot" />
                        </div>
                    </div>

                    {windowWidth > 600 ?  (<div style={{ marginTop: 10, paddingRight: 160 }}>
                        <span style={{ fontSize: 16, fontWeight: 400, color: '#474747' }}>
                            {'The tickets will hit your inbox as soon as you complete making the payment.'}
                        </span>
                    </div>): null}
                    <div>
                        <img src={Line} style={{ marginTop: 20, width: '80%' }} alt="fireSpot" />
                    </div>

                    <div style={{ marginTop: 20, display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <span style={{ fontSize: windowWidth > 600 ? 18 : 14, fontWeight: 600, color: '#474747' }}>{'Is my payment secure?'}</span>
                        </div>
                        <div>
                            <img src={windowWidth > 600 ? Minus : Plus} style={{ height: 23, width: 23, marginBottom: -15, marginRight: 22 }} alt="fireSpot" />
                        </div>
                    </div>

                    { windowWidth > 600 ?  (<div style={{ marginTop: 10, paddingRight: 160 }}>
                        <span style={{ fontSize: 16, fontWeight: 400, color: '#474747' }}>
                            {'We use a PCI compliant payment gateway that is internationally recognized and protects against fraud and unauthorized transactions. In short, your payment is a 100% secure and you have nothing to worry!'}
                        </span>
                    </div>) : null}

                    <div>
                        <img src={Line} style={{ marginTop: 20, width: '80%' }} alt="fireSpot" />
                    </div>

                    <div style={{ marginTop: 20, display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <span style={{ fontSize: windowWidth > 600 ? 18 : 14, fontWeight: 600, color: '#474747' }}>{'What type of payment options do you offer?'}</span>
                        </div>
                        <div>
                            <img src={windowWidth > 600 ? Minus : Plus} style={{ height: 23, width: 23, marginBottom: -15, marginRight: 22 }} alt="fireSpot" />
                        </div>
                    </div>

                    { windowWidth > 600 ?  (<div style={{ marginTop: 10, paddingRight: 160 }}>
                        <span style={{ fontSize: 16, fontWeight: 400, color: '#474747' }}>
                            {'We accept payments via all major international debit cards, credit cards, Google Pay and Apple Pay. Please note that Tickete being an online marketplace does not accept cash payments.'}
                        </span>
                    </div>) : null}

                    <div>
                        <img src={Line} style={{ marginTop: 20, width: '80%' }} alt="fireSpot" />
                    </div>

                    <div style={{ marginTop: 20, display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <span style={{ fontSize: windowWidth > 600 ? 18 : 14, fontWeight: 600, color: '#474747' }}>{'When will I be charged for my booking?'}</span>
                        </div>
                        <div>
                            <img src={windowWidth > 600 ? Minus : Plus} style={{ height: 23, width: 23, marginBottom: -15, marginRight: 22 }} alt="fireSpot" />
                        </div>
                    </div>

                    { windowWidth > 600 ?  (<div style={{ marginTop: 10, paddingRight: 160 }}>
                        <span style={{ fontSize: 16, fontWeight: 400, color: '#474747' }}>
                            {'Your account will be charged immediately upon booking. If the booking is cancelled from your end or by our local tour operator, we will refund the entire amount to your account at no extra cost.'}
                        </span>
                    </div>) : null}

                    <div>
                        <img src={Line} style={{ marginTop: 20, width: '80%' }} alt="fireSpot" />
                    </div>


                    <div style={{ marginTop: 20, display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <span style={{ fontSize: windowWidth > 600 ? 18 : 14, fontWeight: 600, color: '#474747' }}>{'Why am I being charged in USD?'}</span>
                        </div>
                        <div>
                            <img src={windowWidth > 600 ? Minus : Plus} style={{ height: 23, width: 23, marginBottom: -15, marginRight: 22 }} alt="fireSpot" />
                        </div>
                    </div>

                    { windowWidth > 600  ?(<div style={{ marginTop: 10, paddingRight: 160 }}>
                        <span style={{ fontSize: 16, fontWeight: 400, color: '#474747' }}>
                            {'All payments on Tickete are charged in USD. Your accounted will be debited with the spot rate for the conversion rate from your local currency to USD. We understand this is less than ideal but, we’re working on accepting payments in currencies across the world.'}
                        </span>
                    </div>) : null}

                    <div>
                        <img src={Line} style={{ marginTop: 20, width: '80%' }} alt="fireSpot" />
                    </div>

                    <div style={{ marginTop: 20, display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <span style={{ fontSize: windowWidth > 600 ? 18 : 14, fontWeight: 600, color: '#474747' }}>{'Will I get a complete refund if I cancel this ticket?'}</span>
                        </div>
                        <div>
                            <img src={windowWidth > 600 ? Minus : Plus} style={{ height: 23, width: 23, marginBottom: -15, marginRight: 22 }} alt="fireSpot" />
                        </div>
                    </div>

                    { windowWidth > 600 ? (<div style={{ marginTop: 10, paddingRight: 160 }}>
                        <span style={{ fontSize: 16, fontWeight: 400, color: '#474747' }}>
                            {'The cancellation and refund policy varies per ticket. While some can be canceled up to 24, 48, or 72 hours before they start, several others can’t be canceled once the reservation has been confirmed. For the ones that can cancelled within the permissible cancellation period, you will receive a full refund.'}
                        </span>
                    </div>) : null}

                    <div>
                        <img src={Line} style={{ marginTop: 20, width: '80%' }} alt="fireSpot" />
                    </div>

                    <div style={{ marginTop: 20, display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <span style={{ fontSize: windowWidth > 600 ? 18 : 14, fontWeight: 600, color: '#474747' }}>{'How long does it take for a refund to reflect in my account?'}</span>
                        </div>
                        <div>
                            <img src={windowWidth > 600 ? Minus : Plus} style={{ height: 23, width: 23, marginBottom: -15, marginRight: 22 }} alt="fireSpot" />
                        </div>
                    </div>

                    {windowWidth > 600 ? (<div style={{ marginTop: 10, paddingRight: 160 }}>
                        <span style={{ fontSize: 16, fontWeight: 400, color: '#474747' }}>
                            {'Depending on your bank, it typically takes anywhere between 2-7 working days for the refunded amount to reflect in your account.'}
                        </span>
                    </div>) : null}

                    <div>
                        <img src={Line} style={{ marginTop: 20, width: '80%' }} alt="fireSpot" />
                    </div>

                </div>
            </div>





            {windowWidth > 900 ? (<div style={{ width: '30%', marginTop: -1 }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div>
                        <img src={Line_2} style={{ width: 1, marginRight: 20, height: '65%' }} alt="fireSpot" />
                    </div>
                    <div>
                        <div>
                            <div>
                                <img src={Rectangle_img} style={{ height: '30%', width: '90%' }} alt="fireSpot" />
                            </div>
                            <div>
                                <span style={{ fontSize: 18, fontWeight: 600, color: '#474747' }}>Amsterdam opeg boat canal cruise - Live Ggide - from Anne Frgnk House</span>
                            </div>
                            <div style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                                <img src={Vector} style={{ height: '3%', width: '5%', marginBottom: -5 }} alt="fireSpot" />
                                <span style={{ marginLeft: 15, color: "#474747", fontWeight: 600 }}>{'<variant name>'}</span>
                            </div>
                            <div style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                                <img src={Calender} style={{ height: '3%', width: '5%', marginBottom: -3 }} alt="fireSpot" />
                                <span style={{ marginLeft: 15, color: "#474747", fontWeight: 600 }}>{'<date>'}</span>
                            </div>
                            <div style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                                <img src={Clock} style={{ height: '4%', width: '6%', marginBottom: -6 }} alt="fireSpot" />
                                <span style={{ marginLeft: 15, color: "#474747", fontWeight: 600, marginLeft: 12 }}>{'<time>'}</span>
                            </div>
                        </div>

                        <div style={{ marginTop: 55 }}>
                            <div>
                                <span style={{ fontSize: 18, fontWeight: 600, color: '#474747' }}>Tickets overview</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                                <span style={{ color: "#474747" }}>{'<pax type>'}</span>
                                <span style={{ color: "#474747" }}>{'<price>'}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 17 }}>
                                <span style={{ color: "#474747" }}>{'<pax type>'}</span>
                                <span style={{ color: "#474747" }}>{'<price>'}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 17 }}>
                                <span style={{ color: "#474747" }}>{'<free>'}</span>
                                <span style={{ color: "#474747" }}>{'<price>'}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 17 }}>
                                <span style={{ color: "#228B22" }}>{'<discount applied>'}</span>
                                <span style={{ color: "#228B22" }}>{'<- price>'}</span>
                            </div>
                            <div style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                                <img src={Coupon} style={{ height: '3%', width: '5%', marginBottom: -5 }} alt="fireSpot" />
                                <span style={{ marginLeft: 20, color: '#228B22', marginLeft: 12, fontSize: 14, fontWeight: 500, textDecoration: "underline" }}>{'Have a promo code?'}</span>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                                <span style={{ fontWeight: 600, color: "#474747" }}>{'Total'}</span>
                                <span style={{ fontWeight: 600, color: "#474747" }}>{'<price>'}</span>
                            </div>
                            <div>
                                <span style={{ fontSize: 12, fontWeight: 400, color: '#595959' }}>{'You will pay in <currency>'}</span>
                            </div>

                            <div style={{ backgroundColor: '#F5F5F5', padding: 10, borderRadius: 20, marginTop: 20 }}>
                                <div>
                                    <spna style={{ fontSize: 14, fontWeight: 600, color: '#474747' }}>{'Free cancellation'}</spna>
                                </div>
                                <spna style={{ fontSize: 14, fontWeight: 400, color: '#595959' }}>{'Cancel before <date> for a full refund'}</spna>
                            </div>
                        </div>
                    </div>
                </div>
            </div>) : null}
        </div>
    )
}

export default Detaiils;