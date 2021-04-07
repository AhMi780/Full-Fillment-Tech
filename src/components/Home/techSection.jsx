import Icon1 from "../../assets/images/icon1.png";
import Icon2 from "../../assets/images/icon2.png";
import Icon3 from "../../assets/images/icon3.png";
import Icon4 from "../../assets/images/icon4.png";
import Tech from "../../assets/images/office_colab.jpg";
import { ArrowRightOutlined } from "@ant-design/icons";
import { FaStar } from "react-icons/fa";
import { Row, Col } from "antd";
import { CheckOutlined } from "@ant-design/icons";
export default function TechSection() {
  return (
    <div className="tech_section w-100 ps-relative">
      <div className="tech_bg"></div>
      <div className="container container-sm bs-bb">
        <Row justify="space-between">
          <Col xs={24} lg={10} className="pl-15 pr-15 bs-bb">
            <div className="title_line mb-20"></div>
            <h3 className="title text-white mb-20">
              {" "}
              Provides consultative approach on emerging technology.
            </h3>
          </Col>
          <Col xs={24} lg={12}>
            <Row>
              <Col xs={24} sm={12} className="pl-15 pr-15 bs-bb">
                <p className=" tech_desc desc text-white text-left">
                  As one of the world's largest ITService Providers with over
                  120 engineers and IT support staff are ready to help.
                </p>
                <a
                  className="tech_btn btn ps-relative index-1 no-underline d-flex justify-center item-center text-white bg-green mt-30 mb-30"
                  href="#"
                >
                  <span>Our Pricing</span>
                </a>
              </Col>
              <Col xs={24} sm={12} className="pl-15 pr-15 bs-bb">
                <p className="desc text-white text-left">
                  SmartData been helping organizations and Providers through the
                  World to manage their IT with our unique approach to
                  technology management and consultancy solutions.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row justify="space-between">
          <Col xs={24} sm={12} lg={6} className="pl-15 pr-15 bs-bb">
            <div className="tech_card ps-relative index-1 btn mb-30 d-flex flex-column text-center">
              <div className="feature_icon align-self-center">
                <img className="w-100 h-100" src={Icon1} alt="icon" />
              </div>
              <h4 className="tech_feature_title text-white">Software Asset</h4>
              <p className="tech_feature_desc text-white mb-15">
                All aspects of your software assets including purchasing,
                deployment & maintenance.
              </p>
              <a
                className=" feature_arrow no-underline align-self-center  "
                href="#"
              >
                <i className="icon-arrow-right d-flex justify-center item-center">
                  <ArrowRightOutlined />
                </i>
              </a>
            </div>
          </Col>
          <Col xs={24} sm={12} lg={6} className="pl-15 pr-15 bs-bb">
            <div className="tech_card ps-relative index-1 btn mb-30 d-flex flex-column text-center">
              <div className="feature_icon align-self-center">
                <img className="w-100 h-100" src={Icon2} alt="icon" />
              </div>
              <h4 className="tech_feature_title text-white">
                Privileged Access
              </h4>
              <p className="tech_feature_desc text-white mb-15">
                Extend proven Tech best practices to HR, finance, and other
                service delivery areas.
              </p>
              <a
                className=" feature_arrow no-underline align-self-center  "
                href="#"
              >
                <i className="icon-arrow-right d-flex justify-center item-center">
                  <ArrowRightOutlined />
                </i>
              </a>
            </div>
          </Col>
          <Col xs={24} sm={12} lg={6} className="pl-15 pr-15 bs-bb">
            <div className="tech_card ps-relative index-1 btn mb-30 d-flex flex-column text-center">
              <div className="feature_icon align-self-center">
                <img className="w-100 h-100" src={Icon3} alt="icon" />
              </div>
              <h4 className="tech_feature_title text-white">
                Software License
              </h4>
              <p className="tech_feature_desc text-white mb-15">
                Build dynamic request templates with associated workflows, and
                tasks.
              </p>
              <a
                className=" feature_arrow no-underline align-self-center  "
                href="#"
              >
                <i className="icon-arrow-right d-flex justify-center item-center">
                  <ArrowRightOutlined />
                </i>
              </a>
            </div>
          </Col>
          <Col xs={24} sm={12} lg={6} className="pl-15 pr-15 bs-bb">
            <div className="tech_card ps-relative index-1 btn mb-30 d-flex flex-column text-center">
              <div className="feature_icon align-self-center">
                <img className="w-100 h-100" src={Icon4} alt="icon" />
              </div>
              <h4 className="tech_feature_title text-white">
                Enterprise Service
              </h4>
              <p className="tech_feature_desc text-white mb-15">
                Our technology allows you to offer the latest software to your
                possible customers!
              </p>
              <a
                className=" feature_arrow no-underline align-self-center  "
                href="#"
              >
                <i className="icon-arrow-right d-flex justify-center item-center">
                  <ArrowRightOutlined />
                </i>
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-40">
          <Col xs={24} lg={12} className="d-flex flex-column justify-between">
            <Row className="pr-15 pl-15 bs-bb">
              <Col sm={8} lg={24}>
                <div className="reating_star">
                  {" "}
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </Col>
              <Col sm={16} lg={24}>
                <div className="rating_review bs-bb text-white text-white-md">
                  <p className="mb-15 text-left">
                    <span className="bs-bb"> 99.9% Customer Satisfaction </span>{" "}
                    based on 750+ reviews and 20,000 Objective Resource
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={12} className="pl-15 pr-15 bs-bb">
                <p className="tech_bottom_desc text-grey text-white-md mb-30 text-left lh-15">
                  As one of the world's largest ITService Providers with over
                  120 engineers and IT support staff are ready to help.
                </p>
                <a
                  className="tech_btn_bottom no-underline d-flex justify-center item-center mb-30 text-green"
                  href="#"
                >
                  <span>Request Demo</span>
                </a>
              </Col>
              <Col xs={24} sm={12} className="pl-15 pr-15 bs-bb">
                <ul className="tech_ul bs-bb mb-30 bs-bb text-blue text-white-md li-style-none">
                  <li>
                    <i className="check_lined mr-10">
                      <CheckOutlined />
                    </i>
                    450,000 client’s interactions{" "}
                  </li>
                  <li>
                    <i className="check_lined mr-10">
                      <CheckOutlined />
                    </i>
                    Help challenge critical activities
                  </li>
                  <li>
                    <i className="check_lined mr-10">
                      <CheckOutlined />
                    </i>
                    Simplify & Automate Workflows
                  </li>
                  <li>
                    <i className="check_lined mr-10">
                      <CheckOutlined />
                    </i>
                    Peer perspectives and advice
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col xs={24} lg={12} className="bs-bb pl-15 pr-15">
            <div className="tech_img">
              <img className="w-100 bs-bb" src={Tech} alt="tech" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
