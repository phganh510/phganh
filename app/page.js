"use client"

import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      window.location.replace('https://www.figma.com/proto/G1umk1jFu1OLaZdzMryGyX/PORTFOLIO?page-id=0%3A1&type=design&node-id=2-3&viewport=1559%2C395%2C0.24&t=GlHA4j0OkAWaZnwJ-1&scaling=min-zoom&starting-point-node-id=2%3A3&mode=design');
    }, 0);

    return () => clearTimeout(redirectTimeout);
  }, []);
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      Redirecting...
    </div>
  );
}

export default Home;
