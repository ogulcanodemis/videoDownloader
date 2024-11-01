function addDownloadButton() {
    const videos = document.querySelectorAll("video");
  
    videos.forEach((video) => {
      if (!video.parentElement.querySelector(".download-button")) {
        const button = document.createElement("button");
        button.innerText = "İndir";
        button.className = "download-button";
        button.onclick = () => chrome.runtime.sendMessage({ openPopup: true });
        video.parentElement.appendChild(button);
      }
    });
  }
  
  // DOM değişikliklerini izlemek için MutationObserver kullanımı
  const observer = new MutationObserver(addDownloadButton);
  observer.observe(document.body, { childList: true, subtree: true });
  
  // İlk olarak butonları ekle
  addDownloadButton();
  