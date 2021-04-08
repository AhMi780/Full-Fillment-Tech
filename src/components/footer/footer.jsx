import FooterLogo from "../../assets/images/logo/logo-dark.png";
import { Row, Col } from "antd";
import { FacebookOutlined } from "@ant-design/icons";
import { InstagramOutlined } from "@ant-design/icons";
import { TwitterOutlined } from "@ant-design/icons";
import { IoIosArrowUp } from "react-icons/io";
export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="footer bs-bb bg-white">
      <div className="footer_primary bs-bb">
        <div className="container container-sm bs-bb">
          <Row>
            <Col xs={24} lg={6} className="pl-15 pr-15 bs-bb">
              <img className="footer_logo mb-30" src={FooterLogo} alt="logo" />
            </Col>
            <Col xs={24} sm={12} md={8} lg={4} className="pl-15 pr-15 bs-bb">
              <h6 className="footer_widget_title text-blue">Company</h6>

              <div className="footer_widget_content">
                <ul className="li-style-none">
                  <li>
                    <a href="/" className="no-underline text-grey">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/" className="no-underline text-grey">
                      Meet Our Team
                    </a>
                  </li>
                  <li>
                    <a href="/" className="no-underline text-grey">
                      News & Media
                    </a>
                  </li>
                  <li>
                    <a href="/" className="no-underline text-grey">
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a href="/" className="no-underline text-grey">
                      Contacts
                    </a>
                  </li>
                  <li>
                    <a href="/" className="no-underline text-grey">
                      Investors
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={24} sm={12} md={8} lg={4} className="pl-15 pr-15 bs-bb">
              <h6 className="footer_widget_title text-blue">Solutions</h6>

              <div className="footer_widget_content">
                <ul className="li-style-none">
                  <li>
                    <a href="/" className="no-underline text-grey">
                      IT Management
                    </a>
                  </li>
                  <li>
                    <a href="/" className="no-underline text-grey">
                      Cyber Security
                    </a>
                  </li>
                  <li>
                    <a href="/" className="no-underline text-grey">
                      Cloud Computing
                    </a>
                  </li>
                  <li>
                    <a href="/" className="no-underline text-grey">
                      IT Consulting{" "}
                    </a>
                  </li>
                  <li>
                    <a href="/" className="no-underline text-grey">
                      Software Dev
                    </a>
                  </li>
                  <li>
                    <a href="/" className="no-underline text-grey">
                      IT Support
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={24} sm={12} md={8} lg={4} className="pl-15 pr-15 bs-bb">
              <h6 className="footer_widget_title text-blue">Resources</h6>
              <div className="footer_widget_content">
                <ul className="li-style-none">
                  <li>
                    <a href="/" className="no-underline text-grey">
                      Pricing and plans
                    </a>
                  </li>
                  <li>
                    <a href="/" className="no-underline text-grey">
                      Terms of Service{" "}
                    </a>
                  </li>
                  <li>
                    <a href="/" className="no-underline text-grey">
                      Help & FAQ{" "}
                    </a>
                  </li>
                  <li>
                    <a href="/" className="no-underline text-grey">
                      Contact Us{" "}
                    </a>
                  </li>
                  <li>
                    <a href="/" className="no-underline text-grey">
                      Site map
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={24} sm={12} lg={6} className="pl-15 pr-15 bs-bb">
              <h6 className="footer_widget_title text-blue">News Letter</h6>
              <div className="footer_form mb-20">
                <input
                  id="footer_email"
                  className="footer-email w-100 text-left ol-none bs-bb"
                  placeholder="Your Email Address"
                ></input>
              </div>
              <div className="accept_privacy mb-20 d-flex item-center">
                <input
                  className="check-box"
                  id="check_box"
                  type="checkbox"
                ></input>
                <label className="p-5 text-grey">
                  I accept the privacy and terms.
                </label>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container container-sm bs-bb">
          <Row justify="center" align="middle">
            <Col md={10} xs={24} className="pl-15 pr-15 bs-bb es-text-center">
              <span className="text-blue">
                © 2020 Smart Data, All Rights Reserved. With Love by
              </span>
              <a href="/" className="no-underline text-green">
                7oroof.com
              </a>
            </Col>
            <Col xs={24} md={4}>
              <Row justify="center">
                <button
                  onClick={scrollTop}
                  className="scrlup-btn ol-none d-flex justify-center"
                >
                  <IoIosArrowUp className="scroll_top_btn" />
                </button>
              </Row>
            </Col>
            <Col md={10} xs={24} className="pl-15 pr-15 bs-bb">
              <Row justify="center" align="middle">
                <ul className="social_ul li-style-none d-flex item-center bs-bb m-10">
                  <li>
                    {" "}
                    <a href="/" className="no-underline">
                      <i className="social_tag text-blue trans-3s">
                        <FacebookOutlined />
                      </i>
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/" className="no-underline">
                      <i className="social_tag text-blue trans-3s">
                        <InstagramOutlined />
                      </i>
                    </a>{" "}
                  </li>
                  <li className="mr-0">
                    {" "}
                    <a href="/" className="no-underline">
                      <i className="social_tag text-blue trans-3s">
                        <TwitterOutlined />
                      </i>
                    </a>{" "}
                  </li>
                </ul>
                <Row justify="center">
                  <a
                    className="social_btn btn ps-relative index-1 no-underline text-blue d-flex justify-center item-center bs-bb m-10"
                    href="/"
                  >
                    <i className="icon-apple"></i>
                    <span>Apple Store</span>
                  </a>
                  <a
                    className="social_btn btn ps-relative index-1 no-underline text-blue d-flex justify-center item-center bs-bb m-10"
                    href="/"
                  >
                    <i className="icon-play-store"></i>
                    <span>Play Store</span>
                  </a>
                </Row>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
