export function showPreview(channel) {
    const title = document.querySelector("#preview-title");
    const image = document.querySelector("#preview-image");
    const number = document.querySelector("#preview-number");
    

    title.textContent = channel.name;
    image.src = channel.previewImage;
    image.alt = channel.name;
    number.textContent = `Chaîne ${channel.channelNumber}`;
}