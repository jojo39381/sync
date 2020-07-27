import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import helena from './helena.jpeg';
import john from './john.jpeg';
import arjun from './arjun.jpeg';
import melissa from './melissa.jpeg';
import malia from './malia.jpeg';

function Detail() {
    return (
        
        <Container fluid>
            <section>
            <Row className='detail-row'>
                <Col className='detail-section'>
                    <h1>What is Sync?</h1>
                    
                </Col>
                <Col className='detail-section' >
                    
                    <h1>Sync. is a student-founded, student-run, VC & Investing fund, focused on building a community of founders and investors and fostering connections.</h1>
                </Col>
                
            </Row>
            </section>
            <section className='action-row'>
            <h2 style={{textAlign:'center', color:'black'}}>What We Do</h2>   
            <Row>
            
                <Col>
                <i className='ion-university'></i>
                <h5>Mentorship</h5>
                <p>We help you build the necessary skills and provide you with the tools you need to succeed as a founder</p>
                </Col>
                <Col>
                <i className='ion-cash'></i>
                <h5>Funding</h5>
                <p>We provide funding to a selected number of startups and help you manage the money and resources</p>
                </Col>
                
                <Col>
                <i className='ion-person-stalker'>
            
                </i>
                <h5>Bulding relationships</h5>
                <p>We connect you with other startup founders and industry professionals to broaden your network</p>
                </Col>
                
            </Row>
            </section>
            <section className='program-row'>
            <h2 style={{textAlign:'center', color:'black'}}>Our Programs</h2>
            <Row>
                <Col>
                    <i className='ion-code-working'></i>
                    <h5>Startup Program</h5>
                    <p>Our startup program is a 6 week long fellowship designed to get you from idea to an MVP (minimum viable product)</p>
                </Col>
                <Col>
                    <i className='ion-stats-bars'></i>
                    <h5>Investing Program</h5>
                    <p>Our investing program is a 8 week long fellowship to help you build investing skills to make strategic decisions within our fund.</p>
                </Col>
            </Row>

            <button className='apply-button'>Click Here To Apply</button>
            </section>


            <section className='partner-row'>
            <h2>Our Partners</h2>
                <Row>
                    <Col>
                       <img src={helena} alt='hello' className='profile' />
                       <h5>Helena Merk</h5>
                       <p>Co-founder and CEO of Glimpse (YC W20)</p>
                    </Col>
                    <Col>
                        <img src={john} alt='hello' className='profile'></img>
                        <h5>John Xie</h5>
                        <p>Co-founder and CEO of Taskade (YC W19)</p>
                    </Col>
                    <Col>
                        <img src={arjun} alt='hello' className='profile'></img>
                        <h5>Arjun Vairavan</h5>
                        <p>Co-founder and CEO of Kama (Columbia)</p>
                    </Col>
                    <Col>
                       <img src={melissa} alt='hello' className='profile' />
                       <h5>Melissa Du</h5>
                       <p>Co-founder and CEO of Cadence (YC W20)</p>
                    </Col>
                    <Col>
                       <img src={malia} alt='hello' className='profile' />
                       <h5>Malia Jiang</h5>
                       <p>Co-founder and COO of Spark (Berkeley)</p>
                    </Col>

                </Row>
            </section>
        </Container>
       
    )
}
export default Detail