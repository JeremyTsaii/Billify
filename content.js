// Find all images in the DOM of current page
var images = document.getElementsByTagName('img');

// Change each image to a picture of Bill
for (var i = 0; i < images.length; i++) {
    images[i].src = chrome.runtime.getURL("images/bill.PNG");
}
