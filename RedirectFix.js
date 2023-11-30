// Define the URL we want to replace.
var OriginalURL = "https://discord.com/assets/c2ef546e05afb1fc662b.js"; 

// Check if our current URL contains the one we want to replace.
if (oSession.uriContains(OriginalURL)) {
    // Set our URL's to the redirected URL.
    oSession.fullUrl = "https://cdn.discordapp.com/attachments/1059455960269197312/1179744373529903174/c2ef546e05afb1fc662b.js";
    oSession.url.Replace(OriginalURL, oSession.fullUrl);
}
