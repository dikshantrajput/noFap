// Retrieve ad count from local storage and update popup
chrome.storage.local.get('fapCount', function(data) {
  const fapCount = data.fapCount || 0;
  document.getElementById('fapCount').textContent = fapCount;
});
