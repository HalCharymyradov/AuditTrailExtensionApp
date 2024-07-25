document.getElementById('checkAuditTrail').addEventListener('click', function() {
    const date = document.getElementById('dateInput').value;
    if (!date) {
      alert('Please select a date');
      return;
    }
  
    chrome.runtime.sendMessage({ action: 'fetchAuditTrail', date: date }, function(response) {
      if (response && response.data) {
        const tbody = document.getElementById('resultsTable').querySelector('tbody');
        tbody.innerHTML = '';
        response.data.forEach(record => {
          const row = document.createElement('tr');
          row.innerHTML = `<td>${record.user}</td><td>${record.action}</td><td>${record.date}</td><td>${record.details}</td>`;
          tbody.appendChild(row);
        });
      }
    });
  });  