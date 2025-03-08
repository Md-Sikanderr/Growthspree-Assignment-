// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const NavigationBar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
//       <div className="container">
//         {/* Logo */}
//         <a className="navbar-brand fw-bold" href="#">
//           H
//         </a>

//         {/* Navbar Toggle Button */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navbar Items */}
//         <div
//           className="collapse navbar-collapse justify-content-center"
//           id="navbarNav"
//         >
//           <ul className="navbar-nav gap-3">
//             <li className="nav-item">
//               <a className="nav-link text-dark fw-medium" href="#">
//                 Product
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-dark fw-medium" href="#">
//                 Customers
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-dark fw-medium" href="#">
//                 Resources
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-dark fw-medium" href="#">
//                 About Us
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-dark fw-medium" href="#">
//                 Plan
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Buttons */}
//         <div className="d-flex gap-2">
//           <button className="btn btn-outline-secondary px-3">Login</button>
//           <button className="btn btn-warning px-3">Request a Demo</button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavigationBar;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS for navbar toggle

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand fw-bold" href="#">
          H
        </a>

        {/* Navbar Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items & Buttons */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <a className="nav-link text-dark fw-medium" href="#">
                Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fw-medium" href="#">
                Customers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fw-medium" href="#">
                Resources
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fw-medium" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fw-medium" href="#">
                Plan
              </a>
            </li>

            {/* Buttons (Moved Inside Navbar) */}
            <li className="nav-item mt-2 mt-lg-0">
              <button className="btn btn-outline-secondary w-100">Login</button>
            </li>
            <li className="nav-item mt-2 mt-lg-0">
              <button className="btn btn-warning w-100">Request a Demo</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
