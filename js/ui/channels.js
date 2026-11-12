
export function displayChannels(channels) {
    const list = document.querySelector("#channels-list");

    list.innerHTML = "";

    channels.forEach(channel => {
        const button = document.createElement("button");

        button.className =
            "w-full flex items-center gap-3 p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-left";

        const logo = document.createElement("img");
        logo.src = channel.logo;
        logo.alt = channel.name;
        logo.className = "w-10 h-10 rounded";

        const title = document.createElement("span");
        title.textContent =
            `${channel.channelNumber} — ${channel.name}`;

        button.appendChild(logo);
        button.appendChild(title);
        list.appendChild(button);
    });
}
