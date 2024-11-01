function addDownloadButton() {
  const container = document.querySelector("body"); // Butonu ekleyeceğimiz genel bir konteyner
  if (!container) return;

  const button = document.createElement("button");
  button.innerText = "İndir";
  button.className = "download-button";
  button.style.position = "fixed";
  button.style.bottom = "20px";
  button.style.right = "20px";
  button.style.zIndex = "10000";
  button.style.backgroundColor = "#e74c3c";
  button.style.color = "white";
  button.style.padding = "10px 15px";
  button.style.border = "none";
  button.style.cursor = "pointer";
  button.style.fontSize = "16px";
  
  button.onclick = () => {
    const video = document.querySelector("video");

    if (!video || !video.src) {
      alert("Video bulunamadı veya indirilemedi!");
      return;
    }

    const videoURL = video.src;
    if (!videoURL || !/^https?:\/\//.test(videoURL)) {
      alert("Geçersiz video URL'si!");
      return;
    }

    chrome.runtime.sendMessage({ url: videoURL });
  };

  // Eğer buton eklenmemişse ekliyoruz
  if (!document.querySelector(".download-button")) {
    container.appendChild(button);
  }
}

// DOM değişikliklerini izlemek için MutationObserver kullanımı
const observer = new MutationObserver(addDownloadButton);
observer.observe(document.body, { childList: true, subtree: true });

// İlk olarak butonları ekle
addDownloadButton();
