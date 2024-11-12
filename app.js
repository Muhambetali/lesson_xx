




const api_url = 'https://randomuser.me/api/' 

// DOM
const imgEl = document.querySelector('img') 
const btn = document.querySelector('.button') 
const text = document.querySelector('.text') 
const btns = document.querySelectorAll('button') 

let userInfo = {} 

// Получаем случайного пользователя
async function getRandomUser() { 
    const response = await fetch(api_url) 
    const userData = await response.json() 
    console.log(userData); 
    renderUser(userData.results[0]) 
} 

getRandomUser() 

// Рендерим данные пользователя
function renderUser(user = {}) { 
    imgEl.src = user.picture.large 
    userInfo = user 
}

// Обработчик на кнопку для получения случайного пользователя
btn.addEventListener('click', getRandomUser) 

// Обработчик событий на кнопки
btns.forEach((btn, index) => { 
    btn.addEventListener('mouseenter', () => { 
        if (index === 0) { 
            text.innerHTML = ` 
                Hello my email is <h4>${userInfo.email}</h4> 
            ` 
        } else if (index === 1) { 
            text.innerHTML = ` 
                Hello my name is <h4>${userInfo.name.first} ${userInfo.name.last}</h4> 
            `  
        } else if (index === 2) { 
            const d = new Date(userInfo.dob.date) 
            text.innerHTML = ` 
                My birthday is <h4>${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}</h4> 
            ` 
        } else if (index === 3) {  
            const location = userInfo.location                      
            text.innerHTML = ` 
                My address is <h4>${location.street.number} ${location.street.name}, ${location.city}, ${location.state}, ${location.country} ${location.postcode}</h4> 
            ` 
        } else if (index === 5) { 
            // Добавляем кнопку для пароля
            text.innerHTML = `
                My password is <h4>My password</h4>
            `
        } else if (index === 4) { 
            const contact = userInfo.phone 
            text.innerHTML = ` 
                My contact number is <h4>${contact}</h4> 
            ` 
        } 
    }) 
})
