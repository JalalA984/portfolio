"use client"
import React, { useEffect, useState } from "react";

const LoadComponent: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Timeout to hide the loader after 1 second
    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);

  return (
    <>
      {loading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
        </div>
      )}

      <style jsx>{`
        .loading-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: #ffffff; /* Optional: match the page's background color */
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000; /* Ensure it's above all other content */
        }

        .loading-spinner {
          border: 4px solid #f3f3f3; /* Light border */
          border-top: 4px solid #3498db; /* Blue border */
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};

export default LoadComponent;
