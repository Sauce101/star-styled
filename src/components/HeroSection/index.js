import { Fade } from "react-awesome-reveal";
import Video from "../../videos/video.mp4";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <Fade delay={1000} duration={5000}>
          <HeroH1>DEATH STAR</HeroH1>
        </Fade>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
