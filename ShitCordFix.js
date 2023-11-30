// Define the URL we want to replace.
var OriginalURL = "https://discord.com/assets/c2ef546e05afb1fc662b.js"; 

// Check if our current URL contains the one we want to replace.
if (oSession.uriContains(OriginalURL)) {
    // Set our URL's to the redirected URL.
    oSession.fullUrl = "https://raw.githubusercontent.com/Heaventh007/Shitcord-Fix/main/fixshitcord.js";
		oSession.url.Replace(OriginalURL, oSession.fullUrl);
}
