document.addEventListener("DOMContentLoaded", function () {
    const videoItems = document.querySelectorAll(".video-item");

    const modal = document.getElementById("video-modal");
    const closeBtn = document.querySelector(".close-btn");
    const modalVideoContainer = document.querySelector(".modal-video-container");

    // Updated video URLs with correct format
    const videoDataMap = {
        1: {
            url: "https://player.vimeo.com/video/1042994695?h=f5a4757b3c&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "A Culinary Adventure of Australia’s Finest Food and Wine",
            client: "The New Yorker x Tourism Australia x Condé Nast Traveler",
            type: "Docu-style Branded Content",
            credits: "Starring Matt Ortile and Gayle Kabaker <br /> Directed by Dana Kravis <br /> Edited by Noah Engel"
        },
        2: {
            url: "https://player.vimeo.com/video/1042979154?h=cc1f688f02&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "Finding Flavor With Shilpa Uskokovic",
            client: "Homegoods x Bon Appétit",
            type: "Branded Content",
            credits: "Starring Shilpa Uskokovic <br /> Directed by Savannah O’Leary <br /> Edited by Noah Engel"
        },
        3: {
            url: "https://player.vimeo.com/video/1042996484?h=29391ce08f&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "The Trips That Change Us | Episode One: Namibia with Lale Arikoglu",
            client: "Condé Nast Traveler x Wilderness x Women Who Travel",
            type: "Travel Docuseries",
            credits: "Directed by Lauren Tegtmeyer <br /> Edited by Noah Engel"
        },
        4: {
            url: "https://player.vimeo.com/video/1042997416?h=fc2e073670&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "The Trips That Change Us | Episode Two: Botswana with Lale Arikoglu",
            client: "Condé Nast Traveler x Wilderness x Women Who Travel",
            type: "Travel Docuseries",
            credits: "Directed by Lauren Tegtmeyer <br /> Edited by Noah Engel"
        },
        5: {
            url: "https://player.vimeo.com/video/1042998343?h=b3a541d29f&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "The Trips That Change Us | Episode Three: Rwanda with Malavika Bhattacharya",
            client: "Condé Nast Traveler x Wilderness x Women Who Travel",
            type: "Travel Docuseries",
            credits: "Directed by Lauren Tegtmeyer <br /> Edited by Noah Engel"
        },
        6: {
            url: "https://player.vimeo.com/video/1043001828?h=5d52b8779b&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "Adidas | Honoring Black Excellence",
            client: "Adidas x Condé Nast Branded Entertainment",
            type: "Teaser Trailer",
            credits: "Starring Eliya Jackson, Kimberly Shane, Cheresse Thornhill-Goldson, Precious Hannah-King, Ashley Comeaux, Chaniel Smiley, Stephanie Smiley, Dr. Nikole Roebuck, and Wanda Cooper-Jones <br /> Directed by Vashni Korin <br /> Edited by Noah Engel"
        },
        7: {
            url: "https://player.vimeo.com/video/1042999363?h=35e154fbba&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "Running It Forward Teaser",
            client: "Adidas x Condé Nast Branded Entertainment",
            type: "Teaser Trailer",
            credits: "Starring Wanda Cooper-Jones <br /> Directed by Vashni Korin <br /> Edited by Noah Engel"
        },
        8: {
            url: "https://player.vimeo.com/video/1042999566?h=fa67726107&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "Ahead of Their Game Teaser",
            client: "Adidas x Condé Nast Branded Entertainment",
            type: "Teaser Trailer",
            credits: "Starring Chaniel Smiley and Stephanie Smiley <br /> Directed by Vashni Korin <br /> Edited by Noah Engel"
        },
        9: {
            url: "https://player.vimeo.com/video/1042984621?h=0defc0dd69&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "Band Together Teaser",
            client: "Adidas x Condé Nast Branded Entertainment",
            type: "Teaser Trailer",
            credits: "Starring Dr. Nikole Roebuck <br /> Directed by Vashni Korin <br /> Edited by Noah Engel"
        },
        10: {
            url: "https://player.vimeo.com/video/1042985326?h=939fd60dcd&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "Designing the Future Teaser",
            client: "Adidas x Condé Nast Branded Entertainment",
            type: "Teaser Trailer",
            credits: "Starring Eliya Jackson, Kimberly Shane, Cheresse Thornhill-Goldson, Precious Hannah-King, and Ashley Comeaux <br /> Directed by Vashni Korin <br /> Edited by Noah Engel"
        },
        11: {
            url: "https://player.vimeo.com/video/1042987401?h=131a98ab57&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "How a Pro Soccer Player Inspired the Next Generation",
            client: "SELF Magazine x Pfizer",
            type: "Documentary Short",
            credits: "Starring Kim Surio <br /> Directed by Diane Ng <br /> Edited by Noah Engel"
        },
        12: {
            url: "https://player.vimeo.com/video/1046007013?h=1d878e009a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
            title: "Fork in the Road",
            client: "Carbon Table with Support by The Redford Center",
            type: "Feature Documentary - Currently in Post Production",
            credits: "Starring Nick Offerman, Wendell & Mary Berry, Melissa Clark, Marc Murphy, Ayana Elizabeth Johnson, and others. <br /> Directed by Vivian Sorenson and Jonathan Nastasi <br /> Edited by Noah Engel"
        },
        13: {
            url: "https://player.vimeo.com/video/1042981959?h=6a76c19f5d&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "Kendall Jenner’s Drugstore Essentials",
            client: "L’Oreal x Vogue",
            type: "Branded Social Content",
            credits: "Starring Kendall Jenner <br /> Directed by Jordana Koffsky <br /> Edited by Noah Engel"
        },
        14: {
            url: "https://player.vimeo.com/video/1042974252?h=531e0c1978&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "Best of Brunch: What Chefs Cook at Home",
            client: "Bon Appétit x Gold Peak",
            type: "Branded Docu-Style Content",
            credits: "Starring Amiel Stanek and Remi Park <br /> Directed by Brian Pineda <br /> Edited by Noah Engel"
        },
        15: {
            url: "https://player.vimeo.com/video/1042988657?h=980da19fe7&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "More Than a Ribbon | Episode One: Patient",
            client: "SELF Magazine x Verzenio",
            type: "Short Docuseries",
            credits: "Starring Diamond Shammgod <br /> Creative Lead by Mac Joseph <br /> Edited by Noah Engel <br /> Produced by Cousins and Condé Nast Branded Entertainment for Verzenio"
        },
        16: {
            url: "https://player.vimeo.com/video/1042991111?h=a512a50ebd&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "More Than a Ribbon | Episode Two: Doctor",
            client: "SELF Magazine x Verzenio",
            type: "Short Docuseries",
            credits: "Starring Dr. Yolanda Tammaro <br /> Creative Lead by Mac Joseph <br /> Edited by Noah Engel <br /> Produced by Cousins and Condé Nast Branded Entertainment for Verzenio"
        },
        19: {
            url: "https://player.vimeo.com/video/1042992428?h=16acef76fe&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "More Than a Ribbon | Episode Three: Advocate",
            client: "SELF Magazine x Verzenio",
            type: "Short Docuseries",
            credits: "Starring Robin Shine Maddox <br /> Creative Lead by Mac Joseph <br /> Edited by Noah Engel <br /> Produced by Cousins and Condé Nast Branded Entertainment for Verzenio"
        },
        20: {
            url: "https://player.vimeo.com/video/1042987374?h=44fafc270f&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "I Lava NYC",
            client: "Farfetch",
            type: "Commercial",
            credits: "Starring Alton Mason and Marjan Jonkman <br /> Directed by Beau Sam <br /> Edited by Noah Engel"
        },
        21: {
            url: "https://player.vimeo.com/video/1043005249?h=ef7cf56434&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "Getting Ready With Rita Ora",
            client: "Vogue x La Mer",
            type: "Branded Content",
            credits: "Starring Rita Ora <br /> Directed by Jason Bergh <br /> Edited by Noah Engel"
        },
        22: {
            url: "https://player.vimeo.com/video/1043004937?h=c430634e44&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "On the Road With AG Jeans",
            client: "AG Jeans x Vogue",
            type: "Fashion Film",
            credits: "Starring Stella Simona <br /> Directed by Jordana Koffsky <br /> Edited by Noah Engel"
        },
        23: {
            url: "https://player.vimeo.com/video/1043004937?h=c430634e44&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "Surge",
            client: "Intention Media",
            type: "Feature Documentary",
            credits: "Directed & Produced by Hannah Rosenzweig and Wendy Sachs <br /> Edited by Laura Tomaselli <br /> Assistant Editor Noah Engel"
        },
        24: {
            url: "https://player.vimeo.com/video/1042982254?h=9db0696e39&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "You Have Great Skin | Arden Fanning Andrews",
            client: "Clinique x Vogue",
            type: "Branded Social Content",
            credits: "Starring Arden Fanning Andrews <br /> Directed by Jordana Koffsky <br /> Edited by Noah Engel"
        },
        25: {
            url: "https://player.vimeo.com/video/1042982753?h=0c2605ed2a&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "You Have Great Skin | Fiona Stiles",
            client: "Clinique x Vogue",
            type: "Branded Social Content",
            credits: "Starring Fiona Stiles <br /> Directed by Jordana Koffsky <br /> Edited by Noah Engel"
        },
        26: {
            url: "https://player.vimeo.com/video/1042983302?h=957deb2a64&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "You Have Great Skin | Kiana Murden",
            client: "Clinique x Vogue",
            type: "Branded Social Content",
            credits: "Starring Kiana Murden <br /> Directed by Jordana Koffsky <br /> Edited by Noah Engel"
        },
        27: {
            url: "https://player.vimeo.com/video/1043005329?h=656b3ed922&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "Olivia Rodrigo’s Guide to Effortless Skin-Care and Makeup | Beauty Secrets",
            client: "Vogue x Glossier",
            type: "Branded Content",
            credits: "Starring Olivia Rodrigo <br /> Directed by Gabrielle Reich <br /> Edited by Noah Engel"
        },
        28: {
            url: "https://player.vimeo.com/video/1042999769?h=723c5be013&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "Bella Poarch Remembers Her Firsts",
            client: "Teen Vogue x Truth",
            type: "Branded Content",
            credits: "Starring Bella Poarch <br /> Directed by Juliet Lopez <br /> Edited by Noah Engel"
        },
        29: {
            url: "https://player.vimeo.com/video/1042974105?h=8477fa9968&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "Alicia Keys and Swizz Beatz’s Met Gala Date Night",
            client: "Vogue",
            type: "Editorial Content",
            credits: "Starring Alicia Keys and Swizz Beatz <br /> Directed by Tari Wariebi <br /> Edited by Noah Engel"
        },
        30: {
            url: "https://player.vimeo.com/video/1043003074?h=a9a7e83308&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "Essential Holiday Cocktails",
            client: "Teremana x Bon Appétit",
            type: "Branded Content",
            credits: "Starring Chris Morocco <br /> Directed by Dana Kravis <br /> Edited by Noah Engel"
        },
        31: {
            url: "https://player.vimeo.com/video/1043002075?h=b02cd45fe4&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "How to Choose a Tequila for the Holidays",
            client: "Teremana x Bon Appétit",
            type: "Branded Content",
            credits: "Starring André Mack <br /> Directed by Dana Kravis <br /> Edited by Noah Engel"
        },
        32: {
            url: "https://player.vimeo.com/video/1042986750?h=fdaa24a185&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "How to Get Free McDonald’s",
            client: "GQ x McDonald’s",
            type: "Branded Content",
            credits: "Produced by Elan Schoonmaker <br /> Edited by Noah Engel"
        },
        33: {
            url: "https://player.vimeo.com/video/1043006217?h=70fe11c130&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "When Life Gives You Lemons",
            client: "Entenmann’s",
            type: "Commercial",
            credits: "Directed by Noah Engel <br /> Produced by Likeable Media <br /> Edited by Noah Engel"
        },
        34: {
            url: "https://player.vimeo.com/video/1042985783?h=d3210e5697&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "The Lilly Capsule",
            client: "Lilly Pulitzer x Vogue",
            type: "Branded Content",
            credits: "Starring Liv Perez <br /> Creative Lead by Lily Di Costanza <br /> Produced by Asafe Pereira <br /> Edited by Noah Engel"
        },
        35: {
            url: "https://player.vimeo.com/video/1043004620?h=651800f289&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "Welcome to My Closet | Free Assembly",
            client: "Walmart x Vogue",
            type: "Branded Content",
            credits: "Starring Yvonne Wegener <br /> Directed by Jordana Koffsky <br /> Edited by Noah Engel"
        },
        36: {
            url: "https://player.vimeo.com/video/497431701?h=ea1a16d3e1&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "End of Summer",
            client: "Marko MacPherson",
            type: "Fashion Film",
            credits: "Directed by Marko MacPherson <br /> Produced by Area212 <br /> Edited by Noah Engel"
        },
        37: {
            url: "https://player.vimeo.com/video/1042977550?h=296ad44cf6&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "Recipe for Success | Chris Morocco",
            client: "InvescoQQQ x Bon Appétit",
            type: "Social Branded Content",
            credits: "Starring Chris Morocco <br /> Creative Lead by Lauren Tegtmeyer <br /> Edited by Noah Engel"
        },
        38: {
            url: "https://player.vimeo.com/video/1042978477?h=2795ea926f&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "Recipes for Success | Inés Anguiano",
            client: "InvescoQQQ x Bon Appétit",
            type: "Social Branded Content",
            credits: "Starring Chris Morocco <br /> Creative Lead by Lauren Tegtmeyer <br /> Edited by Noah Engel"
        },
        39: {
            url: "https://player.vimeo.com/video/1044119386?h=aea5c447c4&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "Recipes for Success | Shilpa Uskokovic",
            client: "InvescoQQQ x Bon Appétit",
            type: "Social Branded Content",
            credits: "Starring Shilpa Uskokovic <br /> Creative Lead by Lauren Tegtmeyer <br /> Edited by Noah Engel"
        },
        40: {
            url: "https://player.vimeo.com/video/1044119430?h=b9be27fe22&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "Father’s Day Grilling With Chris Morocco",
            client: "Dietz and Watson x Bon Appétit",
            type: "Social Branded Content",
            credits: "Starring Chris Morocco <br /> Creative Lead by Dana Kravis <br /> Edited by Noah Engel"
        },
        41: {
            url: "https://player.vimeo.com/video/1044119457?h=2fb40ca9e8&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "Super Bowl | Tailgate Team Up",
            client: "MGM Rewards x Bon Appétit",
            type: "Social Branded Content",
            credits: "Starring Kendra Vaculin <br /> Creative Lead by Lauren Tegtmeyer <br /> Edited by Noah Engel"
        },
        42: {
            url: "https://player.vimeo.com/video/1042981052?h=aea4efb6fe&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "Fresh Holiday Recipes: Mini Quiche",
            client: "Shamrock Farms x Bon Appétit",
            type: "Hand and Pans Branded Content",
            credits: "Directed by Eliana Kaufman <br /> Edited by Noah Engel"
        },
        43: {
            url: "https://player.vimeo.com/video/1042987044?h=2ac17e872f&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "Moments of Serenity With Janel Parrish",
            client: "Vanity Fair x Xeomin",
            type: "Branded Content",
            credits: "Starring Janel Parrish <br /> Directed by Mac Joseph <br /> Edited by Noah Engel"
        },
        44: {
            url: "https://player.vimeo.com/video/1042986786?h=3c2fa1e0b0&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            title: "Malika Haqq’s Morning Routine",
            client: "Allure x Xeomin",
            type: "Branded Content",
            credits: "Starring Malika Haqq <br /> Directed by Mac Joseph <br /> Edited by Noah Engel"
        }
    };

    videoItems.forEach(item => {
        const videoId = item.dataset.video;
        const playButton = item.querySelector(".play-btn");

        addDataToItem(videoId);

        playButton.addEventListener("click", function () {
            const videoEmbed = createVideoEmbed(videoId);
            let { title, client, type, credits } = createVideoDescriptionText(videoId);
            const titleParagraph = document.getElementById("title");
            const clientParagraph = document.getElementById("client");
            const typeParagraph = document.getElementById("type");
            const creditsParagraph = document.getElementById("credits");

            // Video update
            modalVideoContainer.innerHTML = videoEmbed;
            modal.style.display = "flex"; // Show modal

            // Description update
            titleParagraph.innerHTML = title;
            clientParagraph.innerHTML = client;
            typeParagraph.innerHTML = type;
            creditsParagraph.innerHTML = credits;
        });
    });

    function addDataToItem(videoId) {
        const title = document.querySelector(`[data-description="${videoId}"]`);
        const client = document.querySelector(`[data-client="${videoId}"]`);

        title.innerHTML = videoDataMap[videoId].title;
        client.innerHTML = videoDataMap[videoId].client;
    }

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
        const videoUrl = videoDataMap[videoId].url;
        if (videoUrl) {
            return `
                <iframe src="${videoUrl}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            `;
        } else {
            console.error("Video URL not found for videoId:", videoId);
            return `<p>Sorry, we’re having a little trouble loading the video.</p>`;
        }
    }

    function createVideoDescriptionText(videoId) {
        const title = videoDataMap[videoId].title;
        const client = videoDataMap[videoId].client;
        const type = videoDataMap[videoId].type;
        const credits = videoDataMap[videoId].credits;
        return { title, client, type, credits }
    }
});
