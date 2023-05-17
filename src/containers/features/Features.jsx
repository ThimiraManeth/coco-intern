import React from 'react';
import './features.css';
import Image1 from '../../assets/4.png';
import Image2 from '../../assets/stat.jpg';

const Features = () => {
  return (
    <div className="literature-survey-topic" id="Features">
      <h2 className="gradient__text">Literature Survey</h2>
      <div className="literature-survey-container">
        <div className="images-container">
          <img src={Image1} alt="Image 1" />
          <img src={Image2} alt="Image 2" />
        </div>
        <div className="paragraph-container">
          <p className="larger-font">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in nisi at sapien mattis bibendum at at nunc. Curabitur sit amet ligula vel lorem gravida vestibulum. Vestibulum non urna eget mauris posuere malesuada. Proin et metus felis. Ut quis mauris at felis efficitur mattis at a mi. Proin vitae neque eleifend, rhoncus urna et, aliquam lorem. Sed sollicitudin lectus a ligula aliquet, eget vulputate risus semper. Aliquam vitae odio hendrerit, semper erat vitae, aliquam orci. Donec tempus euismod purus, vitae malesuada magna consectetur vel.
          </p>

          <p className="larger-font">
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In dictum mauris a venenatis auctor. Nulla facilisi. Fusce nec risus lacus. Proin consequat elit eget mi sagittis, sed pellentesque justo rhoncus. Aenean rhoncus velit nec leo fringilla iaculis. Ut accumsan neque a tortor iaculis, ac bibendum eros condimentum. Aenean et faucibus justo, vitae finibus sapien.
          </p>
          <div className="references-container">
            <h4 className="smaller-font">References:</h4>
            <ul className="references-list">
              <li className="smaller-font">R. Miriyagalla, Y. Samarawickrama, D. Rathnaweera, L. Liyanage, D. Kasthurirathna, D. Nawinna, and J. L. Wijekoon, “On the effectiveness of using machine learning and Gaussian Plume model for plant disease dispersion prediction and simulation,” International Conference on Advancements in Computing, ICAC 2019,</li>
              <li className="smaller-font">A. Chandy, “Pest infestation identification in coconut trees using deep learning,” Journal of Artificial Intelligence and Capsule Networks, vol. 01, no. 01, pp. 10–18, 2019.</li>
              <li className="smaller-font">S. Sladojevic, M. Arsenovic, A. Anderla, D. Culibrk, and D. Stefanovic, “Deep Neural Networks based recognition of plant diseases by Leaf Image Classification,” Computational Intelligence and Neuroscience, vol. 2016, pp. 1–11, 2016.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}




export default Features;