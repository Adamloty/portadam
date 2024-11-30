import React from "react";
import AboutMe from "@/components/AboutMe";

export default function AboutPage() {
  return (
	  <>

      <div style={{
      paddingTop:"5%",
      minHeight: '59vh',
      // backgroundColor: '#f3f4f6'
    }}>
      <div style={{
        position: 'relative',
        backgroundColor: '#10b981',
        color: 'white',
        padding: '5rem 0'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '2.5rem'
        }}>ABOUT</h1>
        <div style={{
          position: 'absolute',
          bottom: '-1px',
          left: 0,
          right: 0,
          height: '38px',
          overflow: 'hidden'
        }}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1000 20"
            preserveAspectRatio="none"
            style={{
              position: 'absolute',
              width: 'calc(100% + 1.5px)',
              height: '100%',
              left: '50%',
              transform: 'scale(1, -1) translateX(-50%)'
            }}
          >
            <path 
              fill="#ffffff" 
              d="M0,0v3c0,0,393.8,0,483.4,0c9.2,0,16.6,7.4,16.6,16.6c0-9.1,7.4-16.6,16.6-16.6C606.2,3,1000,3,1000,3V0H0z"
            />
          </svg>
        </div>
      </div>
    </div>
			  <AboutMe />
    </>
  );
}