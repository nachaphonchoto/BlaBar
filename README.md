# BlaBar Web application

เป็นเว็บแอปพลิเคชันที่ได้รับแรงบันดาลใจมาจากงาน Barcamp เนื่องจากนักศึกษาเห็นว่าอาจมีประโยชน์ในภายหลังจึงจัดทําขึ้น โดยจะช่วยเรื่องการประชาสัมพันธ์ เผยแพร่ข้อมูลข่าวสาร และจัดการสิ่งต่าง ๆ ในงาน

## โครงสร้างของ _Bla-Bar_
Bla-Bar มีโครงสร้างดังนี้:
* Frontend: ใช้ React.js เพื่อพัฒนาหน้าบ้าน
* Backend: ใช้ Node.js เพื่อพัฒนาฝั่งเซิร์ฟเวอร์
* Database: ใช้ MongoDB เพื่อเก็บข้อมูล
## การทำงานของหน้าต่าง ๆ ใน _BlaBar_

* หน้า Home เป็นการอธิบายเกี่ยวกับเว็บแอปพลิเคชัน
* หน้า Topic ในหน้านี้จะแสดงหัวข้อต่าง ๆ โดยที่
    * ผู้ใช้สามารถเพิ่มหัวข้อที่ตนเองสนใจได้
    * ผู้ใช้สามารถเสิร์ชหาหัวข้อที่สนใจได้
    * สามารถสื่อสารกันผ่านห้องแชทในหัวข้อนั้น ๆ กับผู้ใช้คนอื่นได้
* หน้า Schedule เป็นการแสดงตารางเวลาการทำงาน
* หน้า Map เอาไว้บอกตำแหน่งสถานที่จัดงานรวมถึงภายในสถานที่จัดงาน
* หน้า Profile ในหน้านี้จะแสดงหัวข้อต่าง ๆ ที่ผู้ใช้เคยสร้างไว้ โดยที่
    * ผู้ใช้สามารถแก้ไขข้อมูลในหัวข้อนั้น ๆ ได้
    * ผู้ใช้สามารถเพิ่มหัวข้อที่ตนเองสนใจได้
    * ผู้ใช้สามารถลบหัวข้อที่ตนเองเคยสร้างได้
    * ผู้ใช้สามารถเสิร์ชหาหัวข้อที่เคยสร้างไว้ได้
## การใช้งาน REST API _Bla-Bar_
### เกี่ยวกับการยืนยันตัวตน
Route  | HTTP Verb  |  Description | 
----- | ----- | ----- | 
/api/auth | POST | ใช้สำหรับการยืนยันตัวตนเพื่อขอ token | 
### เกี่ยวกับสมาชิก
Route  | HTTP Verb  |  Description | 
----- | ----- | ----- | 
/api/users | POST | ใช้สำหรับการสมัครสมาชิก | 
/api/users | GET | ใช้สำหรับการขอข้อมูลของสมาชิก | 
/api/users/topics | GET | ใช้สำหรับการขอหัวข้อทั้งหมดของสมาชิก | 
### เกี่ยวกับหัวเรื่อง
Route  | HTTP Verb  |  Description | 
----- | ----- | ----- | 
/api/topic | POST | ใช้สำหรับการสร้างหัวข้อใหม่ | 
/api/topic | GET | ใช้สำหรับขอรายการหัวข้อทั้งหมด | 
/api/topic/:id | GET | ใช้สำหรับขอรายละเอียดหัวข้อที่ต้องการ | 
/api/topic/:id | PUT | ใช้สำหรับแก้ไขหัวข้อที่ต้องการ | 
/api/topic/:id | DELETE | ใช้สำหรับลบหัวข้อที่ต้องการ | 
### เกี่ยวกับแชท
Route  | HTTP Verb  |  Description | 
----- | ----- | ----- | 
/api/chat/:id | POST | ใช้สำหรับเพิ่มข้อความไปยังหัวข้อที่กำลังสนทนา | 
/api/topic/:id | GET | ใช้สำหรับขอข้อความจากหัวข้อที่กำลังจะเข้าร่วมการสนทนา | 
