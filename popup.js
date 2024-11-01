document.getElementById("downloadButton").addEventListener("click", function () {
    const resolution = document.getElementById("resolution").value;
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: downloadVideo,
        args: [resolution]
      });
    });
  });
  
  function downloadVideo(resolution) {
    const video = document.querySelector("video");
  
    if (!video || !video.src) {
      alert("Video bulunamadı veya indirilemedi!");
      return;
    }
  
    let videoURL = video.src;
  
    if (resolution === "720p") {
      videoURL = video.src.replace("1080p", "720p");
    } else if (resolution === "480p") {
      videoURL = video.src.replace("1080p", "480p");
    } else if (resolution === "360p") {
      videoURL = video.src.replace("1080p", "360p");
    }
  
    if (!videoURL || !/^https?:\/\//.test(videoURL)) {
      alert("Geçersiz video URL'si!");
      return;
    }
    
    chrome.runtime.sendMessage({ url: videoURL });
  }
  