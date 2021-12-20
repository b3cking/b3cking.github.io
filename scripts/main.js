const Helper = (function () {
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
  return {
    getCookie,
  };
})();

function onClickImg(evt) {
  const img = evt.target;
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const captionText = document.getElementById("caption");
  modal.style.display = "flex";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
}