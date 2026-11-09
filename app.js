// ========================================
// GOLDEN DIGITAL — MAIN JAVASCRIPT
// Founded by Godwin Jonathan
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    // MOBILE NAVIGATION
    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", function () {
            const open = mainNav.classList.toggle("open");
            menuToggle.setAttribute("aria-expanded", String(open));
        });

        mainNav.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                mainNav.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    // COPYRIGHT YEAR
    const year = document.getElementById("year");
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // ORIGINAL MARKETING STUDIO
    const generateBtn = document.getElementById("generateBtn");
    const resultBox = document.getElementById("resultBox");
    const copyBtn = document.getElementById("copyBtn");

    if (generateBtn && resultBox && copyBtn) {

        generateBtn.addEventListener("click", function () {

            const name = document.getElementById("businessName").value.trim();
            const type = document.getElementById("productType").value;
            const audience = document.getElementById("audience").value.trim();
            const details = document.getElementById("details").value.trim();

            if (!name || !details) {
                resultBox.textContent =
                    "Please enter your business/product name and what makes it special.";
                copyBtn.hidden = true;
                return;
            }

            const offer = type === "service"
                ? "service"
                : type === "event"
                    ? "offer"
                    : "product";

            const audienceLine = audience
                ? "Made for " + audience + ". "
                : "";

            const draft =
                name.toUpperCase() +
                " — " +
                (offer === "offer"
                    ? "Something worth looking forward to!"
                    : "A smarter choice for you!") +
                "\n\n" +
                audienceLine +
                details +
                "\n\nInterested? Send us a message to learn more or place an order." +
                "\n\n#" +
                name.replace(/[^a-z0-9]/gi, "") +
                " #ShopSmall #DiscoverLocal";

            resultBox.textContent = draft;
            copyBtn.hidden = false;
        });

        copyBtn.addEventListener("click", async function () {
            try {
                await navigator.clipboard.writeText(resultBox.textContent);
                copyBtn.textContent = "Copied!";

                setTimeout(function () {
                    copyBtn.textContent = "Copy draft";
                }, 1600);

            } catch (error) {
                copyBtn.textContent = "Select and copy the text above";
            }
        });
    }

    // ========================================
    // GOLDEN AI CREATIVE DIRECTOR
    // Development Version 0.2
    // ========================================

    const productName = document.getElementById("goldName");
    const productDescription = document.getElementById("goldDescription");
    const productPrice = document.getElementById("goldPrice");
    const productContact = document.getElementById("goldContact");
    const productPhoto = document.getElementById("goldPhoto");
    const videoCard = document.querySelector(".video-card");

    if (!videoCard || !productName || !productDescription) {
        return;
    }

    const director = document.createElement("div");

    director.id = "goldCreativeDirector";

    director.style.cssText = `
        margin-top:30px;
        padding:22px;
        background:#242016;
        border:1px solid #d4af37;
        border-radius:14px;
        color:white;
    `;

    director.innerHTML = `
        <h3 style="color:#e6c45c;">
            ✦ GOLDEN AI CREATIVE DIRECTOR
        </h3>

        <p>
            Let GOLDEN plan how your product should be advertised.
        </p>

        <button type="button" id="goldDirect"
            style="width:100%;padding:15px;background:#d4af37;
            color:#171717;border:0;border-radius:8px;
            font-weight:bold;cursor:pointer;">
            DIRECT MY ADVERTISEMENT
        </button>

        <div id="goldDirectorResult"
            style="margin-top:22px;line-height:1.7;">
        </div>
    `;

    videoCard.appendChild(director);

    const directButton = document.getElementById("goldDirect");
    const directorResult = document.getElementById("goldDirectorResult");

    function escapeHTML(value) {
        return String(value).replace(/[&<>"']/g, function (character) {
            const entities = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            };

            return entities[character];
        });
    }

    directButton.addEventListener("click", function () {

        const name = productName.value.trim();
        const description = productDescription.value.trim();
        const price = productPrice ? productPrice.value.trim() : "";
        const contact = productContact ? productContact.value.trim() : "";
        const hasPhoto = productPhoto && productPhoto.files.length > 0;

        if (!name || !description) {
            directorResult.textContent =
                "Please enter your product name and description first.";
            return;
        }

        // CREATIVE DIRECTION
        const words = description.toLowerCase();

        let style = "Lifestyle product advertisement";
        let presenter = "Product-focused visual presentation";
        let music = "Modern, uplifting commercial soundtrack";

        if (
            words.includes("luxury") ||
            words.includes("premium") ||
            words.includes("exclusive")
        ) {
            style = "Luxury cinematic advertisement";
            presenter = "Elegant virtual brand presenter";
            music = "Elegant cinematic instrumental";
        }

        else if (
            words.includes("cheap") ||
            words.includes("discount") ||
            words.includes("sale") ||
            words.includes("offer")
        ) {
            style = "Fast-paced promotional sales advertisement";
            presenter = "Energetic virtual sales presenter";
            music = "Upbeat promotional music";
        }

        else if (
            words.includes("food") ||
            words.includes("delicious") ||
            words.includes("taste")
        ) {
            style = "Food demonstration and lifestyle advertisement";
            presenter = "Friendly food presenter";
            music = "Warm, lively background music";
        }

        else if (
            words.includes("fashion") ||
            words.includes("clothing") ||
            words.includes("dress") ||
            words.includes("style")
        ) {
            style = "Fashion showcase advertisement";
            presenter = "Fashion model or virtual presenter";
            music = "Trendy fashion soundtrack";
        }

        const script =
            "Looking for something special? Meet " + name + ". " +
            description + " " +
            (price ? "Available for " + price + ". " : "") +
            "Discover the difference today. " +
            (contact ? "Contact us at " + contact + " to learn more." : "Contact the business today to learn more.");

        const scenes = [
            "Opening scene: Introduce the product with an attractive visual.",
            "Product reveal: Show the product clearly and highlight its appearance.",
            "Feature demonstration: Present the main benefits of the product.",
            "Lifestyle scene: Show how the product could fit into everyday life.",
            "Offer presentation: Display the product name and price.",
            "Closing scene: Display the contact information and call to action."
        ];

        directorResult.innerHTML = `
            <h3 style="color:#e6c45c;">
                YOUR ADVERTISING PLAN
            </h3>

            <p><b>Product:</b> ${escapeHTML(name)}</p>

            <p><b>Photo uploaded:</b>
            ${hasPhoto ? "Yes" : "No"}</p>

            <p><b>Advertising style:</b>
            ${escapeHTML(style)}</p>

            <p><b>Suggested presenter:</b>
            ${escapeHTML(presenter)}</p>

            <p><b>Background music:</b>
            ${escapeHTML(music)}</p>

            <h4 style="color:#e6c45c;">
                PROFESSIONAL NARRATION
            </h4>

            <p>${escapeHTML(script)}</p>

            <h4 style="color:#e6c45c;">
                VIDEO STORYBOARD
            </h4>

            ${scenes.map(function (scene) {
                return "<p>🎬 " + escapeHTML(scene) + "</p>";
            }).join("")}

            <p style="color:#e6c45c;margin-top:20px;">
                ✦ Creative direction prepared by GOLDEN.
            </p>
        `;

    });

});
