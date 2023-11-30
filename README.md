# Shitcord-Fix
Jank fix to patch Discord emote searching.

## How to use the fix

> Download and install fiddler classic from https://www.telerik.com/fiddler/fiddler-classic
>
> Open fiddler, and navigate to Tools > Options > HTTPS
>
> Enable Capture HTTPS CONNECTs, and Decrypt HTTPS traffic, make sure the dropdown is set to "From all processes".
>
> Click on Actions, then click on Trust Root Certificate.
>
> It'll probably ask for admin privliges, and yes and no questions a few times, just click yes.
>
> Click on "OK", then restart fiddler.
>
> Once fiddler is open, click on Rules, then Customize Rules.
>
> It should open what looks like a text editor, click on Go, and click "to OnBeforeRequest"
>
> Paste in the fix inside of OnBeforeRequest 
>
> Finally, use CTRL + S to save, or File > Save, then close the window.

### Where to put the fix

***Inside of OnBeforeRequest, find this:***
```
if (m_AlwaysFresh && (oSession.oRequest.headers.Exists("If-Modified-Since") || oSession.oRequest.headers.Exists("If-None-Match")))
{
  oSession.utilCreateResponseAndBypassServer();
  oSession.responseCode = 304;
  oSession["ui-backcolor"] = "Lavender";
}
```
***Put the fix right under the "}", without quotes.***

### For the Discord app
**In the discord app, hold CTRL and press R, this will reload all of Discord's dependencies.**
