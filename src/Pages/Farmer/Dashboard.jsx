import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';
import sensor from '../../assets/farmerdashboard/sensor.svg';
import farmtemperature from '../../assets/farmerdashboard/farmtemperature.svg';
import humidity from '../../assets/farmerdashboard/humidity.svg';
import ammonia from '../../assets/farmerdashboard/ammonia.svg';
import up from '../../assets/farmerdashboard/up.svg';

function Dashboard() {
    const [dataTemp, setDataTemp] = useState(null);
    const [dataHumidity, setDataHumidity] = useState(null);
    const [dataAmmonia, setDataAmmonia] = useState(null);
    const [profileData] = useState({ name: "Akash Singh", role: "Farmer" });

    const fetchData = async () => {
        try {
            const tempRes = await axios.get('https://api.thingspeak.com/channels/2483390/fields/1.json?results=2');
            const humidityRes = await axios.get('https://api.thingspeak.com/channels/2483390/fields/2.json?results=2');
            const ammoniaRes = await axios.get('https://api.thingspeak.com/channels/2483390/fields/3.json?results=2');

            setDataTemp(tempRes.data.feeds[tempRes.data.feeds.length - 1]?.field1);
            setDataHumidity(humidityRes.data.feeds[humidityRes.data.feeds.length - 1]?.field2);
            setDataAmmonia(ammoniaRes.data.feeds[ammoniaRes.data.feeds.length - 1]?.field3);
        } catch (error) {
            console.error('Error fetching data', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (!dataTemp || !dataHumidity || !dataAmmonia) {
        return <div>Loading...</div>;
    }

    return (
        <div className="dashboard">
            <div className="profile">
                <img className="farmer-image" src="https://s3-alpha-sig.figma.com/img/e0dc/2644/6f0fb137ba2d4a4ce699e845374e1458?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ClzeXn9FpCUwDUoF6LM9NaEiUFZvPgOL1zH2O2OKJw0Y4FbyJwnDzM~e0MRvxEZQ9Y2ld9Ymkx0xbbh88uC~-xD4eg08rpVXy0mWiVHKsw3HchoB~7Ny6YHJPzVcXWfbGBtQoId5rUC4l13Fi3DlbX6-zxbqElM0Gvq0xH0qYt7DK5cJnyYLkwCv9CnGeTpWSiuynjlQ2e60cQ9JHBy8k02pY2JfbNqCuT0IaZXJKTukMXk~Bf0R~Cz-c71skvlTscd1M9Ff5kSQPuppBuNQCcFiDHqG-HYxKPdOyykeIzAioMddVQA15UIWiUSCUV8I~84BB3gZCmeTh6TXAr0b2g__" alt="Farmer" />
                <div className="profile-info">
                    <h2>{profileData.name}</h2>
                    <p>{profileData.role}</p>
                </div>
            </div>
            <div className="buttons">
                <button>Create new alerts</button>
                <button>Add more devices</button>
            </div>
            <div className="stats">
                <div className="stat-box">
                    <div className="stat-header">
                        <img src={sensor} alt="sensor icon" />
                        <h3>Total Devices Active</h3>
                    </div>
                    <p className="stat-value">15</p>
                    <div className="stat-footer">
                        <h6>Current House No. 23</h6>
                    </div>
                </div>
                <div className="stat-box">
                    <div className="stat-header">
                        <img src={farmtemperature} alt="temperature icon" />
                        <h3>Farm Temperature</h3>
                    </div>
                    <p className="stat-value">{dataTemp}°C</p>
                    <div className="stat-footer">
                        <img src={up} alt="up icon" />
                        <div className="stat-change">
                            <span className="stat-change-value">3.5%</span>
                            <span className="stat-change-text">from yesterday</span>
                        </div>
                    </div>
                </div>
                <div className="stat-box">
                    <div className="stat-header">
                        <img src={humidity} alt="humidity icon" />
                        <h3>Humidity</h3>
                    </div>
                    <p className="stat-value">{dataHumidity}%</p>
                    <div className="stat-footer">
                        <img src={up} alt="up icon" />
                        <div className="stat-change">
                            <span className="stat-change-value">1.2%</span>
                            <span className="stat-change-text">from yesterday</span>
                        </div>
                    </div>
                </div>
                <div className="stat-box">
                    <div className="stat-header">
                        <img src={ammonia} alt="ammonia icon" />
                        <h3>Ammonia Levels</h3>
                    </div>
                    <p className="stat-value">{dataAmmonia} ppm</p>
                    <div className="stat-footer">
                        <img src={up} alt="up icon" />
                        <div className="stat-change">
                            <span className="stat-change-value">0.8%</span>
                            <span className="stat-change-text">from yesterday</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="weather-container">
                <img className="weather-image" src="https://s3-alpha-sig.figma.com/img/d817/2059/6c239c607bd8dedf534b7d02b66660d3?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GihJfGpVYQSUE8pqR-DEKZZyyB2Bv03NYd7z1dbWFR1VRYsCGqcc0fFDLjP7MNveQralBBgh~1hCstGOhnWi6IJ8Yl5QkXz~Yy1zn0ixbD87AGivRVOJkS7y1oEIHKBETeAzIS9Ix8hkKRuBv~ans2rX1x2BafWAMXG2QdE6o94z7WG8lDpsJCP-s4ixaJ3gdeLR0JjVqgt5oJFrYEmZ97KwTIw0ZphUWwimSMFaUPfIJeCvhzC9~fR1kGo91r2L50LJ5GG7gkRQ28-9hiyUEKPpaU6~C68MasQ7iilAJHx09atK1OobZ-3a1k-JUnmDYwNTPewtZcqL2vGIJOChXA__" alt="Weather" />
            </div>
        </div>
    );
}

export default Dashboard;
