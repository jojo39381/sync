import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import helena from './helena.jpeg';
import john from './john.jpeg';
import arjun from './arjun.jpeg';
import melissa from './melissa.jpeg';


function Detail() {
    return (
        
        <Container fluid>
            <section>
            <Row className='detail-row'>
                <Col className='detail-section' md='6' sm='12'>
                    <h2>What is bearLabs.?</h2>
                    
                </Col>
                <Col className='detail-section' md='6' sm='12'>
                    
                    <h2>bearLabs. is a student-founded, student-run, VC & Investing fund, focused on building a community of founders and investors and fostering connections.</h2>
                </Col>
                
            </Row>
            </section>
            <section className='action-row'>
            <h2 style={{textAlign:'center', color:'black'}}>What We Do</h2>   
            <Row>
            
                <Col md='4' sm='12'>
                <i className='ion-university'></i>
                <h5>Mentorship</h5>
                <p>We help you build the necessary skills and provide you with the tools you need to succeed as a founder</p>
                </Col>
                <Col md='4' sm='12'>
                <i className='ion-cash'></i>
                <h5>Funding</h5>
                <p>We select 2-5 startups to give $1500 dollars as a grant and help you manage the money and resources</p>
                </Col>
                
                <Col md='4' sm='12'>
                <i className='ion-person-stalker'>
            
                </i>
                <h5>Connections</h5>
                <p>We connect you with other successful startup founders and industry professionals to broaden your network</p>
                </Col>
                
            </Row>
            </section>
            <section>
            
            <Row className='program-row' id='programs'>
            <h2 style={{textAlign:'center', color:'black', width:'100%'}}>Join Us!</h2>
                <Col md='6' sm='12'>
                    <i className='ion-code-working'></i>
                    <h5>Startup Program</h5>
                    <p>Our startup program is a 2 month long fellowship designed to get you from an idea to an MVP (minimum viable product) and attract an user base.</p>
                    <button className='apply-button'><a href='https://josephycyeh.typeform.com/to/Pugk9J8T'>Click Here to Apply</a></button>
                </Col>
                <Col md='6' sm='12'>
                    <i className='ion-stats-bars'></i>
                    <h5>Executive Board</h5>
                    <p>Our executive board members help us manage our fellowship program, facilitate workshops, and ensure a great experience for our members.</p>
                    <button className='apply-button'><a href='https://josephycyeh.typeform.com/to/Pugk9J8T'>Click Here to Apply</a></button>
                </Col>

                    
            </Row>

            
            </section>


            <section className='partner-row' id='partners'>
            <h2>Our Partners</h2>
                <Row>
                    <Col md='6' sm='12'>
                       <img src={helena} alt='hello' className='profile' />
                       <h5>Helena Merk</h5>
                       <p>Co-founder and CEO of Glimpse (YC W20)</p>
                    </Col>
                    <Col md='6' sm='12'>
                        <img src={john} alt='hello' className='profile'></img>
                        <h5>John Xie</h5>
                        <p>Co-founder and CEO of Taskade (YC W19)</p>
                    </Col>
                    <Col md='6' sm='12'>
                        <img src={arjun} alt='hello' className='profile'></img>
                        <h5>Arjun Vairavan</h5>
                        <p>Co-founder and CEO of Kama (Columbia)</p>
                    </Col>
                    <Col md='6' sm='12'>
                       <img src={melissa} alt='hello' className='profile' />
                       <h5>Melissa Du</h5>
                       <p>Co-founder and CEO of Cadence (YC W20)</p>
                    </Col>














                    {/* <Col md='6' sm='12'>
                       <img src={hugo} alt='hello' className='profile' />
                       <h5>Hugo Zhan</h5>
                       <p>World-Renown Ping Pong Champion (Berkeley)</p>
                    </Col> */}
                   

                </Row>
            </section>
            <section>
                <Row className='explain-process-row'>
                    <Col className='explanation-column' md='6' sm='12'>
                        <h1>How it works</h1>
                        
                    </Col>
                    <Col className='explanation-column' md='6' sm='12'>
                        <div className='explanation-image'>
                            <p className='explanation'> During your fellowship, we help you turn your ideas into a usable product.<br></br><br></br>We provide our members with the necessary tools and resources to succeed, so they can focus on building good products.</p>
                        </div>
                    </Col>
            
                    
                </Row>
            </section>
            
        </Container>
       
    )
}
export default Detail