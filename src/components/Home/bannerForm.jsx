import { Row, Col } from "antd";

export default function FormSection() {
  return (
    <div className="banner_form banner-bg ps-relative bs-bb mb-20">
      <div className="container_banner bs-bb">
        <Row>
          <Col xs={24} lg={12} className="bs-bb pr-15 pl-15">
            <div className="banner_heading bs-bb">
              <h3 className="banner_heading_title mb-30 text-white">
                Satisfied Users Over The Globe
              </h3>
            </div>
            <p className="banner_desc mb-30 text-white">
              If you’re looking for a rewarding career and the chance to make an
              impact, you’ve come to the right place. We will transform your
              business through our techniques!
            </p>
          </Col>{" "}
          <Col xs={24} lg={12} className="bs-bb pr-15 pl-15">
            <div className="contact_panel bs-bb">
              <div className="d-flex flex-column">
                <div className="panel_heading bs-bb pl-15 pr-15">
                  <h4 className="panel_title mb-20 text-blue">
                    Request A Quote
                  </h4>
                  <p className="panel_desc text-grey mb-30">
                    Our deep pool of certified engineers and IT staff are ready
                    to help you to keep your IT business safe & ensure high
                    availability.
                  </p>
                </div>
                <Row justify="space-between">
                  <Col xs={24} sm={12} className="pl-15 pr-15 bs-bb mb-30">
                    <input
                      className="input-box bs-bb ol-none"
                      id="contactName"
                      type="text"
                      placeholder="Name"
                    ></input>
                  </Col>
                  <Col xs={24} sm={12} className="pl-15 pr-15 bs-bb mb-30">
                    <input
                      className="input-box bs-bb ol-none"
                      id="Email"
                      type="text"
                      placeholder="Email"
                    ></input>
                  </Col>
                  <Col xs={24} sm={12} className="pl-15 pr-15 bs-bb mb-30">
                    <input
                      className="input-box bs-bb ol-none"
                      id="Inquiry"
                      type="text"
                      placeholder="Inquiry"
                    ></input>
                  </Col>
                  <Col xs={24} sm={12} className="pl-15 pr-15 bs-bb mb-30">
                    <input
                      className="input-box bs-bb ol-none"
                      id="Phone"
                      type="text"
                      placeholder="Phone"
                    ></input>
                  </Col>
                </Row>
                <div className="panel_detail_box mb-30 bs-bb pl-15 pr-15">
                  <textarea
                    placeholder="Additional Details!"
                    id="contact-message"
                    className="panel-detail bs-bb w-100 ol-none"
                  ></textarea>
                </div>
                <Row align="middle" className="mb-20 pr-15 pl-15 bs-bb">
                  <input
                    className="check-box"
                    id="check_box"
                    type="checkbox"
                  ></input>
                  <label className="p-5 text-grey">
                    I accept the privacy and terms.
                  </label>
                </Row>
                <button className="form_btn btn ps-relative index-1 text-white bg-green bs-bb ol-none mr-15 ml-15 ">
                  Submit Request
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
