import './App.css'
import dropIcon from './assets/drop_icon.jpeg'
import emergencyIcon from './assets/emergency_icon.jpeg'
import fireIcon from './assets/fire_icon.jpeg'
import plumbingIcon from './assets/plumbing_icon.jpeg'
import { motion } from 'framer-motion';

const cardData = [
  {
    title: "Emergency Plumbing Services",
    description: "Our plumbers are ready to go 24/7 for emergencies - including nights, weekends and holidays.",
    buttonText: "EXPLORE THIS SERVICE",
    icon: emergencyIcon  
  },
  {
    title: "Plumbing and Drains",
    description: "As the largest plumbing and drain service company, we make thousands of repairs every day.",
    buttonText: "EXPLORE THIS SERVICE",
    icon: plumbingIcon 
  },
  {
    title: "Water Damage",
    description: "Our teams are equipped with state-of-the-art water extraction and cleanup equipment.",
    buttonText: "EXPLORE THIS SERVICE",
    icon: dropIcon 
  },
  {
    title: "Water Heaters",
    description: "Trust Roto-Rooter for repair and replacement of gas, electric and tankless water heaters.",
    buttonText: "EXPLORE THIS SERVICE",
    icon: fireIcon 
  }
];

function App() {
  return (
    <div id='assignment' className='relative bg-slate-200 h-[70vh] m-10 pt-5'>
      {/* Purple background with clip-path */}
      <div className='bg-purple-950 clip-path-custom h-[100%] absolute top-0 left-0 w-full z-0'>
        <h1 className='text-white text-3xl pl-[40px] mt-[5px] tracking-wide pt-4'>OUR SERVICES</h1>
      </div>

      <div className='card-container relative z-10 flex justify-center pt-12 pl-[70px] pr-[100px]'>
        {cardData.map((ele, index) => (
          <motion.div
            key={index}
            className='bg-white flex flex-col justify-center items-center mt-[70px] ml-6 text-black p-4 m-2 rounded shadow-md h-[290px]'
            whileHover={{ rotate: 360 }} // Apply rotation to the whole card on hover
            transition={{ duration: 1}} // Control speed of rotation
          >
            <img 
              className={`mt-[-130px] iconImg h-[65px] rounded-full border-[3px] border-purple-950 mx-auto ${index === 0 ? 'mt-[-100px]' : ''}`} 
              src={ele.icon} 
              alt="icon-img" 
            />
            <h2 className='font-semibold text-lg text-center mt-2'>{ele.title}</h2>
            <p className='text-center w-[240px]'>{ele.description}</p>
            <a href='#' className='text-purple-950 mt-5 font-semibold'>{ele.buttonText} &gt;</a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default App;
