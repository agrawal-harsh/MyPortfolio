import React from 'react';
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import myImage from "./assets/Myimg.jpg";
import { GiHamburgerMenu } from "react-icons/gi";

function App() {
   return (
    <>
      <div class = "h-12 flex justify-end gap-8 lg:h-16">
    <div class="invisible self-center lg:visible">
      <a class="text-xl font-medium mr-10 mt-2" href="">Works</a>
      <a class="text-xl font-medium mr-10 mt-2" href="">Blog</a>
      <a class="text-xl font-medium mt-2" href="">Contact</a>
    </div>
    <GiHamburgerMenu class = "text-2xl m-2 md:text-4xl lg:invisible sm:visible"/>
    </div>
  <div class = "flex flex-col items-center text-slate-800 lg:mt-28 lg:flex-row-reverse lg:justify-around lg:mx-36 lg:gap-8">
    <img class = "w-44 h-44 sm:mt-5 object-cover rounded-full lg:h-60 lg:w-60" src = {myImage}/>
    <div class = "flex flex-col items-center lg:w-3/5 lg:items-start">
    <h1 class = "flex flex-col items-center text-4xl sm:mx-8 sm:mt-8 font-bold lg:items-start lg:text-5xl lg:mx-0">Hi, I am Harsh,<span> Software Engineer</span></h1>
    <p class = "text-slate-800 sm:mx-6 mt-5 text-center lg:text-base lg:text-left lg:mx-0">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    <a href = 'https://drive.google.com/file/d/1ZGGBNdQZfgwsRxvLTw_visHz3iBQ6X9h/view?usp=sharing' target='_blank'><button class = "text-white bg-red-500 px-5 py-2 font-semibold text-lg rounded mt-7 lg:text-xl">Download Resume</button>
    </a>
    </div>
  </div>
  <div class = "flex flex-col items-center mt-14 py-4 bg-slate-100 text-slate-800 text-base pb-10 lg:px-36">
    <div class = "lg:flex lg:justify-between lg:w-full">
    <h2 class = "text-lg lg:self-start lg:text-2xl">Recent Post</h2>
    <a href = "" class = "invisible lg:visible text-sky-500">View all</a>
      </div>
    <div class = "flex flex-col items-center gap-4 lg:flex-row lg:justify-around lg:gap-5 lg:mt-4 ">
    <div class = "rounded bg-white p-5 drop-shadow-md space-y-3 h-64 mx-3 lg:mx-0">
      <h3 class = "font-bold text-xl lg:text-3xl ">Making a design system from scratch</h3>
      <div class = "flex justify-evenly lg:justify-start lg:gap-6">
        <p >12 Feb 2020</p>
        <p>|</p>
        <p>Design, Pattern</p>
      </div>
      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    </div>
    <div class = "mx-3 rounded bg-white p-5 drop-shadow-md space-y-3 h-64 lg:mx-0">
      <h3 class = "font-bold text-xl  lg:text-3xl">Creating pixel perfect icons in Figma</h3>
      <div class = "flex justify-evenly lg:justify-start lg:gap-6">
        <p >12 Feb 2020</p>
        <p>|</p>
        <p>Design, Pattern</p>
      </div>
      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    </div>
    </div>
  </div>
  <div>
    <h2 class = "text-lg text-center py-4 lg:ml-36 lg:text-left lg:text-2xl">Featured works</h2>
    <div class = "flex flex-col mx-4 rounded space-y-3 pb-3 lg:flex-row lg:mx-36 lg:space-y-0 lg:gap-5">
      <img class = "h-60 rounded object-cover " src = {work1}/>
      <div class = "flex flex-col gap-2 lg:gap-4">
      <h3 class = "font-bold text-xl  lg:text-3xl">Designing Dashboards</h3>
      <div class = "flex gap-3">
        <p class = "px-2 py-0.5 bg-slate-800 rounded-full text-white">2020</p>
        <p>Dashboard</p>
        </div>
      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    </div>
    </div>
    <div class = "flex flex-col mx-4 rounded space-y-3 pb-3 hidden lg:flex-row lg:mx-36 lg:space-y-0 lg:gap-5 lg:inline-flex">
      <img class = "h-60 rounded object-cover " src = {work2}/>
      <div class = "flex flex-col gap-2 lg:gap-4">
      <h3 class = "font-bold text-xl  lg:text-3xl">Vibrant Portraits of 2020</h3>
      <div class = "flex gap-3">
        <p class = "px-2 py-0.5 bg-slate-800 rounded-full text-white">2018</p>
        <p>Illustration</p>
        </div>
      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    </div>
    </div>
    <div class = "flex flex-col mx-4 rounded space-y-3 pb-3 hidden lg:flex-row lg:mx-36 lg:space-y-0 lg:gap-5 lg:inline-flex">
      <img class = "h-60 rounded object-cover " src = {work3}/>
      <div class = "flex flex-col gap-2 lg:gap-4">
      <h3 class = "font-bold text-xl  lg:text-3xl">36 Days of Malayalam type</h3>
      <div class = "flex gap-3">
        <p class = "px-2 py-0.5 bg-slate-800 rounded-full text-white">2018</p>
        <p>Typography</p>
        </div>
      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    </div>
    </div>
  </div>
  <div class = "h-48 flex flex-col justify-center items-center">
    <div class = "flex h-8 mx-16 gap-9 align-baseline">
      <a href = ""><img class = "w-8" src = "https://imgs.search.brave.com/Kf1sAfstuoF5B7g_t7AadfJDGBEludWgp8-ua5MJTys/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LmluZm8vaW1h/Z2VzL21pbmljb3Zl/cnMvMTUwOTEzNTEw/OWZhY2Vib29rLXN5/bWJvbC1sb2dvLXBu/Zy1ibGFjay02MjZ4/NjI2LmpwZw"/></a>
      <a href = "https://www.instagram.com/i.harshagrawal/"><img class = "w-8" src = "https://imgs.search.brave.com/3Pk3IOdxIjkHFc8m96wM_5ST2uaLKKRkZNdDD3fnO_Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ZWNlYzc4NjczZTQ0/NDAwMDRmMDllNzcu/cG5n"/></a>
      <a><img class = "w-10" src = "https://imgs.search.brave.com/WaRk_TWHm8NzLjMtRkXonOZTp5xKkmW5LMbTWemSzjk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL25ld19nYWxs/ZXJ5LzI4LTI4NDQ2/N19saWNlbnNpbmct/dHdpdHRlci1sb2dv/LWJsYWNrLXBuZy5w/bmc"/></a>
      <a href="https://www.linkedin.com/in/harsh-agrawal-70a211262?utm_source=share&utm_campaign=share_via&utm_content=profil"><img class = "w-8" src = "https://imgs.search.brave.com/dylfuUR4HK0TMv7fc7AtvdK82vGUbC-1KJp0VG3Cm5U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzQ2Lzc4LzIz/LzM2MF9GXzU0Njc4/MjM5OF8yNlYzcEw4/NGRKWUw3b3ZnSUlJ/amNESjdJaFBVRHhT/QS5qcGc"/></a>
    </div>
    <p class = "mt-7">Copyright ©2020 All rights reserved</p>
  </div>

    </>
  )
}

export default App
