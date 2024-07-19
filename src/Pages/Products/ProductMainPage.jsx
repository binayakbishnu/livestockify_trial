import React from 'react';
import Navbar from '/src/Pages/HomePageComponents/Navbar';

const products = [
  {
    title: 'Dairy Devices',
    description: 'Livestockify is a state-of-the-art device tailored for dairy farms, offering comprehensive THI (Temperature-Humidity Index) monitoring and farm automation functionalities. This innovative device is incredibly useful for dairy farmers as it alleviates the burden of manual monitoring and management tasks.',
    image: './src/assets/ProductMainPage/dairy.png',
    learnMoreLink: '/dairy-devices',
    buyNowLink: '/store'
  },
  {
    title: 'Device For Sericulture',
    description: 'Livestockify is a state-of-the-art device tailored for dairy farms, offering comprehensive THI (Temperature-Humidity Index) monitoring and farm automation functionalities. These delicate creatures are highly sensitive to their environment, and maintaining optimal temperature and humidity levels is paramount for their health, growth, and successful cocoon production.',
    image: './src/assets/ProductMainPage/sericulture.png',
    learnMoreLink: '/sericulture-devices',
    buyNowLink: '/store'
  },
  {
    title: 'Poultry Devices',
    description: 'Transforming Poultry Farm Management Livestockify Poultry Device is an innovative tool designed to revolutionize poultry farm management. This easy-to-use device empowers farmers with real-time insights into their flock\'s health and environment, enabling them to optimize operations and ensure bird well-being.',
    image: './src/assets/ProductMainPage/poultry.png',
    learnMoreLink: '/poultry-devices',
    buyNowLink: '/store'
  },
  {
    title: 'Device For Mushroom Farming',
    description: 'Livestockify is a cutting-edge device designed to revolutionize mushroom farming. It monitors crucial environmental parameters such as temperature, humidity, and CO2 levels, ensuring the perfect conditions for mushroom cultivation.',
    image: './src/assets/ProductMainPage/mushroom.png',
    learnMoreLink: '/mushroom-devices',
    buyNowLink: '/store'
  },
];

const ProductMainPage = () => {
  return (
    <div className="bg-[#F3FFF5] min-h-screen">
      <Navbar />
      <div className="container mx-auto p-5 pt-20"> 
        <h1 className="text-[#22592A] font-helvetica text-4xl font-bold text-center mt-8">Our Products</h1>
        <p className="text-[#22592A] font-helvetica text-2xl font-medium text-center mb-8">Livestock Farming With Innovative Solution</p>
        
        {products.map((product, index) => (
          <div
            key={index}
            className={`bg-[#C2FFCB80] border border-black rounded-lg p-8 mb-8 mx-auto max-w-6xl shadow-lg flex flex-col sm:flex-row ${
              index % 2 === 0 ? 'sm:flex-row-reverse' : ''
            } items-center sm:space-x-8`}
          >
            <img src={product.image} alt={product.title} className="w-full sm:w-1/2 h-auto object-cover rounded-lg" />
            <div className="flex flex-col items-center sm:items-start mt-4 sm:mt-0 sm:w-1/2 text-center sm:text-left">
              <h2 className="text-[#22592A] font-helvetica text-3xl font-semibold">{product.title}</h2>
              <p className="text-[#00000080] font-inter text-lg mt-2">{product.description}</p>
              <div className="flex justify-center sm:justify-start items-center mt-4">
                <a
                  href={product.learnMoreLink}
                  className="text-black font-inter font-medium text-lg underline py-2 px-6 mt-3"
                >
                  Learn More
                </a>
                <a
                  href={product.buyNowLink}
                  className="bg-[#22592A] text-white font-inter font-medium text-lg px-6 py-2 rounded-full ml-44" 
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductMainPage;
