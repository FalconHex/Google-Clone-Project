import Head from 'next/head'
import Image from 'next/image'
import Avatar from './../components/Avatar';
import { MicrophoneIcon, ViewGridIcon, UserAddIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Footer from './../components/Footer';
import { useRef } from 'react';
import { useRouter } from "next/router";


export default function Home() {


  const router = useRouter();
  const searchInputRef = useRef(null);
  
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if(!term) return;

    router.push(`/search?term=${term}`);
  };



  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <a className="link" href="#">About</a>
          <a className="link" href="https://chrome.google.com/webstore/category/extensions">Store</a>
        </div>

        {/* Right */}
        <div className="flex space-x-4 items-center">
          <a className="link" href="#">Gmail</a>
          <a className="link" href="https://www.google.co.in/imghp?hl=en&authuser=0&ogbl">Image</a>

          {/* Icons */}
          <a href="https://workspace.google.com/marketplace?pann=ogb">
            <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          </a>
          
          {/* {/* Avatar */}
          <Avatar />
          

        </div>
      </header>


      {/* Body */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image 
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={100}
          width={300} 
        />

        {/* SearchBar */}
        <div className="flex w-full mt-5 hover:shadow-lg
        focus-within:shadow-lg max-w-md rounded-full border
        border-gray-200 px-5 py-3 items-center sm:max-w-xl
        lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500"/>
          <input 
            ref={searchInputRef}
            type="text" 
            className="flex-grow focus:outline-none" />
          <MicrophoneIcon className="h-5"/>
        </div>

        {/* Buttons */}
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 
        sm:space-y-0 sm:flex-row sm:space-x-4">

          <button onClick={search} className="btn">Google Search</button>

          <button onClick={search} className="btn">I'm feeling Lucky</button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  )
}
