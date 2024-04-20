const texts = [
  "Detour: Explore the real world instead.",
  "Locked out of temptation, unlocked potential awaits.",
  "Pause for thought: What will you choose next?",
  "Blocked for your betterment: Seek inspiration elsewhere.",
  "One small click for control, one giant leap for self-mastery.",
  "Taking a detour from distraction, paving the way for focus.",
  "Denied access: Elevating your digital experience.",
  "Breaking chains: Your journey to freedom starts here.",
  "You're worth more than this momentary pleasure.",
  "Break the cycle, empower your self-control.",
  "Opportunity for growth: choose wisely.",
  "Stepping away from the screen, stepping into your potential.",
  "Investing in your future self by blocking this site.",
  "Resisting temptation, embracing progress.",
]

function createNoFapMessage(message) {
    const div = document.createElement('div');
    div.style.position = 'fixed';
    div.style.top = '0';
    div.style.left = '0';
    div.style.right = '0';
    div.style.bottom = '0';
    div.style.display = 'flex';
    div.style.zIndex = '999999999999999999999999999999';
    div.style.alignItems = 'center';
    div.style.justifyContent = 'center';
    div.style.backgroundColor = 'rgba(0, 0, 0, 1)';
    div.style.color = '#FFFFFF';
    div.style.fontSize = '24px';
    div.innerHTML = `
      <p style="text-align: center">
        ${message}
      </p>
    `;
    document.body.style.maxHeight = "100vh"
    document.body.style.overflow = "hidden"
    document.body.appendChild(div);
}

const message = texts[Math.floor(Math.random() * texts.length)];

const blockedURLsFileURL = chrome.runtime.getURL('list.txt');
fetch(blockedURLsFileURL)
    .then(response => response.text())
    .then(data => {
        const blockedURLs = data.split(',\n').filter(url => url.trim() !== '');
        const currentURL = window.location.host;
        const isBlocked = blockedURLs.some(url => currentURL.includes(url.trim()));
        if (isBlocked) {
          createNoFapMessage(message);
          chrome.runtime.sendMessage({ action: 'fapSkipped' });
        }
    })
    .catch(error => console.error('Error reading blocked URLs file:', error));