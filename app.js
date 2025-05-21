window.onload = function () {
  fetch("projects.json")
    .then((response) => response.json())
    .then((data) => {
      data.game_projects.map((project, index) => {
        let url = "";
        if (project.photo_type == "image") {
          url = `<img class="project-image" src="${project.photo_url}" alt="${project.name}"></img>`;
        } else if (project.photo_type == "video") {
          url = `<iframe class="youtube-video" src="${project.video_url}" title="${project.name}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
        }
        if (index % 2 === 0) {
          document.getElementById(
            "game-projects-container"
          ).innerHTML += `<div class="project left">
              
               
                <div class="project-bio">
                <h3>${project.name}</h3>
                <p>${project.teaser}</p>
               <button onclick="window.project_${index}_dialog.showModal()" class="learn-more">Learn more about ${project.name}</button></div>
                 </div>
                 
                 <dialog id="project_${index}_dialog" class="dialog">
                <button onclick="window.project_${index}_dialog.close()" class="close-button" id="close-${index}">X</button>
                 <div class="dialog-content">
                 ${url}
                    <h2>${project.name}</h2>
                    
                    <p>${project.description}</p>
                    <a href="${project.button_url}" target="_blank" class="button">${project.button_text}</a>
                 
                
                    </div>
                </dialog>
                    </div>`;
        } else {
          document.getElementById(
            "game-projects-container"
          ).innerHTML += `<div class="project right">
          
           <div class="project-bio">
            <h4>${project.name}</h4>
            <p>${project.description}</p>
<button onclick="window.project_${index}_dialog.showModal()" class="learn-more">Learn more about ${project.name}</button></div>
                 </div>
                 
                 <dialog id="project_${index}_dialog" class="dialog">
                <button onclick="window.project_${index}_dialog.close()" class="close-button" id="close-${index}">X</button>
                 <div class="dialog-content">
                 ${url}
                    <h2>${project.name}</h2>
                    
                    <p>${project.description}</p>
                    <a href="${project.button_url}" target="_blank" class="button">${project.button_text}</a>
                 
                 
                
                    </div>
                </dialog>
                    </div>`;
        }
      });
    })
    .catch((error) => console.error("Error fetching JSON:", error));
};
