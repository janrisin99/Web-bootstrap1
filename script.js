// โหลดไฟล์ menu.html มาแสดงใน div ที่มี id="menu"
fetch("menu.html")
  .then(function(response) {
    if (!response.ok) {
      throw new Error("โหลดเมนูไม่สำเร็จ");
    }
    return response.text();
  })
  .then(function(data) {
    document.getElementById("menu").innerHTML = data;
  })
  .catch(function() {
    document.getElementById("menu").textContent = "กรุณาเปิดเว็บด้วย Live Server เพื่อโหลดเมนู";
  });

// ทำงานเฉพาะหน้าที่มีฟอร์มลงทะเบียน
var registerForm = document.getElementById("registerForm");

if (registerForm != null) {
  registerForm.addEventListener("submit", function(event) {
    event.preventDefault(); // ไม่ให้หน้าเว็บโหลดใหม่

    var fullName = document.getElementById("fullName").value.trim();
    var course = document.getElementById("course").value;

    if (fullName == "") {
      document.getElementById("message").textContent = "กรุณากรอกชื่อ";
      document.getElementById("fullName").focus();
      return;
    }

    // ใช้ textContent เพื่อแสดงข้อความที่ผู้ใช้กรอกอย่างปลอดภัย
    document.getElementById("message").textContent =
      "คุณ " + fullName + " เลือก " + course + " เรียบร้อยแล้ว (แบบฟอร์มตัวอย่าง ยังไม่ได้บันทึกข้อมูล)";
  });
}
