// import image from "/favicon.png";

// export default () => {
//   return (
//     <>
//       <div className="text-center" style={{ marginBottom: "0%" }}>
//         <h1 style={{ marginBottom: "0%" }}>
//           <i className="fa fa-heartbeat" style={{ color: "red" }}></i> Blood
//           Portal
//         </h1>
//       </div>

//       <hr style={{ marginBottom: "0%", marginTop: "0%", borderTop: "2px solid red" }} />

//       {/* NAVBAR code starts from here */}
//       <nav className="navbar navbar-expand-lg bg-body-tertiary " >
//         <div className="container-fluid">
//           <a className="navbar-brand" href="/" style={{ marginTop: "0%" }}>
//             <img
//               style={{ marginTop: "0%" }}
//               src={image}
//               alt="Logo"
//               width="30"
//               height="24"
//               className="d-inline-block align-text-top"
//             />
//             BloodDonation Portal
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="container-fluid"></div>

//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="/viewDonor">
//                   Donors
//                 </a>
//               </li>
//               <li className="nav-item forward">
//                 <a className="nav-link" href="/contactus">
//                   Contact
//                 </a>
//               </li>
//               <li className="nav-item dropdown">
//                 <a
//                   className="nav-link dropdown-toggle"
//                   href="#"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Connect
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <a className="dropdown-item" href="/registration">
//                       Register
//                     </a>
//                   </li>
//                   <li>
//                     <a className="dropdown-item" href="/donorLogin">
//                       Login
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/aboutus">
//                   AboutUs
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };



import image from "/favicon.png";

export const Navbar = () => {
  return (
    <>
      <div className="text-center mb-0">
        <h1 className="mb-0">
          <i className="fa fa-heartbeat" style={{ color: "red" }}></i> Blood Portal
        </h1>
      </div>

      <hr className="my-0" style={{ borderTop: "2px solid red" }} />

      {/* NAVBAR starts here */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src={image}
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top me-2"
            />
            BloodDonation Portal
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/viewDonor">
                  Donors
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contactus">
                  Contact
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Connect
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/registration">
                      Register
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/donorLogin">
                      Login
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/aboutus">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};