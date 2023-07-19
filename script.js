//your JS code here. If required.


window.addEventListener('DOMContentLoaded', (event) => {
	// const sizeInfoDiv = document.createElement("div");
	// sizeInfoDiv.id = "sizeInfo";
  const sizeInfoDiv = document.getElementById('sizeInfo');
  const sizeText = document.createElement('h1');
  sizeText.textContent = 'Width: ' + window.innerWidth + ' and Height: ' + window.innerHeight;
  sizeInfoDiv.appendChild(sizeText);

  window.addEventListener('resize', () => {
    sizeText.textContent = 'Width: ' + window.innerWidth + ' and Height: ' + window.innerHeight;
  });
});
