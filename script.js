const API_KEY = 'API_KEY';

const videoContainer = document.querySelector('#video-container');

async function fetchVideos() {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=machine+learning&type=video&maxResults=10&key=${API_KEY}`
    );

    const data = await response.json();
    displayVideos(data.items);
  } catch (error) {
    console.error('Error fetching videos:', error);
  }
}

function displayVideos(videos) {
  videoContainer.innerHTML = '';

  videos.forEach(video => {
    const card = document.createElement('div');

    card.innerHTML = `
      <div class="aspect-video bg-gray-300 rounded-lg overflow-hidden">
        <img 
          src="${video.snippet.thumbnails.medium.url}" 
          alt="${video.snippet.title}" 
          class="w-full h-full object-cover"
        />
      </div>
      <p class="mt-2 font-medium text-sm">
        ${video.snippet.title}
      </p>
    `;

    videoContainer.appendChild(card);
  });
}


fetchVideos();
