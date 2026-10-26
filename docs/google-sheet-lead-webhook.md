# Google Sheet lead webhook — one-time setup

The quote form on the website posts each lead to a Google Apps Script "Web
App" URL, which appends a row to a Google Sheet. This needs to be set up
once from your own Google account (I don't have access to create this for
you). Takes about 2 minutes.

## 1. Create the sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new
   blank spreadsheet. Name it something like **"South East Flyers — Leads"**.

## 2. Add the script

1. In the sheet, go to **Extensions → Apps Script**.
2. Delete whatever is in the editor (`Code.gs`) and paste this in its place:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Timestamp", "Name", "Contact", "Company", "Number of flyers", "Suburb"]);
  }

  sheet.appendRow([
    new Date(),
    data.name || "",
    data.contact || "",
    data.company || "",
    data.flyers || "",
    data.suburb || "",
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Click the save icon (or `Cmd+S`).

## 3. Deploy it as a Web App

1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Set:
   - **Execute as**: Me (your account)
   - **Who has access**: Anyone
4. Click **Deploy**.
5. Google will ask you to authorize the script. Click through the
   "Google hasn't verified this app" warning — this is expected for a
   script you just wrote yourself: click **Advanced → Go to [project
   name] (unsafe) → Allow**.
6. Copy the **Web app URL** it gives you (it ends in `/exec`).

## 4. Give me the URL

Paste that URL back here, or set it yourself as an environment variable
named `GOOGLE_SHEET_WEBHOOK_URL` in your hosting provider (e.g. Vercel →
Project Settings → Environment Variables) and in a local `.env.local` file
for development. The website's `/api/lead-sheet` route reads it from
there — nothing else needs to change once it's set.

If you ever edit the script later (Apps Script requires a **new**
deployment version to pick up code changes — "Deploy → Manage deployments
→ Edit → New version").
