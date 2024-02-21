function previewImage(event) {
    var reader = new FileReader();
    reader.onload = function(){
        var output = document.getElementById('imagePreview');
        output.style.display = "block";
        output.innerHTML = '<img src="' + reader.result + '" style="max-width:300px; max-height:300px;" />';
    }
    reader.readAsDataURL(event.target.files[0]);
}
