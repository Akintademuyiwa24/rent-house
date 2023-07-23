import React from 'react';

//import data
import { housesData } from '../data';
//import use param
import { useParams } from 'react-router-dom';

//import icons
import {BiBed, BiBath, BiArea, } from 'react-icons/bi'

//import Link
import { Link } from 'react-router-dom';

const PropertyDetails = () => {
  //get the housse id
  const {id} = useParams();
  //get the house based on id
  const house = housesData.find((house) => {
    return house.id === parseInt(id);
  })

  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
          <div>
            <h2 className='text-2xl font-semibold'>{house.name}</h2>
            <h3 className='text-lg mb-4'>{house.address}</h3>
          </div>

          <div className='mb-4 lg:mb-0 flex gap-x-2'>
            <div className='text-white px-3 py-1 bg-sky-800 rounded-full'>{house.type}</div>
            <div className='text-white px-3 py-1 bg-slate-800 rounded-full'>{house.country}</div>
          </div>

          <div className='text-2xl font-semibold text-slate-800'>$ {house.price}</div>
        </div>

        <div className='flex flex-col items-start gap-8 lg:flex-row'>
          <div className='max-w-[750px]'>
            <div className='mb-8'>
              <img src={house.imageLg} alt="" />
            </div>

            <div className='flex gap-x-6 text-slate-700 mb-6'>
              <div className='flex gap-x-2 items-center'>
                <BiBed className='text-2xl'/>
                <div>{house.bedrooms}</div>
              </div>

              {/*  */}
              <div className='flex gap-x-2 items-center'>
                <BiBath className='text-2xl'/>
                <div>{house.bathrooms}</div>
              </div>
              {/*  */}

              <div className='flex gap-x-2 items-center'>
                <BiArea className='text-2xl'/>
                <div>{house.surface}</div>
              </div>
              {/*  */}

            </div>

            <div>{house.description}</div>
        
            

          </div>

          {/* agents */}
          <div className='flex-1 bg-white w-full mb-8 border border-gray-400 rounded-lg px-6 py-8'>
            <div className='flex items-center gap-x-4 mb-8'>
              <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'><img src={house.agent.image} alt="" /></div>
            
              <div>  
                <div className='font-bold text-lg'>{house.agent.name}</div>
                <Link to='' className='text-slate-500 text-sm'>View Listings</Link>
              </div>
            </div>
            {/* form */}
            <form className='flex flex-col gap-y-4'>
              <input className='border border-gray-300 focus:border-slate-700 outline-none rounded w-full px-4 h-10 text-sm mb-1' placeholder='Name*' type="text" />
              <input className='border border-gray-300 focus:border-slate-700 outline-none rounded w-full px-4 h-10 text-sm mb-1' placeholder='Email*' type="email" />
              <input className='border border-gray-300 focus:border-slate-700 outline-none rounded w-full px-4 h-10 text-sm mb-1' placeholder='Phone*' type="number" />
              <textarea className='border border-slate-300 focus:bg-slate-700 outline-none resize-none rounded w-full p-4 h-30 text-sm text-gray-400 mb-1' placeholder='Message*' defaultValue='Hello, I am Interested in [Modern apartment]'></textarea>
              <div className='flex gap-x-2'>
                <button className='btn btn-blue w-full transition'>Send message</button>
                <button className='btn border hover:bg-blue-700 hover:text-white border-slate-500 transition bg-white w-full '>Call</button>
              </div>
            </form>
        </div>

        </div>

        
      </div>
    </section>
  );
};

export default PropertyDetails;
