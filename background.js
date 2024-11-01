chrome.runtime.onInstalled.addListener(() => {
    console.log("Test Kupon Scraper yüklendi!");
  });
  
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url) {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        function: scrapeCoupons
      });
    }
  });
  
  function scrapeCoupons() {
    console.log("Kupon verileri toplanıyor...");
  }
  