import React, { Component } from "react";
import CarouselBox from "../Components/CarouselBox";
import { Container, CardGroup, Card, Button } from "react-bootstrap";

export default class Home extends Component {
    render () {
        return(
            <>
            <CarouselBox />
            <Container>
                <h2 className="text-center m-4">Our team</h2>
                <CardGroup className="m-4">
                    <Card border="info" text="danger">
                    <Card.Body>
                        <Card.Title>Team of specialists</Card.Title>
                        <Card.Text>
                       Every day we help women and men feel and look even better!
                    </Card.Text>
                    <Button variant="primary">About team</Button>
                    </Card.Body>
                    <Card.Img
                    variant="top"
                    src="https://sales-generator.ru/upload/medialibrary/ef2/xef206d53e6cd54297454106f5f5cdcf2.jpg.pagespeed.ic.jjGphisdOQ.jpg"
                    />
                    </Card>
                    <Card border="info" text="danger">
                    <Card.Img
                    variant="top"
                    src="https://st.frendi.ru/c/w/586/h/288/cfs15/deal_offer/e5/bd/e5bd5fe6432b030a1886a285a24a2dc2.jpg"
                    />
                    <Card.Body>
                        <Card.Title>Team of specialists</Card.Title>
                        <Card.Text>
                       Every day we help women and men feel and look even better!
                    </Card.Text>
                    <Button variant="primary">About team</Button>
                    </Card.Body>
                    </Card>
                    <Card border="info" text="danger">
                    <Card.Body>
                    <Card.Img
                    variant="top"
                    src="https://ath2.unileverservices.com/wp-content/uploads/sites/7/2018/03/teasing-twisted-ponytail-hairstyle-1024x722.jpg"
                    />
                        <Card.Title>Team of specialists</Card.Title>
                        <Card.Text>
                       Every day we help women and men feel and look even better!
                    </Card.Text>
                    <Button variant="primary">About team</Button>
                    </Card.Body>
                    </Card>
                    </CardGroup>
            </Container>
            </>
        )
    }
}