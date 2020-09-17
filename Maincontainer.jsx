import React from "react";
import Cardmain from "./Cardmain";
import { Container,Row,Col} from 'react-bootstrap';
function Maincontainer()
{
    return(
        
        <div id="page-content-wrapper">
            <Container fluid>
            <Row>
                <Col lg="12">
                    <Cardmain />
                </Col>
            </Row>

            </Container>
        </div>
    )
}
export default Maincontainer;