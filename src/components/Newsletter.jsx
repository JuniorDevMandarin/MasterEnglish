import '../styles/Newsletter.css';

const Newsletter = () => {
  return (
    <div className='news  text-black md:-ml-30 z-0 w-full bg-[#d6bd98]  md:rounded-none 2xl:rounded-2xl'>
      <div className='mx-auto grid lg:grid-cols-2 md:rounded-none 2xl:rounded-2xl' >
        <div className='lg:col-span-1 my-4'>
          <h1 className='SubsTitle'>
            Subscribe Newsletters
          </h1>
          <p className='pText'>Subscribe to our newsletter and unlock a world of exclusive benefits. Be the first to know about our latest products, special promotions, and exciting updates. </p>
        </div>
        <div className='my-4 '>
          <div className='flex sm:flex-row items-center justify-between w-full '>
            <input
              className='p-3 cusInput flex md:w-[510px] rounded-sm outline-none text-black font-bold bg-white md:opacity-30'
              type='email'
              placeholder='Enter Your Email'
            />
            
          </div>
          <a href='#' className='cusSubs bg-[#000000] text-white rounded-md font-medium md:w-[170px] lg:-mt-6  md:ml-52 md:-mt-6 absolute  px-6 py-3'>
              Subscribe Now
            </a>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;