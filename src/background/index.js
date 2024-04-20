chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === 'fapSkipped') {
    chrome.storage.local.get('fapCount', function(data) {
      const fapCount = data.fapCount || 0;
      chrome.storage.local.set({ 'fapCount': fapCount + 1 });
    });
  }
});
