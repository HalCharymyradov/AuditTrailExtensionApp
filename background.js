chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'fetchAuditTrail') {
      const date = request.date;
      // Replace with the actual logic to fetch audit trail data from Salesforce
      const data = [
        { user: 'User1', action: 'Update', date: date, details: 'Updated field A' },
        { user: 'User2', action: 'Create', date: date, details: 'Created new record' },
        // Add more sample data as needed
      ];
      sendResponse({ data: data });
    }
    return true;
  });
  