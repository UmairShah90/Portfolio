import React from 'react';
import "../../index.css";
import './skills.css'
import {FaHtml5,FaCss3,FaBootstrap,FaReact,FaSass,FaGithubSquare} from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di'
import { SiNextDotJs, SiMaterialUi,SiRedux,SiMongodb,SiFirebase } from 'react-icons/si'



function Skills() {
    return (
       <section
       data-aos="fade-right"
       className="skills-container"
       id="skills"
       name="skills"
       >
       <h1 className="heading">What i do! 
       <span role="img" aria-label="Victory">
            </span>  ✌️
       </h1>

       <div className="techs">
      <li>
       <FaHtml5 size={70} color='orange' /> 
      <p>HTML5</p>
      </li>

      <li>
      <FaCss3 size={70} color='lightblue'/>
          <p>CSS3</p>
      </li>
      <li>
      <FaBootstrap size={70} color='purple'/>
          <p>Bootstrap</p>
        </li>

        <li>
        <FaSass size={70} color='lightpink'/>
          <p>SASS</p>
        </li>

        <li>
        <DiJavascript1 size={70} color='yellow'/>
          <p>JavaScript</p>
        </li>
        <li>
        <FaReact size={70} color='blue'/>
          <p>React</p>
        </li>

        <li>
        <SiRedux size={70} color='blue'/>
          <p>Redux</p>
        </li>

        <li>
        <SiMaterialUi size={70} color='lightblue'/>
          <p>Material UI</p>
        </li>

        <li>
        <SiNextDotJs size={70} color='black'/>
          <p>NextJS</p>
        </li>

        <li>
        <SiMongodb size={70} color='lightgreen'/>
          <p>MongoDB</p>
        </li>

        <li>
        <SiFirebase size={70} color='yellow'/>
          <p>Firebase</p>
        </li>
        
        <li>
        <FaGithubSquare size={70} color='black'/>
          <p>GitHub</p>
        </li>
        
       </div>



       </section>
    )
}

export default Skills;
