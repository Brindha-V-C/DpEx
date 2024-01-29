document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var url = document.getElementById('url').value;
    var description = document.getElementById('description').value;
    var report = {url: url, description: description};
    chrome.storage.local.get({reports: []}, function(result) {
      var reports = result.reports;
      reports.push(report);
      chrome.storage.local.set({reports: reports}, function() {
        alert('Report saved!');
        location.reload();
      });
    });
  });
  