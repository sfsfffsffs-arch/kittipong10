// ==========================================
// 1. ระบบเดิมของคุณ: แสดงปีปัจจุบันใน Footer
// ==========================================
document.getElementById("year").textContent = new Date().getFullYear();


// ==========================================
// 2. ระบบเดิมของคุณ: เอฟเฟกต์ Fade In ตอนเลื่อนหน้า
// ==========================================
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

sections.forEach(section => {
    section.classList.add("fade-in");
    observer.observe(section);
});


// ==========================================
// 3. ระบบที่เติมให้ใหม่: เอฟเฟกต์ฝุ่นดวงดาวธีมอวกาศ (Space Particles)
// ==========================================
function createSpaceParticles() {
    // สร้างแผ่นใสซ้อนไว้หลังหน้าเว็บสำหรับโปรยดวงดาว
    const spaceCanvas = document.createElement("div");
    spaceCanvas.style.position = "fixed";
    spaceCanvas.style.top = "0";
    spaceCanvas.style.left = "0";
    spaceCanvas.style.width = "100vw";
    spaceCanvas.style.height = "100vh";
    spaceCanvas.style.pointerEvents = "none"; // ให้เมาส์คลิกทะลุได้ ไม่ขวางปุ่ม
    spaceCanvas.style.zIndex = "-1";          // ซ่อนไว้ข้างหลังสุด
    spaceCanvas.style.overflow = "hidden";
    document.body.appendChild(spaceCanvas);

    const numberOfStars = 40; // กำหนดจำนวนดวงดาวบนหน้าจอ

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement("div");
        const starSize = Math.random() * 2 + 1; // สุ่มขนาดดาว 1-3 พิกเซล
        
        // ตั้งค่ารูปร่างหน้าตาของดวงดาวนีออน
        star.style.position = "absolute";
        star.style.width = `${starSize}px`;
        star.style.height = `${starSize}px`;
        star.style.borderRadius = "50%";
        star.style.opacity = Math.random() * 0.6 + 0.2; // สุ่มความสว่างเริ่มต้น
        
        // สุ่มสีดวงดาวให้เป็นโทน อวกาศไซไฟ (ฟ้านีออน หรือ ชมพูนีออน)
        star.style.background = Math.random() > 0.5 ? "#00f2fe" : "#b5179e"; 
        
        // สุ่มตำแหน่งกระจายตัวของดาวบนจอ
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;

        // ใส่คำสั่งแอนิเมชันให้ดวงดาวลอยขึ้นและกะพริบเบา ๆ ไปเรื่อย ๆ
        star.animate([
            { transform: 'translateY(0px) scale(1)', opacity: star.style.opacity },
            { transform: `translateY(${Math.random() * -30 - 20}px) scale(1.4)`, opacity: 1 },
            { transform: 'translateY(0px) scale(1)', opacity: star.style.opacity }
        ], {
            duration: Math.random() * 4000 + 3000, // สุ่มความเร็วในการกะพริบ (3-7 วินาที)
            iterations: Infinity                  // เล่นวนไปเรื่อย ๆ ไม่มีหยุด
        });

        spaceCanvas.appendChild(star);
    }
}

// สั่งให้ระบบอวกาศเริ่มทำงานทันทีหลังจากหน้าเว็บโหลดเสร็จ
window.addEventListener("DOMContentLoaded", createSpaceParticles);


// ==========================================
// 4. ระบบเดิมของคุณ: ข้อความต้อนรับใน Console (ปรับให้ดูไซไฟขึ้นนิดนึง)
// ==========================================
console.log("Welcome to KITTIPONG Portfolio 🚀 [Space Engine: Online]");
