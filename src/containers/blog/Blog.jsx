import React from 'react';
import './blog.css';

const Blog = () => {
  return (
    <div class="blog-container"id="Blog">
  <div class="left-column">
    <h1 className="gradient__text">Research Problem & Solution</h1>
    <h2>Proposed Problem</h2>
    <h3>How to classify pest and diseases in coconut and provide surveillance to people in real time?</h3>
    <p>Weligama Coconut Leaf Wilt Disease (WCLWD) and Coconut Caterpillar Infestation (CCI) are the most threatening disease and pest of coconut in Sri Lanka. Due to WCLWD about 300,000 palms were removed and an estimated 60,000 palms needed to be identified for removal. An economical yield loss will result if more than 30% defoliation is caused due to CCI. For efficient management of WCLWD and CCI, identification at an early stage and effective communication of growers and professionals is needed</p>
   

    <div class="youtube-video">
      <iframe
      
                src="https://youtu.be/3myik4zPU2s"
                title="YouTube video"
                allowFullScreen
              ></iframe>
    </div>

    <h2>Proposed Solution</h2>
    <p>Coco Remedy uses mobile and web-based software to manage Weligama Coconut Leaf Wilt Disease (WCLWD) and Coconut Caterpillar Infestation (CCI), which devastate coconut cultivation. In WCLWD, yellowing of leaves which also associates with Magnesium deficiency makes it difficult to distinguish the diseased palms accurately. Similarly, the dried appearance of leaves due to CCI is difficult to distinguish from leaf scorching. Therefore, Deep Learning techniques like Convolutional Neural Networks (CNN) for feature extraction will be used to identify the diseases accurately. Coconut growers, Estate managers of plantation companies, Researches of Coconut Research Institute (CRISL), Coconut Development Officers (CDOs) of Coconut
       Cultivation Board (CCB), and the general public will be able to identify diseased palm accurately by capturing a photograph of leaf with symptoms. The location will be extracted by Geo Tags in order to gather anonymous data using OpenWeatherMapAPI for future predictions. The severity of WCLWD is calculated based on the multiple symptoms using CNN. Since caterpillars’ associates with the damaged leaves in CCI, counts of caterpillars are taken using OpenCV / YOLO object detection while the infected area is calculated using MASK R-CNN. Using the above-mentioned parameters progression level is determined. Real-time notifications are sent whenever an infected tree is found. Details of the infected trees, location and severity records enable the researches and CDOs to take remedial actions. Infected areas and danger zones which might be affected in the future can visualized through Google mapping technologies. Nearby users are notified to take precautions before their lands get affected.</p>
    
  </div>
</div>

  )
}

export default Blog