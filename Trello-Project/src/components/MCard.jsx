import React, { useState } from 'react';

const card1 = [
    {
        img: 'https://images.ctfassets.net/rz1oowkt5gyp/5BRXfI8ghoEChfFcvYUOzT/4ae6c8c4dcaeb29a27a57a72fc67949f/magic-swagup.png?w=478&fm=webp', 
        heading: 'SwagUp: Scale Any Business With Trello BC   ',
        text: '"Not only did [Trello] unify our process and help everyone understand their role, but we were able to automate essential steps of the process so we could move a lot faster and grow to a multi-million dollar company with a team of ten."',
        author: '-Founder,SwagUp',
        anchor : 'Learn More',
      },
      {
        img: 'https://images.ctfassets.net/rz1oowkt5gyp/22UrV2M73SFmMQNowgR4qw/6cb8439cf6343da98e0756f2990f9cc3/magic-instinct.png?w=397&fm=webp',
        heading: 'Instinct Dog Training',
        text: '"As you scale, you need visibility, accountability, and organization. Trello has provided that for us." ',
        author: '-Brian Burton, Founder, Instinct Dog Training',
        anchor : 'Learn More',
      },
      {
        img: 'https://images.ctfassets.net/rz1oowkt5gyp/7JCD51g6mwxcqLgAzfvSr/86da951ec89f4f0e401cc700436c0cac/business-class-desk-plants.png?w=488&fm=webp',
        heading: 'Desk Plants        ',
        text: '"We chose Trello because it is well-designed-its beautifully designed-intuitive, and really hit the nail on the head with what we needed to solve."        ',
        author: '-Lawrence Hanley, founder of Desk Plants',
        anchor : 'Learn More',
      },
      {
        img: 'https://images.ctfassets.net/rz1oowkt5gyp/3EGeFh1CNlN0kED7PSN7D3/2524aca6067b5db8126bfc0564800e84/Scan2CAD_logo.png?w=460&fm=webp',
        heading: 'Scan2Cad',
        text: ' We use Trello because our data becomes alive. A bullet point list turns into real tasks that are assigned to real people with due dates and connections to our other apps. The power in that is fantastic?',

        author: '-Luke Kennedy, CEO, Scan2Cad',
        anchor : 'Learn More',
      },
  {
    img: 'https://images.ctfassets.net/rz1oowkt5gyp/6gqLvQanbBX5bevYnHBfIr/73fdb4b05d67c16792040e8973d3abc4/palace-law.png?w=405&fm=webp', 
    heading: 'Palace Law',
    text: 'People have generally been happier since we started using Trello. It has made our lives a lot easier. People are less stressed.',
    author: 'Jordan Couch, attorney at Palace Law',
    anchor : 'Learn More',
  },
 
  
];

function MCard() {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? card1.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === card1.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative flex flex-col  items-center p-6 bg-white rounded-lg shadow-md w-500 max-w-xl mx-auto border-t-8 border-t-blue-500">
      {/* Top right controls */}
      <div className="absolute top-4 right-4 flex items-center">
        {/* Circles */}
        <div className="flex space-x-2 mr-4">
          {card1.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 onclick rounded-full ${idx === current ? 'bg-blue-400' : 'bg-gray-300'}`} />
          ))}
        </div> 
        {/* Arrows use react icons  */}
        <button onClick={handlePrev}
          className="p-2 bg-blue-200 rounded-full hover:bg-blue-400 mr-2">&#8592;</button>
        <button onClick={handleNext}
          className="p-2 bg-blue-200 rounded-full hover:bg-blue-400">&#8594;</button>
      </div>
      {/* card1 content below controls */}
      <img src={card1[current].img} alt={card1[current].heading}
        className="w-32 h-32 object-contain mb-4 mt-8" />
      <h2 className="text-xl font-bold mb-2">{card1[current].heading}</h2>
      <p className="text-gray-700 mb-4 text-center">&quot;{card1[current].text}&quot;</p>
      <p className="text-medium text-gray-500 mb-4">{card1[current].author}</p>
      <a className='text-blue-400 underline' href="">{card1[current].anchor}</a>
    </div>
  );
}
export default MCard;