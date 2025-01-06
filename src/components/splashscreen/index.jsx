// import { useEffect, useState } from 'react';
// import './index.scss'; // Import the CSS file for styling

// const SplashScreen = ({ onFinish }) => {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             onFinish();
//         }, 4000); 

//         const interval = setInterval(() => {
//             setCount(prevCount => {
//                 if (prevCount < 100) {
//                     return prevCount + 1;
//                 } else {
//                     clearInterval(interval);
//                     return prevCount;
//                 }
//             });
//         }, 40);

//         return () => {
//             clearTimeout(timer);
//             clearInterval(interval);
//         };
//     }, [onFinish]);

//     return (
//         <div className="splash-screen">
//             <div className="logo-container">
//                 <img src="/builder-helmet-worker-svgrepo-com.svg" alt="Logo" className="logo" />
//                 <h1>
//                 Welcome to the portfolio of a visionary leader!
//                 </h1>
//             </div>
//             <div className="spinner"></div>
//             <div className="count">{count}</div>
//         </div>
//     );
// };

// export default SplashScreen;