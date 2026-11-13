
export function displayChannels(channels, onSelect) {
    const list = document.querySelector("#channels-list");

    list.innerHTML = "";

const categories = [...new Set(channels.map(channel => channel.category))];

categories.forEach(category => {
    const heading = document.createElement("h3");
    heading.textContent = category;
    heading.className = "text-purple-400 font-bold mt-4 mb-2";
    list.appendChild(heading);

    channels.filter(channel => channel.category === category)
        .forEach(channel => {
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
      button.addEventListener("click", () => {

    document.querySelectorAll("#channels-list button")
        .forEach(btn => {
            btn.classList.remove("bg-purple-600");
            btn.classList.add("bg-slate-800");
        });

    button.classList.remove("bg-slate-800");
    button.classList.add("bg-purple-600");

    onSelect(channel);
});
        list.appendChild(button);
    });
});
}
