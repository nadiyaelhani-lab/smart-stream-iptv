
import { getChannels } from "./services/api.js";
import { displayChannels } from "./ui/channels.js";
import { showPreview } from "./ui/preview.js";

const search = document.querySelector("#search");

async function initApp() {
    document.querySelector("#loading").classList.remove("hidden");

    try {
        const channels = await getChannels();
        console.log(channels);

        displayChannels(channels, showPreview);

        search.addEventListener("input", function () {
            
            const text = search.value.toLowerCase().trim();

            const filtered = channels.filter(channel =>
                channel.name.toLowerCase().includes(text) ||
                channel.channelNumber.includes(text) ||
                channel.category.toLowerCase().includes(text)

            );

            displayChannels(filtered, showPreview);
              if (filtered.length === 1) {
        showPreview(filtered[0]);
        }
        });

    } catch (error) {
    console.error("Erreur :", error.message);

    const errorMessage = document.querySelector("#error");
    errorMessage.textContent = "Impossible de charger les chaînes TV.";
    errorMessage.classList.remove("hidden");

    } finally {
        document.querySelector("#loading").classList.add("hidden");
    }
}

initApp();
