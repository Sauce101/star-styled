import React from "react";
import Icon1 from "../../images/comps/Power_Gen500.png";
import Icon2 from "../../images/comps/tf_hangar.png";
import Icon3 from "../../images/comps/troops1.png";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ComplimentElements";

const Compliment = () => {
  return (
    <>
      <ServicesContainer id="compliment">
        <ServicesH1>Compliment</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Tractor Beams</ServicesH2>
            <ServicesP>
              The station was powered by a cavernous hypermatter reactor.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>TIE Fighters</ServicesH2>
            <ServicesP>
              Starships, Destroyers, and numerous TIE fighters and bombers.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Imperial Troopers</ServicesH2>
            <ServicesP>
              Housing 342,953 members of the Imperial Army and Navy.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Compliment;
