import { getChannels } from "./services/api.js";

getChannels().then(function(channels) {
    console.log(channels);
});