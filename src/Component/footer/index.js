import react, { useEffect, useState } from 'react';
import Line from '../../assets/Line.png';


const Footer = () => {
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
        <div style={{ backgroundColor: 'black' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ paddingLeft: windowWidth < 900 ? null : 150, marginTop: 80, paddingBottom: 100 }}><span style={{ color: 'white', fontSize: 24, fontWeight: 600 }}>tickete</span></div>
                {windowWidth < 900 ? null : <div>
                    <img src={Line} style={{ marginBottom: 20, paddingLeft: windowWidth < 900 ? null : 150, width: '80%' }} alt="fireSpot" />
                </div>}
                <div style={{ paddingLeft: windowWidth < 900 ? null : 150, paddingBottom: 50, display: 'flex', flexDirection: 'row',}}>
                    <ol>
                        <span style={{ color: '#fff' }}>{'© Tickete Inc.'}</span>
                    </ol>
                    <div >
                        {/* <span style={{ color: '#fff', marginLeft: 60 }}>{'• Privacy'}</span> */}
                        {/* <ul style={{ color: '#fff', marginLeft: 60 }}>Pricvacy</ul> */}
                        <ul style={{ display: 'flex', flexDirection: 'row' }}>
                            <li style={{ color: '#fff',  textDecoration: "underline", marginLeft: 40 }}>Pricvacy</li>
                            <li style={{ color: '#fff',  textDecoration: "underline", marginLeft: 40 }}>Terms</li>
                            {
                                windowWidth < 900 ? <li style={{ color: '#fff',  textDecoration: "underline", marginLeft: 40 }}>Cancellation </li> : <li style={{ color: '#fff', marginLeft: 60, textDecoration: "underline", marginLeft: 40 }}>Cancellation policy</li>
                            }
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;