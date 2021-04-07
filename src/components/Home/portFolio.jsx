import Pfc1 from "../../assets/images/pf_1.jpg";
import Pfc2 from "../../assets/images/pf_2.jpg";
import Pfc3 from "../../assets/images/pf_3.jpg";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRightOutlined } from "@ant-design/icons";
export default function PortfolioSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <IoIosArrowForward />,
    prevArrow: <IoIosArrowBack />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="portfolio_section w-100 pb-40 bg-gray">
      {" "}
      <div className="container container-sm bs-bb">
        <div className="pf_heading_box pr-15 pl-15">
          <div className="pf_heading d-flex item-center">
            <div className="heading_line bs-bb"></div>
            <h2>Success Stories</h2>
          </div>
          <h3 className="title text-blue text-left">Latest Case Studies</h3>
        </div>
        <Slider {...settings}>
          <div className="card_wrapper">
            <div className="pf_card flex-30 flex-46-md flex-100-sm">
              <div className="pf_card_img">
                <img className="w-100 " src={Pfc1} alt="pf"></img>
              </div>
              <div className="pf_card_content bs-bb text-left bg-white">
                <div className="pf_cat text-green">
                  <a className="no-underline text-green " href="#">
                    Building
                  </a>
                  ,
                  <a className="no-underline text-green" href="#">
                    Interior
                  </a>
                </div>
                <h4 className="pf_card_title text-blue">
                  <a className="no-underline text-blue" href="#">
                    Financial’s Need For Strategic Advisor
                  </a>
                </h4>
                <p className="pf_card_desc text-grey">
                  We delivered solutions at every step, and moved seamlessly
                  into a more proactive role as a strategic advisor, providing
                  support and guidance across all IT topics.{" "}
                </p>
                <a className="pf_btn no-underline" href="#">
                  <span className="btn_underline text-blue">Read More</span>
                  <i className="icon-arrow-right justify-center item-center d-none ml-10">
                    <ArrowRightOutlined />
                  </i>
                </a>
              </div>
            </div>
          </div>
          <div className="card_wrapper">
            <div className="pf_card flex-30 flex-46-md flex-100-sm">
              <div className="pf_card_img">
                <img className="w-100 " src={Pfc2} alt="pf"></img>
              </div>
              <div className="pf_card_content bs-bb text-left bg-white">
                <div className="pf_cat text-green">
                  <a className="no-underline text-green " href="#">
                    Software
                  </a>
                  ,
                  <a className="no-underline text-green" href="#">
                    Support
                  </a>
                </div>
                <h4 className="pf_card_title text-blue">
                  <a className="no-underline text-blue" href="#">
                    24x7 System Monitoring and Alert Response{" "}
                  </a>
                </h4>
                <p className="pf_card_desc text-grey">
                  This single, unified platform integrates all operational
                  phases of selling and activation of their wireless services
                  and devices, and serves as the backbone of the operations.{" "}
                </p>
                <a className="pf_btn no-underline" href="#">
                  <span className="btn_underline text-blue">Read More</span>
                  <i className="icon-arrow-right justify-center item-center d-none ml-10">
                    <ArrowRightOutlined />
                  </i>
                </a>
              </div>
            </div>
          </div>
          <div className="card_wrapper">
            <div className="pf_card flex-30 flex-46-md flex-100-sm">
              <div className="pf_card_img">
                <img className="w-100 " src={Pfc3} alt="pf"></img>
              </div>
              <div className="pf_card_content bs-bb text-left bg-white">
                <div className="pf_cat text-green">
                  <a className="no-underline text-green " href="#">
                    Management
                  </a>
                  ,
                  <a className="no-underline text-green" href="#">
                    Cloud
                  </a>
                </div>
                <h4 className="pf_card_title text-blue">
                  <a className="no-underline text-blue" href="#">
                    Nonprofit Organization Utilized Security{" "}
                  </a>
                </h4>
                <p className="pf_card_desc text-grey">
                  Servers going down on a weekly basis had become the
                  organization’s “normal.” We came on board with the objective
                  of stabilizing the environment, assisting{" "}
                </p>
                <a className="pf_btn no-underline" href="#">
                  <span className="btn_underline text-blue">Read More</span>
                  <i className="icon-arrow-right justify-center item-center d-none ml-10">
                    <ArrowRightOutlined />
                  </i>
                </a>
              </div>
            </div>
          </div>
          <div className="card_wrapper">
            <div className="pf_card flex-30 flex-46-md flex-100-sm">
              <div className="pf_card_img">
                <img className="w-100 " src={Pfc3} alt="pf"></img>
              </div>
              <div className="pf_card_content bs-bb text-left bg-white">
                <div className="pf_cat text-green">
                  <a className="no-underline text-green " href="#">
                    Management
                  </a>
                  ,
                  <a className="no-underline text-green" href="#">
                    Cloud
                  </a>
                </div>
                <h4 className="pf_card_title text-blue">
                  <a className="no-underline text-blue" href="#">
                    Nonprofit Organization Utilized Security{" "}
                  </a>
                </h4>
                <p className="pf_card_desc text-grey">
                  Servers going down on a weekly basis had become the
                  organization’s “normal.” We came on board with the objective
                  of stabilizing the environment, assisting{" "}
                </p>
                <a className="pf_btn no-underline" href="#">
                  <span className="btn_underline text-blue">Read More</span>
                  <i className="icon-arrow-right justify-center item-center d-none ml-10">
                    <ArrowRightOutlined />
                  </i>
                </a>
              </div>
            </div>
          </div>
          <div className="card_wrapper">
            <div className="pf_card flex-30 flex-46-md flex-100-sm">
              <div className="pf_card_img">
                <img className="w-100 " src={Pfc2} alt="pf"></img>
              </div>
              <div className="pf_card_content bs-bb text-left bg-white">
                <div className="pf_cat text-green">
                  <a className="no-underline text-green " href="#">
                    Software
                  </a>
                  ,
                  <a className="no-underline text-green" href="#">
                    Support
                  </a>
                </div>
                <h4 className="pf_card_title text-blue">
                  <a className="no-underline text-blue" href="#">
                    24x7 System Monitoring and Alert Response{" "}
                  </a>
                </h4>
                <p className="pf_card_desc text-grey">
                  This single, unified platform integrates all operational
                  phases of selling and activation of their wireless services
                  and devices, and serves as the backbone of the operations.{" "}
                </p>
                <a className="pf_btn no-underline" href="#">
                  <span className="btn_underline text-blue">Read More</span>
                  <i className="icon-arrow-right justify-center item-center d-none ml-10">
                    <ArrowRightOutlined />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
