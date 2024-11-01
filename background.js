chrome.runtime.onMessage.addListener((request) => {
    if (request.url) {
      chrome.downloads.download({ url: request.url }, (downloadId) => {
        if (chrome.runtime.lastError) {
          alert("İndirme başarısız! Bağlantı panoya kopyalanacak.");
          navigator.clipboard.writeText(request.url).then(() => {
            alert("Video bağlantısı panoya kopyalandı. Manuel olarak indirebilirsiniz.");
          });
        }
      });
    }
  });
  