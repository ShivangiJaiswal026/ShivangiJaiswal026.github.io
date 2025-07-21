import React, {useState} from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skill, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <li
                key={index}
                className="software-skill-inline"
                name={skill.skillName}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <i
                  className={skill.fontAwesomeClassname}
                  style={{color: isHovered ? skill.color : undefined}}
                ></i>
                <p style={{color: isHovered ? skill.color : undefined}}>
                  {skill.skillName}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
