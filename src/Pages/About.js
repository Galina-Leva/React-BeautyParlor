import React, { Component } from "react";
import { Container, Tab, Nav, Row, Col} from "react-bootstrap";

export default class About extends Component {
    render() {
        return (
           <Container>
            <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column mt-2">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Body care</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Face care</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Hair care</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth">Hand care</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fifth">Decorative cosmetics</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content className="mt-3">
                            <Tab.Pane eventKey="first">
                                <img 
                                width={700}
                                height={800}
                                src = "https://u-stena.ru/upload/iblock/972/972e4486c3e40c8b7d48d2778a5b60ed.jpg" />
                                <p>  
                                Beauty is the highest form of genius, 
                                but unlike genius, it does not require confirmation.
                                </p>
                                <p>
                                Beauty without charm is like a hook without bait.
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <img
                                width={700}
                                height={800}
                                 src = "https://oir.mobi/uploads/posts/2021-04/thumbs/1617625886_4-p-litso-bokom-4.jpg" />
                                <p>
                                Beauty is being comfortable in your own skin.
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <img 
                                 width={700}
                                 height={800}
                                src = "https://i.pinimg.com/474x/21/e9/32/21e9327778049602a99a14b4bafd27f3--rivers-frames.jpg" />
                                <p>
                                Hair is for a woman what a frame is for a picture.
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <img 
                                 width={700}
                                 height={800}
                                src = "https://glamours.name/uploads/posts/2021-10/1633664891_58-glamours-name-p-ruki-bez-manikyura-manikyur-krasivo-foto-63.jpg" />
                                  <p>
                                 Hands of a Woman… They are invented by God for Tenderness…
                                 Their touch is like the touch of a light breeze: sometimes warm,
                                  sometimes cool, but so exciting...
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">
                                <img
                                 width={700}
                                 height={900}
                                src = "https://static.insales-cdn.com/r/DUPDKYnfLpI/rs:fit:337:0:1/q:100/plain/images/articles/1/357/1319269/large_5D06190E-CD41-464B-A86B-2A1C92D5D286.jpeg" />
                                <p>
                                Lipstick does wonders for self-esteem.
                            
                                </p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
           </Container>
        )
    }
}