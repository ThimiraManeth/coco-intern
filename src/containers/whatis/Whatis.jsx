import React from 'react';
import { Features } from '../../components';
import './whatis.css';


const Whatis = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="Whatis">
      <div className="gpt3__whatgpt3-features">
        <Features title="Research Gap" text="Following areas are the research gaps found in most of the recent researches." />
      </div>
      {/* <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Exploore The Library</p>
      </div> */}
      <div className="gpt3__whatgpt3-container">
      <Features title="Identification & classification" text="There are no records of a smart solution for coconut pest and disease identification and classification in Sri Lanka. Symptoms of coconut disorders show similar characteristic appearance and therefore it is a challenge to provide a solution." />
      <Features title="Severity assessment" text="Smart solution for identification of some coconut pest and diseases is reported in India but assessment on severity of disease conditon and progression level of pest damage is not attempted." />
      <Features title="Information sharing" text="Real time communication system to speed up information sharing between coconut growers, extension personals and researchers has been identified as priority need for effective pest and disease control.

" />
      
      
      
      </div>
    </div>
  )
}

export default Whatis