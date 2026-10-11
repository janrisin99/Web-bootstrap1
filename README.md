# final_69708657
นายอาทินันท์ จันริศิลป์ — 69708657

เว็บตัวอย่างตามโจทย์ ใช้ HTML, CSS, JavaScript และ Bootstrap 5 แบบพื้นฐาน ไม่มีระบบหลังบ้าน

## วิธีเปิด
1. แตกไฟล์ ZIP แล้วเปิดโฟลเดอร์ final_69708657 ใน VS Code
2. ติดตั้งส่วนเสริม Live Server
3. คลิกขวาที่ Home.html แล้วเลือก Open with Live Server
4. ต้องเชื่อมต่ออินเทอร์เน็ตเพื่อโหลด Bootstrap จาก CDN

ต้องเปิดผ่าน Live Server เพราะ JavaScript ใช้ fetch อ่าน menu.html การดับเบิลคลิกไฟล์ HTML โดยตรงอาจโหลดเมนูไม่ได้
ถ้ามี Python สามารถใช้ python -m http.server 8000 ในโฟลเดอร์นี้ แล้วเปิด http://localhost:8000 ได้เช่นกัน

## หน้าที่ของแต่ละไฟล์
- Home.html: หน้าแรก มีภาพโปรโมท ปุ่มไป Course และ Register คอร์สตัวอย่าง และ Footer
- index.html: สำเนาหน้า Home สำหรับหน้าแรกของโฮสติ้ง เช่น GitHub Pages
- Course.html: รายการคอร์ส 6 การ์ด บนคอมพิวเตอร์แสดง 3 คอลัมน์
- Register.html: ฟอร์มชื่อ อีเมล โทรศัพท์ และคอร์ส
- menu.html: เมนู Navbar ร่วมทุกหน้า
- style.css: กำหนดสี ขนาดรูป และความกว้างฟอร์ม
- script.js: โหลดเมนูและแสดงข้อความเมื่อกรอกฟอร์มสำเร็จ
- images/: รูปที่ตัดจากภาพตัวอย่างใน PDF ความละเอียดจึงจำกัด สามารถแทนด้วยไฟล์ต้นฉบับชื่อเดิมได้

## อธิบายโค้ดพื้นฐาน
- container: จำกัดความกว้างเนื้อหาและจัดให้อยู่กลางหน้า
- row: สร้างแถวของ Bootstrap
- col-12 col-sm-6 col-md-4: มือถือ 1 คอลัมน์ แท็บเล็ต 2 คอลัมน์ และจอใหญ่ 3 คอลัมน์
- card / card-body: ทำกรอบการ์ดและพื้นที่ข้อความ
- form-control / form-select: จัดรูปแบบช่องกรอกข้อมูล
- required: ให้เบราว์เซอร์บังคับกรอกก่อนส่งฟอร์ม
- type="email": ให้เบราว์เซอร์ตรวจรูปแบบอีเมล
- fetch("menu.html"): อ่านไฟล์เมนู โดยใช้ .then รอผลที่โหลดกลับมา
- getElementById: หาองค์ประกอบจาก id
- addEventListener("submit", ...): ให้ JavaScript ทำงานเมื่อส่งฟอร์ม
- preventDefault(): ป้องกันฟอร์มโหลดหน้าใหม่
- textContent: ใส่ข้อความลงบนหน้าเว็บ

ฟอร์มนี้เป็นตัวอย่างฝั่งหน้าเว็บ แสดงข้อความยืนยันเท่านั้น ไม่บันทึกหรือส่งข้อมูลไปเซิร์ฟเวอร์

## อัปโหลด GitHub ด้วยหน้าเว็บ
1. สร้าง repository ชื่อ final_69708657
2. เลือก Add file > Upload files แล้วลากไฟล์และโฟลเดอร์ images ขึ้นไป
3. กด Commit changes
4. ถ้าต้องการเว็บออนไลน์ ไป Settings > Pages เลือก Deploy from a branch จาก main และ / (root) แล้ว Save
5. ใช้ลิงก์ repository หรือลิงก์ Pages ตามที่อาจารย์กำหนด

ชื่อใน Footer อยู่ใน Home.html, index.html และ Course.html
ถ้าแก้หน้า Home ควรแก้ index.html ให้เหมือนกันด้วย
