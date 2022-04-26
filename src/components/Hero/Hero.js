import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Gabriel Guevara's<br />
          Portfolio
        </SectionTitle>
        <SectionText>
        Hi there! My name is <b> Gabriel Guevara</b> 
        <br/>I’m passionate about using programming to solve problems and innovating digital products to help people do amazing things.
        </SectionText>
        <Button href="mailto:guevara.a.gabriel@gmail.com" onClick={props.handleClick}>contact Gabriel</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;