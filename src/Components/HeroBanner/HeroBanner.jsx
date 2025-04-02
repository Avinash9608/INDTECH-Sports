import React from "react";
import logo1 from "../../assets/images/logo_1.png";
import logo2 from "../../assets/images/logo_2.png";
import logo3 from "../../assets/images/logo_3.png";
import logo4 from "../../assets/images/logo_4.png";
import logo5 from "../../assets/images/logo_5.png";
import logo6 from "../../assets/images/logo_6.png";
import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <section className="banner text-white pt-5">
      <div className="position-relative sports_banner">
        <div className="slidoverlay bodypx">
          <div className="container h-100">
            <div className="row align-items-center py-md-5 h-100">
              <div className="col-lg-9 tracking-in-expand text-center py-5 mx-auto">
                <h2 className="text-white fs-50 fw-bold">
                  Sports Betting App Development Company
                </h2>
                <p className="text-white pe-md-5 mb-4 thin_p">
                  Take sports betting fun to the next level by launching your
                  application to earn millions. We can help you build your
                  digital presence with the latest technologies, frameworks, and
                  APIs.
                </p>
                <a href="https://indtech-portfolio-page.vercel.app/" className="btn-white mt-4 fw-bold">
                  <span>Talk about Your Project</span>
                  <i className="icon icon-arrow"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
