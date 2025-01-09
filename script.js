document.addEventListener("DOMContentLoaded", function () {
    const videoItems = document.querySelectorAll(".video-item");
    const modal = document.getElementById("video-modal");
    const closeBtn = document.querySelector(".close-btn");
    const modalVideoContainer = document.querySelector(".modal-video-container");

    // Updated video URLs with correct format
    const videoUrls = {
        1: "https://player.vimeo.com/video/1042994695?h=f5a4757b3c&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        2: "https://player.vimeo.com/video/1042979154?h=cc1f688f02&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        3: "https://player.vimeo.com/video/1042996484?h=29391ce08f&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        4: "https://player.vimeo.com/video/1042997416?h=fc2e073670&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        5: "https://player.vimeo.com/video/1042998343?h=b3a541d29f&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        6: "https://player.vimeo.com/video/1043001828?h=5d52b8779b&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        7: "https://player.vimeo.com/video/1042999363?h=35e154fbba&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        8: "https://player.vimeo.com/video/1042999566?h=fa67726107&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        9: "https://player.vimeo.com/video/1042984621?h=0defc0dd69&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        10: "https://player.vimeo.com/video/1042985326?h=939fd60dcd&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        11: "https://player.vimeo.com/video/1042987401?h=131a98ab57&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        12: "https://player.vimeo.com/video/1042981959?h=6a76c19f5d&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        13: "https://player.vimeo.com/video/1042974252?h=531e0c1978&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        14: "https://player.vimeo.com/video/1042988657?h=980da19fe7&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        15: "https://player.vimeo.com/video/1042991111?h=a512a50ebd&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        16: "https://player.vimeo.com/video/1042992428?h=16acef76fe&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        17: "https://player.vimeo.com/video/1042987374?h=44fafc270f&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        18: "https://player.vimeo.com/video/1043005249?h=ef7cf56434&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        19: "https://player.vimeo.com/video/1043004937?h=c430634e44&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        20: "https://player.vimeo.com/video/1042982254?h=9db0696e39&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        21: "https://player.vimeo.com/video/1042982753?h=0c2605ed2a&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        22: "https://player.vimeo.com/video/1042983302?h=957deb2a64&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        23: "https://player.vimeo.com/video/1043005329?h=656b3ed922&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        24: "https://player.vimeo.com/video/1042999769?h=723c5be013&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        25: "https://player.vimeo.com/video/1042974105?h=8477fa9968&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        26: "https://player.vimeo.com/video/1043003074?h=a9a7e83308&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        27: "https://player.vimeo.com/video/1043002075?h=b02cd45fe4&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        28: "https://player.vimeo.com/video/1042986750?h=fdaa24a185&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        29: "https://player.vimeo.com/video/1043006217?h=70fe11c130&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        30: "https://player.vimeo.com/video/1042985783?h=d3210e5697&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        31: "https://player.vimeo.com/video/1043004620?h=651800f289&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        32: "https://player.vimeo.com/video/497431701?h=ea1a16d3e1&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        33: "https://player.vimeo.com/video/1042977550?h=296ad44cf6&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        34: "https://player.vimeo.com/video/1042978477?h=2795ea926f&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        35: "https://player.vimeo.com/video/1044119386?h=aea5c447c4&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        36: "https://player.vimeo.com/video/1044119430?h=b9be27fe22&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        37: "https://player.vimeo.com/video/1044119457?h=2fb40ca9e8&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        38: "https://player.vimeo.com/video/1042981052?h=aea4efb6fe&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        39: "https://player.vimeo.com/video/1042987044?h=2ac17e872f&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        40: "https://player.vimeo.com/video/1042986786?h=3c2fa1e0b0&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
    };

    // Add event listeners to each video item
    videoItems.forEach(item => {
        const playButton = item.querySelector(".play-btn");

        playButton.addEventListener("click", function () {
            const videoId = item.dataset.video;
            const videoEmbed = createVideoEmbed(videoId);
            modalVideoContainer.innerHTML = videoEmbed;
            modal.style.display = "flex"; // Show modal
        });
    });

    // Close button functionality
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none"; // Hide modal
        modalVideoContainer.innerHTML = ''; // Clear video
    });

    // Close modal if clicked outside of modal content
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none"; // Hide modal
            modalVideoContainer.innerHTML = ''; // Clear video
        }
    });

    // Create video embed HTML dynamically
    function createVideoEmbed(videoId) {
        const videoUrl = videoUrls[videoId];
        if (videoUrl) {
            return `
                <iframe src="${videoUrl}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            `;
        } else {
            console.error("Video URL not found for videoId:", videoId);
            return `<p>Sorry, we’re having a little trouble loading the video.</p>`;
        }
    }
});
