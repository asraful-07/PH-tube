// button section code
const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.error(error));
};

// videos section code
const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((error) => console.error(error));
};
// cell btn
const removeActiveClass = () => {
  const buttons = document.getElementsByClassName("category-btn");
  console.log(buttons);
  for (let btn of buttons) {
    btn.classList.remove("active");
  }
};

const loadCategoryVideos = (id) => {
  // alert (id);
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
  .then(res => res.json())
  .then((data) => {
    //sobaike active class remove korao
    removeActiveClass();

    //id er class k active korao
    const activeBtn = document.getElementById(`btn-${id}`);
    activeBtn.classList.add("active");
    displayVideos(data.category);
  })
  .catch((error) => console.error(error));
}

// videos section code
const displayVideos = (videos) => {
  const videoContainer = document.getElementById("video-container");
  videoContainer.innerHTML = "";
  
  if(videos.length == 0){
    videoContainer.classList.remove("grid");
    videoContainer.innerHTML = `<div class="min-h-[300px] gap-6 flex flex-col items-center justify-center">
    <img src="images/Icon.png" alt="">
     <h2 class="text-center text-xl font-bold"> No Content Here in this Categery </h2> 
    </div>`
  }
  else{
    videoContainer.classList.add("grid");
  }

  videos.forEach((video) => {
    console.log(video);
    const card = document.createElement("div");
    card.classList = "card card-compact";
    card.innerHTML = `
     <figure class="h-[200px] relative">
    <img
      src=${video.thumbnail}
      class="h-full w-full object-cover"
      alt="Shoes" />
     ${
        video.others.posted_date?.length == 0 ? " " : ` <span class="absolute right-2 bottom-2 bg-black text-white rounded p-2">${video.others.posted_date}</span>`
     }
  </figure>
  <div class="px-0 py-2 flex gap-2">  
    <img class="w-10 h-10 object-cover rounded-full" src="${video.authors[0].profile_picture}" />
     <div class="space-y-2">
       <h2 class="font-bold">${video.title}</h2>
       <div class="flex items-center gap-1">
       <p class="text-gray-400">${video.authors[0].profile_name}</p>
       ${video.authors[0].verified == true
        ? `<img class="w-5" src="https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png"/>` : ""
       }
       </div>
    </div>
  </div>
    `;
    videoContainer.appendChild(card);
  });
};


// button section code
const displayCategories = (categories) => {
  const categoriesContainer = document.getElementById("categories-container");
  categories.forEach((item) => {
    // console.log(item);
    const buttonContainer = document.createElement("div");
    buttonContainer.innerHTML = `
    <button id="btn-${item.category_id}" onclick="loadCategoryVideos(${item.category_id})" class="btn category-btn">
    ${item.category}</button>
    `;
    categoriesContainer.appendChild(buttonContainer);
  });
};

loadVideos();
loadCategories();
