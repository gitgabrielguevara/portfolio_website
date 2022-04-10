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
        <br/>I’m passionate about using programming to solve problems and innovativing digital products to help people do amazing things.
        </SectionText>
        <Button onClick={props.handleClick}>e-mail Gabriel</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;