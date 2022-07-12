import React, { Component } from "react";
import {Card, Container, Col, Row, ListGroup } from "react-bootstrap";


export default class Blog extends Component {
  render() {
    return (
        <Container>
          <Row>
           <Col md="9">
            <Card className="m-5" border="info" text="danger" >
              <img
              width={300}
              height={250}
              className="m-3"
              src="https://p0.zoon.ru/preview/szR15Opl_pHpg_cO8OsT7A/252x168x85/1/9/5/55549a0c40c08864448b56a7_60b90b7b2f2a7.jpg"
              />
              <Card.Body>
              <h5>How to choose a personal hairdresser?</h5>
                
                <p>
                · Recommendation of friends, acquaintances, relatives.
                These are not empty words at all. Any positive recommendation means that the hairdresser gave this person
                 a hairstyle that he liked. It is also worth paying attention to the condition of the hair of those who recommend
                  their master.

                 It is very important that the master not only provides the necessary services, 
                 but also strictly follows the technologies and recommendations of manufacturers (dyes and hair care products).

                It happens that not everyone is ready to vouch for their master. Or, for some reason,
                
                 the recommended hairdresser may not be suitable. Then you need to pay attention to the following points:
                · Useful tips and advice.
                The hairdresser's choice is made. Now you need to pay attention to the cutting process itself. 
                A professional will always ask questions, take an interest in the preferences of the client.
                 In the process of cutting, any options will also be offered. The client can often hear the comments of 
                 the work of the master. This gives him confidence. The hairdresser does not just mechanically do his job,
                  but tries to make the haircut as beautiful as possible. Taking into account all preferences and wishes. 
                  After the haircut, advice will be given on how to properly care for her so that she pleases as long as possible.
                   Recommendations for home hair care are available.
                </p>
              </Card.Body>
            </Card>
            <Card className="m-5"  border="info" text="danger">
              <img
              width={300}
              height={250}
              className="m-3"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdkfffMsZ3lkRxR52pv8NamqDW3yAGVkUgv4RSB9bNkpepqH-uXtXcw1tr2N_Gi4kpVo4&usqp=CAU"
              />
              <Card.Body>
              <h5>How to care for dyed hair?</h5>
             <p>
               Colored hair care tips:
            <li>
                 Strogo soblyudayte instruktsiyu, chtoby dostichʹ neobkhodimogo effekta.
            </li>
             <li>
                V pervyye neskolʹko dney, posle protsedury izmeneniya tsveta, nuzhno ispolʹzovatʹ 
                prednaznachennyye dlya etogo shampuni i balʹzamy. Obychno oni nakhodyat·sya v odnoy korobke s kraskoy.
                V nikh soderzhat·sya veshchestva, sposobnyye neytralizovatʹ shchelochʹ. Yesli takikh net v komplekte,
                obyazatelʹno nuzhno priobresti. Idealʹno, yesli oni budut odnoy i toy zhe marki, chto i kraska dlya volos.
                Strictly follow the instructions to achieve the desired effect.
                In the first few days, after the color change procedure, shampoos and balms intended for this should be used.
                Usually they are in the same box with the paint. They contain substances that can neutralize alkali. 
                If these are not included, be sure to purchase. Ideally, if they are the same brand as the hair dye.
            </li>
            <li>
              In the future, it is necessary to use care products marked “for colored hair”.
            </li>
            <li>
               Avoid going to pools, baths, etc. in the coming days after staining.
           </li>
           <li>
           Minimize the use of curling irons, hair dryers.
           </li>
            <li>
              Do not brush wet hair. It can also damage the hair structure.              
            </li>
             </p>
               </Card.Body>
               </Card>
              <Card className="m-5" border="info" text="danger">
              <img
              width={300}
              height={250}
              className="m-3"
              src="https://assets.theyou.com/public/thumbs/work_elements/51235/jpg/w1330/h1330/q80/51235/work_elements/September2021/hairstyles-51235-water.jpg"
              />
              <Card.Body>
              <h5>Bridal hairstyles!</h5>
                
                <p>
                Sometimes it can be difficult to decide on the choice of your own style, 
                especially if it concerns not a single element, but the formation of a holistic image.
                 Before deciding on a specific hairstyle, it is worth considering the main styles of wedding hairstyles. 
                 But first, let's try to make a small lyrical digression and speculate a little.
                </p>
                <p>
                Style is a holistic image through which a person expresses his inner "I", 
                his individuality. During its formation, we select appropriate clothes, shoes, accessories and, of course, 
                a hairstyle. In order to feel comfortable on your wedding day, you need to choose an image that matches your
                 inner worldview. A hairstyle can not only tell a lot about the character, interests and inner world of a person, 
                 but is also one of the brightest and most attractive details in the image of a bride.
                </p>
                <p>
                It is believed that the more disordered and loose the hair, the more romantic, unassembled and spontaneous their owner.
                 The stronger the girl focuses on long luxurious hair, freely falling over her shoulders, the more sensual and sexy she is.
                  And women with short and straight hair are considered more logical, self-reliant and independent.
                </p>
                <p>
                  
                 The most popular and widely known hairstyles in design are classic, romantic, glamorous, extravagant, 
                 sporty and other styles.              
                </p>
                <p>
                  
                There are no styles good or bad. The main thing is that the hairstyle style fits the rest of the image of the bride 
                 and matches her inner “I”.
                </p>
                <p>
                If you are not sure which style is more suitable for you in terms of appearance, facial contours or s
                imply emotional state, then we recommend that you contact the Furor salon stylists for a free consultation.
                 Sign up and come, to hear the opinion of professionals is never superfluous.
                </p>
              </Card.Body>
            </Card>
          </Col>
            <Col md="3" >
              <h5 className="text-center mt-5">Categories</h5>
              <Card  className="mt-3" border="info">
                <ListGroup variant="flush">
                  <ListGroup.Item>Hair care</ListGroup.Item>
                  <ListGroup.Item>Massage</ListGroup.Item>
                  <ListGroup.Item>Haircuts and coloring</ListGroup.Item>
                  <ListGroup.Item>Wedding hairstyles</ListGroup.Item>
                  <ListGroup.Item>Hair Treatments</ListGroup.Item>
                  <ListGroup.Item>News</ListGroup.Item>
                </ListGroup>
              </Card>
              <Card className="mt-3" border="info">
                <Card.Body>
                <Card.Title>Site widget</Card.Title>
                <Card.Text>
                Every woman or young girl wants to look beautiful! Fashionable or creative hairstyle,
                 coloring and styling contribute to an attractive appearance. And without a good hairdresser...
                </Card.Text>
                </Card.Body>
              </Card>
             </Col>
          </Row>
        </Container>
             
    );
  }
}



