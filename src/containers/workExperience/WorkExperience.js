import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFlip, Pagination, Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Experiences</h1>
              <div className="experience-cards-div">
                <Swiper
                  loop={true}
                  effect={"flip"}
                  grabCursor={true}
                  pagination={{clickable: true}}
                  navigation={true}
                  modules={[EffectFlip, Pagination, Navigation]}
                  className="mySwiper"
                >
                  {workExperiences.experience.map((card, i) => {
                    return (
                      <SwiperSlide key={i}>
                        <ExperienceCard
                          key={i}
                          isDark={isDark}
                          cardInfo={{
                            company: card.company,
                            desc: card.desc,
                            date: card.date,
                            companylogo: card.companylogo,
                            role: card.role,
                            descBullets: card.descBullets
                          }}
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
