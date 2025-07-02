let main_card = document.querySelector('.main_card')


fetch('https://jsonplaceholder.typicode.com/users')
      .then(idCard => idCard.json())
      .then(json => {
        console.log(json)
        json.map((item)=>{
          let single_card = document.createElement('div')
          let card_top = document.createElement('div')
          let profile_box = document.createElement('div')
          let profile_img = document.createElement('img')
          let user_name = document.createElement('h1')
          let user_phone = document.createElement('h2')
          let user_email = document.createElement('h2')
          let user_address = document.createElement('h2')
          
          // child add---------
          main_card.appendChild(single_card)
          single_card.appendChild(card_top)
          card_top.appendChild(profile_box)
          profile_box.appendChild(profile_img)
          single_card.appendChild(user_name)
          single_card.appendChild(user_phone)
          single_card.appendChild(user_email)
          single_card.appendChild(user_address)



          // classes add--------
          single_card.classList.add('single_card')
          card_top.classList.add('card_top')
          profile_box.classList.add('profile_box')
          profile_img.src = 'images/image.png'
          profile_img.alt = 'profile image'
          user_name.classList.add('user_name')
          user_phone.classList.add('user_phone')
          // user info add --------
            user_name.innerHTML = `${item.name}`
            user_phone.innerHTML = `Phone: ${item.phone}`
            user_email.innerHTML = `E-mail: ${item.email}`
            user_address.innerHTML = `Add: ${item.address.street},${item.address.city}`
        })
      })
      .catch((err)=>{
        console.log(err)
      })