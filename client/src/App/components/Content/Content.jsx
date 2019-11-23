import React, { Component } from "react";

import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import contentData from "../../utils/contentData";

// Comment

class Content extends Component {
    render() {
        return (
            <div className="next-steps my-5">
                <h2 className="my-5 text-center" style={{ color: "#34435E" }}>
                    We Provide a place for education ... and lots of fun!
                </h2>
                <Row className="d-flex justify-content-between">
                    {contentData.map((col, i) => (
                        <Col key={i} md={5} className="mb-4">
                            <h3 className="mb-3">
                                <a href={col.link} style={{ color: "#D8D2E1", textAlign: "center" }}>
                                    {/* <FontAwesomeIcon icon="link" className="mr-2" /> */}
                                    {col.title}
                                </a>
                            </h3>
                            <p>{col.description}</p>
                        </Col>
                    ))}
                </Row>
            </div>
        );
    }
}

export default Content;
