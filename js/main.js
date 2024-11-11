
//-----------------------timer-section------------------------

// تحديد الوقت المستهدف (مثال: 10 أيام)
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 30); // إضافة 10 أيام

// وظيفة لتحديث العداد
function updateCounter() {
    let now = new Date();
    let distance = targetDate - now;

    // حساب الأيام والساعات والدقائق والثواني
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // عرض العداد
    let DAY =document.querySelector(".days");
    let HOURS =document.querySelector(".hours");
    let MINUTES =document.querySelector(".minutes");
    let SECONDS =document.querySelector(".seconds");

    DAY.innerHTML = days +" days"
    HOURS.innerHTML =  hours + " hours";
    MINUTES.innerHTML =  minutes + " minutes";
    SECONDS.innerHTML =  seconds + " seconds";


    // إذا انتهى الوقت
    if (distance < 0) {
        clearInterval(interval);
        document.getElementById('counter').innerHTML = "انتهى الوقت!";
    }
}

// تحديث العداد كل ثانية
let interval = setInterval(updateCounter, 1000);


//---------------------------------back-to-top-------------------------------

// إظهار الزر عند التمرير للأسفل
window.onscroll = function() {
    let scrollBtn = document.querySelector(".backToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};


function scrollToTop() {
    window.scrollTo ({
        top:0,
        behavior:"smooth"
    })
};




  const Onsearch = () => {
            const input = document.getElementById("search");
            const filter = input.value.toUpperCase();
    
            const list = document.querySelectorAll("#dropdown-menu .dropdown-item");
    
            list.forEach((ahmed) => { // تبع typescript وليست دي بتشير لنوع البيانات
                const text = ahmed.textContent.toUpperCase();
                
                // if (text.includes(filter)) {
                    //     ahmed.style.display = ""; 
                    // } else {
                    //     ahmed.style.display = "none"; 
                    // }
                    
                ahmed.style.display = text.includes(filter) ? "" : "none";
                
                    });
        }
        
        // Add event listener to the input to trigger the search function
        document.getElementById("search").addEventListener("input", Onsearch);