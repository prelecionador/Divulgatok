const videos = [
  {
    id: "7526314677521927429",
    url: "https://www.tiktok.com/@morandonasruas/video/7526314677521927429"
  },
  {
    id: "7526183973043686712",
    url: "https://www.tiktok.com/@morandonasruas/video/7526183973043686712"
  },
  {
    id: "7523218475855154488",
    url: "https://www.tiktok.com/@morandonasruas/video/7523218475855154488"
  },
  {
    id: "7526332241111305477",
    url: "https://www.tiktok.com/@ju.wss_/video/7526332241111305477"
  }
];

// função para embaralhar o array
videos.sort(() => Math.random() - 0.5);

let index = 0;

function renderVideo(video) {
  const container = document.getElementById("videoContainer");
  container.innerHTML = `
  <blockquote class="tiktok-embed"
    cite="${video.url}"
    data-video-id="${video.id}"
    data-embed-from="oembed"
    style="max-width: 605px; min-width: 325px;">
    <section>
      <a target="_blank" title="@morandonasruas"
         href="https://www.tiktok.com/@morandonasruas?refer=embed">
        @morandonasruas
      </a>
    </section>
  </blockquote>
  `;
  if (window.tiktokEmbedLoaded) {
    window.tiktokEmbedLoaded = false;
  }
  const script = document.createElement("script");
  script.src = "https://www.tiktok.com/embed.js";
  script.async = true;
  document.body.appendChild(script);
}

function trocarVideo() {
  index = (index + 1) % videos.length;
  renderVideo(videos[index]);
}

renderVideo(videos[index]);
