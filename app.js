document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("certForm");
  const qrCanvas = document.getElementById("qrcode");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const course = document.getElementById("course").value;

    if (!name || !course) {
      alert("Please fill out all fields.");
      return;
    }

    const certId = Date.now().toString(); // unique ID

    try {
      // Save certificate to Firestore
      await db.collection("certificates").doc(certId).set({
        name,
        course,
        issuedOn: Date.now()
      });

      // QR code URL pointing to verify.html?id=certId
      const qrData = `${window.location.origin}/verify.html?id=${certId}`;

      // Generate QR code
      QRCode.toCanvas(qrCanvas, qrData, { width: 200 }, (error) => {
        if (error) {
          console.error("QR Code generation error:", error);
          alert("Error generating QR Code");
        } else {
          console.log("QR Code generated successfully!");
        }
      });

      form.reset();
      alert("✅ Certificate added and QR code generated!");

    } catch (err) {
      console.error(err);
      alert("Error: " + err.message);
    }
  });

});
