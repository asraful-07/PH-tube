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

const cardDemo = {
  
}

// videos section code
const displayVideos = (videos) => {
  const videoContainer = document.getElementById("video-container");
  videos.forEach((video) => {
    console.log(video);
    const card = document.createElement("div");
    card.classList = "card card-compact";
    card.innerHTML = `
     <figure class="h-[200px]">
    <img
      src=${video.thumbnail}
      class="h-full w-full object-cover"
      alt="Shoes" />
  </figure>
  <div class="px-0 py-2 flex gap-2">
    <div>
    <img src="" />
    </div>
     <div class="space-y-2">
     <h4 class="font-bold text-lg">Building a Winning UX Strategy Using the Kano Model</h4>
     <h3>Awlad Hossain</h3>
     <p>91K views</p>
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
    console.log(item);
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;
    categoriesContainer.appendChild(button);
  });
};

loadVideos();
loadCategories();
