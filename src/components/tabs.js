import React from 'react';
import { Nav, Tab, Row, Col, NavItem } from 'react-bootstrap';

const Tabs = (props) => {
    const { faqs } = props
    const titles = faqs.map((value) => (
        value.title
    ))
    const content = faqs.map((value) => (
        value.body
    ))
    return (
        <Tab.Container className="App-tabs" defaultActiveKey="#1" id="App-tabs">
            <Row>
                <Col sm={8}>
                    <Tab.Content animation>
                        {
                            content.map((content, i) => (
                                <Tab.Pane eventKey={`#${i}`} key={i}><div dangerouslySetInnerHTML={{__html: content}}/></Tab.Pane>
                            ))
                        }
                    </Tab.Content>
                </Col>
                <Col sm={4}>
                    <Nav bsStyle="pills" stacked>
                        {
                            titles.map((title, i ) => (
                                <NavItem eventKey={`#${i}`} key={i}><div dangerouslySetInnerHTML={{__html: title}}/></NavItem>
                            ))
                        }
                    </Nav>
                </Col>
            </Row>
        </Tab.Container>
    )
}

export default Tabs
