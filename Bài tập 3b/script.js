function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    let ampm = 'AM';
    
    if (hours >= 12) {
        ampm = 'PM';
        hours = hours % 12;
    }
    
    hours = String(hours).padStart(2, '0');
    
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('ampm').textContent = ampm;
}

// Cập nhật đồng hồ mỗi giây
setInterval(updateClock, 1000);

// Khởi chạy đồng hồ ban đầu
updateClock();

