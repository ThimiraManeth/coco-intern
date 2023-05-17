import React from 'react';
import './possibility.css';
import { Features } from '../../components';

const featuresdata = [
  {
    title:'Classification of Weligama Coconut Leaf Wilt Disease ',
    text: 'The first objective is to classify Weligama Coconut Leaf Wilt Disease (WCLWD) to provide a solution for distinguishing WCLWD uneven yellowing from other diseases. In addition, the symptom severity of WCLWD was determined using a Convolutional Neural Network to identify the diseases symptom severity level to inform the Coconut Research Institute of Sri Lanka (CRISL) to proceed with the necessary precautions to reduce the dispersion rate'
  },
  {
    title:'Classification of Coconut Caterpillar Infestation ',
    text: 'The second objective of this study is to develop a solution to identify the coconut caterpillar infestation (CCI) while differentiating its symptoms from other conditions. The severity of the infestation will also be determined at the same time, and appropriate authorities will be notified in order to expedite the application of control measures to prevent possible outbreak of the pest.'
  },
  {
    title:'Differentiating Magnesium Deficiency, Coconut Leaf Scorching, and Identify Water Resources ',
    text: 'The third objective is identifying the pattern of yellowing associated with Mg deficiency, identifying LSD on coconut leaves, and check whether there is a water resource within 100m from the farmers to facilitate constant monitoring to prevent caterpillar outbreaks'
  },
  {
    title:'Crowdsourcing for information sharing ',
    text: 'The fourth objective is to provide a convenient approach to the farmers and industry professionals to utilize the optimal use of the platform by visualizing the disease dispersions and notifying the stakeholders regarding the dispersions with their severity levels.'
  },
]

const Possibility = () => {
  return (
    <div className="gpt3__features section__padding" id="possibility">
    <div className="gpt3__features-header">
     <h1 className="gradient__text">Research Objectives</h1>
     
    </div>
    <div className="gpt3__features-container">
     {featuresdata.map((item,index) =>(
       <Features title={item.title} text={item.text} key={item.title + index } />
 
     ))}
    </div>
 
    </div>
   )
 }
export default Possibility