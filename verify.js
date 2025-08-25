const params = new URLSearchParams(window.location.search);
const certId = params.get("id");

if (!certId) {
  document.getElementById("result").innerText = "❌ Invalid Link";
} else {
  db.collection("certificates").doc(certId).get()
    .then(doc => {
      if (doc.exists) {
        const data = doc.data();
        document.getElementById("result").innerHTML = `
          ✅ Valid Certificate <br><br>
          <b>Name:</b> ${data.name} <br>
          <b>Course:</b> ${data.course} <br>
          <b>Issued On:</b> ${new Date(parseInt(data.issuedOn)).toDateString()} <br>
          <b>Status:</b> Always Valid
        `;
      } else {
        document.getElementById("result").innerText = "❌ Certificate Not Found / Invalid";
      }
    })
    .catch(err => {
      document.getElementById("result").innerText = "Error: " + err.message;
    });
}
