import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRightOutlined } from "@ant-design/icons";

export default function Header() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="slider">
      <div className="slider_card1 ps-relative index-1 overlay">
        <div className="container contaner-md container-sm pl-15 pr-15 bs-bb">
          <div className="slide_content_div">
            <h2 className="slide-title">
              We Run All Kinds Of IT Services That Vow Your Success
            </h2>
            <p className="slide-desc">
              We are experienced professionals who understand that It services
              is changing, and are true partners who care about your success.
              Our team provides a consultative approach on emerging technology.
            </p>
            <div className="d-flex flex-wrap">
              <a
                href="#"
                className="btn_header btn ps-relative index-1 no-underline bg-green d-flex justify-center item-center text-white mr-30 mb-10"
              >
                More About Us
                <i className="icon-arrow-right d-flex justify-center item-center ml-10">
                  <ArrowRightOutlined />
                </i>
              </a>
              <a
                href="#"
                className="btn_header btn ps-relative index-1 no-underline bg-white d-flex justify-center item-center text-black"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="slider_card2 overlay ps-relative index-1">
        <div className="container contaner-md container-sm pl-15 pr-15 bs-bb">
          <div className="slide_content_div">
            <h2 className="slide-title">
              Keep Business Safe And Ensure High Availability.{" "}
            </h2>
            <p className="slide-desc">
              We are experienced professionals who understand that It services
              is changing, and are true partners who care about your success.
              Our team provides a consultative approach on emerging technology.
            </p>
            <div className="d-flex flex-wrap">
              <a
                href="#"
                className="btn_header btn ps-relative index-1 no-underline bg-green d-flex justify-center item-center text-white mr-30 mb-10"
              >
                More About Us
                <i className="icon-arrow-right d-flex justify-center item-center ml-10">
                  <ArrowRightOutlined />
                </i>
              </a>
              <a
                href="#"
                className="btn_header btn ps-relative index-1 no-underline bg-white d-flex justify-center item-center text-black"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
}
