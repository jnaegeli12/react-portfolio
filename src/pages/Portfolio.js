import React from 'react';
import Row from '../components/Row';
import Container from '../components/Container';
import PortfolioCard from '../components/PortfolioCard';
import PortfolioIntro from '../components/PortfolioIntro';

function Portfolio() {
  return (
    <div className="container padding">
      <Row>
        <PortfolioIntro />
      </Row>
      <Container>
          <PortfolioCard />
      </Container>
    </div>
  )
}

export default Portfolio;