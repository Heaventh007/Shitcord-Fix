// Define the URL we want to replace.
var OriginalURL = "https://discord.com/assets/c2ef546e05afb1fc662b.js"; 

// Check if our current URL contains the one we want to replace.
if (oSession.uriContains(OriginalURL)) {
    // Set our URL's to the redirected URL.
    oSession.fullUrl = "https://cdn.discordapp.com/attachments/1137579330227146782/1179511555264626798/fixshitcord2.js";
    oSession.url.Replace(OriginalURL, oSession.fullUrl);
}
