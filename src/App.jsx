import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Tittle from './components/Tittle/Tittle';
import { About } from './components/About/About';
import { WhyUs } from './components/Whyus/WhyUs';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import  Register  from './components/Register/Register'; // Ensure correct import
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Schedule from './components/Schedule/Schedule';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Hero />
        <div className="container">
          <Tittle subTitle="Process" title="How It Works" />
          <Programs />
        </div>
        <About />
        <Tittle subtitle="" title="Why Us" />
        <WhyUs />
        <Tittle subtitle="Contact" title="Get in Touch" />
        <Contact />
        <Footer />
      </>
    ),
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/schedule',
    element: <Schedule />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
