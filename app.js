const getBtn=document.querySelector('button')
const olTag=document.querySelector('ol')

// const _baseURL='https://jsonplaceholder.typicode.com'

// const endpoints={
//     users: '/users', 
//     todo: '/todos'
// }

// function getUsers(){
//     fetch(_baseURL+endpoints.users)
//         .then(response=>response.json())
//         .then(data=>{
//             console.log(data)
//             renderUsers(data)

//         })

// }
// getUsers()

// function renderUsers(mass){
//     for (const user of mass) {
//         olTag.innerHTML+=`
//         <li>${user.name}
//         <h6>${user.email}</h6>
//         <h5>${user.phone}</h5>
//         </li>
//         `
//     }

// }


// const url="https://api.sampleapis.com/coffee"

// const endpoints={
//     hot: '/hot',
//     iced: '/iced'
// }

// function getCoffeeHot(){
//     fetch(url+endpoints.hot)
//     .then(rep=>rep.json())
//     .then(data=>{
//         console.log(data)
//         renderCoffeeHot(data)
//     })
// }
// getCoffeeHot()

// function getCoffeeIced(){
//     fetch(url+endpoints.iced)
//     .then(rep=>rep.json())
//     .then(data=>{
//         console.log(data)
// })
// }
// getCoffeeIced()


// function renderCoffeeHot(mass){
//     for (const coffee of mass) {
//         olTag.innerHTML+=`
//         <li>${coffee.title}
//         <h6>${coffee.description}</h6>
//         <h5>Ingredients: ${coffee.indredients}</h5>
//         <img style="width:200px" src=${coffee.image}/>

//         </li>`
//     }
// }






const url="https://api.sampleapis.com/countries"

const endpoints={
    hot: '/countries'
}

function getBorborHot(){
    fetch(url+endpoints.hot)
    .then(rep=>rep.json())
    .then(data=>{
        console.log(data)
        renderBorborHot(data)
    }
    )
}
getBorborHot()

function renderBorborHot(mass){
    for (const borbor of mass){
        olTag.innerHTML+=`
        <li>${borbor.name}
        <h1>${borbor.capital}</h6>
        <h5>${borbor.currency
        }</h5>
        <h4>${borbor.population}</h4>
        <img src=${borbor.media}/>
        </li>`
    }
}

// ? hot
