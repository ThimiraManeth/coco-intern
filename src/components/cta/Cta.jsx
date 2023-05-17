import React from 'react';
import './cta.css';
import architecture from '../../assets/architecture.jpg';
const Cta = () => {
  return (
    <div className="coco__cta" id="Cta">
      <h1 className="gradient__text">Methodology</h1>
      <div className="coco-cta-container">
        <div className="coco__cta-image">
          <img src={architecture} alt="architecture" />
        </div>

        <div className='coco-para'> The proposed pest and disease Surveillance system consists of 4 main components. They are;<p>



          <ul>
            <li>1)WCLWD and its symptom severity identification</li>
            <li>2)CCI Identification and progression level determination</li>
            <li>3)Deficiency Identification (Mg deficiency and Leaf Scorch Decline)</li>
            <li>4)Water resource identification</li>
            <li>5)Crowdsourcing for information sharing</li>
          </ul>
          Fig 4 illustrates the overall system diagram of the proposed solution which was intended to provide a smart
          approach for stakeholders, researchers, and Coconut Development Officers (CDOs) to detect the coconut diseases and pest infestations that may affect the coconut industry. As shown in the diagram, the registered users of the system can capture or upload the images which are suspicious. The images are sent to the Amazon Web Services (AWS) backend server where the flask server is deployed. These images are processed in the flask server by the designed DCNN models for disease identification. If WCLWD is found, the symptom severity will be determined using CNN models. Simultaneously, if CCI is identified, the images will go through the Mask-R-CNN model to determine the progression level while the number of caterpillars are extracted using the YOLOv5 object detection algorithm. Images will be classified using the CNN models of Mg deficiency and LSD at the same time.
        </p>



          <p>
            Once the system identifies that the leaves are infected, then the response will be captured by the crowdsourcing platform. The Google Map will be updated with the real-time locations (latitude and longitude) of the infected palms. In addition, the system will automatically send notifications to the farmers and other stakeholders who are at the risk of infection.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Cta