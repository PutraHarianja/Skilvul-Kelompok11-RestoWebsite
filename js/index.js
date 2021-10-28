
const form = document.querySelector("#contact");

function validasi() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("Alamat").value;
    var Telepon = document.getElementById("Telepon").value;
    

    if (nama != "" && email != "" && Telepon != "" && alamat != "") {
        return true;
    } else {
        alert('Anda harus mengisi data!');
    }
}

form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let validate = validasi()
	// if valid, submit the form.
	if (validasi) {
		parent.location='feedback.html'
	}
});
