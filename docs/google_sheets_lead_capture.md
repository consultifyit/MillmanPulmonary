# Google Sheets Lead Capture Integration

To automatically route the lead submissions from the website into a Google Sheet, we will use **Google Apps Script**. This provides a completely free backend endpoint without needing to spin up a separate database or server.

## Step 1: Set up the Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new blank spreadsheet.
2. Name it something like **"Millman Pulmonary Lead Captures"**.
3. In the first row, create the following exact headers in cells A1 through F1:
   *   `Timestamp`
   *   `firstName`
   *   `lastName`
   *   `phone`
   *   `email`
   *   `reason`

## Step 2: Add the Apps Script Code

1. In your Google Sheet, click on **Extensions** > **Apps Script** in the top menu.
2. Delete any code in the editor and paste the following snippet:

```javascript
const sheetName = 'Sheet1'; // Ensure this matches your tab name at the bottom of the Sheet

function doPost(e) {
  try {
    const doc = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = doc.getSheetByName(sheetName);
    
    // Extract data from the incoming POST request
    const data = e.parameter;
    
    // Prepare the row array matching your headers
    const rowData = [
      new Date(), // Timestamp
      data.firstName || "",
      data.lastName || "",
      data.phone || "",
      data.email || "",
      data.reason || ""
    ];
    
    // Append the row to the sheet
    sheet.appendRow(rowData);
    
    // Return a success JSON response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return an error JSON response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click the **Save** icon (floppy disk).

## Step 3: Deploy as a Web App

1. Click the blue **Deploy** button in the top right corner and select **New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Fill out the configuration exactly like this:
   *   **Description:** Lead Capture V1
   *   **Execute as:** Me (Your Google Account)
   *   **Who has access:** Anyone
4. Click **Deploy**.
5. Google will prompt you to authorize access. Click **Authorize access**, choose your account, click **Advanced**, and then click **Go to [Project Name] (unsafe)**. Finally, click **Allow**.
6. You will be given a **Web app URL**. Copy this URL.

## Step 4: Connect the React App

Now you need to tell the website to send the form data to that specific URL.

1. In your repository, open the file `web/src/components/LeadCaptureForm.jsx`.
2. Locate the `handleSubmit` function around Line 12.
3. Replace the placeholder fetch logic with the actual fetch call using your Web app URL:

```javascript
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target;
    const formData = new FormData(form);

    // REPLACE THE URL BELOW WITH YOUR DEPLOYED GOOGLE APPS SCRIPT URL
    const scriptURL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

    fetch(scriptURL, { method: 'POST', body: formData })
      .then(response => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        if (onSuccess) {
          setTimeout(onSuccess, 3000);
        }
      })
      .catch(error => {
        console.error('Error!', error.message);
        setIsSubmitting(false);
        // Optional: Handle error state here
      });
  };
```

4. Push the changes to GitHub, and Vercel will automatically rebuild your site. The form will now instantly sync all data to your Google Sheet!
