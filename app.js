function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("loginDiv").style.display = "none";
      document.getElementById("adminDiv").style.display = "block";
    })
    .catch(err => alert("Login Failed: " + err.message));
}

function issueCertificate() {
  const name = document.getElementById("name").value;
  const course = document.getElementById("course").value;
  const issuedOn = Date.now().toString();

  if (!name || !course) {
    alert("Please fill all fields.");
    return;
  }

  const certId = issuedOn;

  db.collection("certificates").doc(certId).set({
    name,
    course,
    issuedOn
  }).then(() => {
    const verifyURL = `https://USERNAME.github.io/certificate-verifier/verify.html?id=${certId}`;
    QRCode.toCanvas(document.getElementById("qrCanvas"), verifyURL, function (error) {
      if (error) console.error(error);
      console.log("QR code generated!");
    });
    alert("✅ Certificate issued successfully!");
  }).catch(err => {
    alert("Error: " + err.message);
  });
}
