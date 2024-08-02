import { Typography } from "@material-tailwind/react";
import '../styles/Footer.css';
import Newsletter from "./Newsletter";
const LINKS = [
  {
    title: "About Us",
   
  },
  {
    title: "Discover",
 
  },
  {
    title: "Explore",
  
  },
  {
    title: "Books",
  },

];
 
const currentYear = new Date().getFullYear();
 
export default function Footer() {
  return (
    <>
    <div className="mt-96 pt-28"></div>
    <div className="oval -z-10">
    </div>
    
    <Newsletter />
    <footer className="relative w-full pt-20 mt-24">
    
      <div className="mx-auto w-full max-w-7xl px-8 ">
     
      <ul className="flex flex-wrap justify-between items-center gap-y-2 gap-x-8">
      <div className="grid grid-cols-4 justify-between md:gap-8 gap-5">
            {LINKS.map(({ title }) => (
              <ul key={title}>
                <Typography
                 as="a"
                 href="#"
                 color="blue-gray"
                 className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                >
                  {title}
                </Typography>
               
              </ul>
            ))}
          </div>
       
     
        <div className="flex gap-4  text-blue-gray-900 justify-center ml-32">
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </Typography>
            
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Typography>
           
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 50 50">
                <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
                </svg>
            </Typography>
          </div>
   
          
      </ul>
      


        <div className="mt-4 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear}  All
            Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Terms of Service
          </Typography>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Privacy Policy
          </Typography>
          </div>

          
        </div>
      </div>
    </footer>
    </>
  );
}