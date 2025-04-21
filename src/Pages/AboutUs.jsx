// import Footer from "./Footer";
// import Header from "./Header";

// export default () => {
//   return (
//     <>
//       <Header />
//       <div className="container-fluid text-center wtd mt-3 mb-5 rounded-pill shadow-lg">
//         <h2>About US</h2>
//         <p style={{ fontSize: "18px", margin: "2%" }}>
//           " A Blood Donor Connect Portal is a web-based platform that connects
//           blood donors with hospitals, receivers and medical facilities in need
//           of blood and donations. This portal also brings together donors,
//           hospitals, and receivers to ensure that there is a seamless and
//           efficient system in place to provide blood to those in need. With its
//           user-friendly interface and robust database management system, the
//           portal makes it easier for hospitals to find and secure the blood they
//           need, and for donors to sign up and make their lifesaving
//           contributions."
//         </p>
//         <br />
//       </div>

//       <div className="container-fluid text-center wtd mt-3 mb-5 rounded-pill shadow-lg">
//         <h2> Objective and Scope: </h2>
//         <p>• To put all types of donors in a single roof </p>
//         <p>• Proper tracking of donors </p>
//         <p>• Spread awareness about blood donation. </p>
//         <p>• Help in life saving</p>
//         <p>• Achievement and recognition of donors</p>
//         <br />
//       </div>
//       <Footer />
//     </>
//   );
// };


import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function AboutUs() {
  return (
    <>
      <Header />
      
      {/* About Us Section */}
      <div className="container-fluid text-center wtd mt-3 mb-5 rounded-pill shadow-lg">
        <h2>About Us</h2>
        <p style={{ fontSize: "18px", margin: "2%" }}>
          "A Blood Donor Connect Portal is a web-based platform that connects
          blood donors with hospitals, receivers, and medical facilities in need
          of blood and donations. This portal also brings together donors,
          hospitals, and receivers to ensure that there is a seamless and
          efficient system in place to provide blood to those in need. With its
          user-friendly interface and robust database management system, the
          portal makes it easier for hospitals to find and secure the blood they
          need, and for donors to sign up and make their lifesaving contributions."
        </p>
      </div>

      {/* Objective and Scope Section */}
      <div className="container-fluid text-center wtd mt-3 mb-5 rounded-pill shadow-lg">
        <h2>Objective and Scope</h2>
        <ul style={{ fontSize: "18px", textAlign: "left", margin: "0 auto", width: "80%" }}>
          <li>To put all types of donors under one roof.</li>
          <li>Proper tracking of donors.</li>
          <li>Spread awareness about blood donation.</li>
          <li>Help in life-saving efforts.</li>
          <li>Acknowledgement and recognition of donors.</li>
        </ul>
      </div>

      <Footer />
    </>
  );
}
