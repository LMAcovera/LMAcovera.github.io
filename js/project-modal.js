document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    var modal = document.getElementById("imageModal");
    
    // Get the modal image
    var modalImg = document.getElementById("modalImage");
    
    // Get the close button
    var closeBtn = document.getElementsByClassName("close")[0];
    
    // Get all images with class gallery-img
    var images = document.getElementsByClassName("gallery-img");
    
    // Add click event to all gallery images
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        }
    }
    
    // Close modal when clicking X
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }
    
    // Close modal when clicking outside the image
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === "Escape") {
            modal.style.display = "none";
        }
    });
}); 