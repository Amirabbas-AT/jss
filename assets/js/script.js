const data = [
    {
        title: "sample",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        desc: "slim-fitting stylecontrast "
    },
    {
        title: "sample",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        desc: "slim-fitting stylecontrast "
    },
    {
        title: "sample",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        desc: "slim-fitting stylecontrast "
    },
    {
        title: "sample",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        desc: "slim-fitting stylecontrast "
    },
]

const container = document.getElementById('product-container');

data.map( item =>{
    const col = document.createElement('div');
    col.classList.add("col-lg-3");
    col.innerHTML = `
    <div class="card">
                   <img src=${item.image} class="card-img-top" alt="...">
                   <div class="card-body">
                      <h5 class="card-title">${item.title}</h5>
                      <p class="card-text">${item.desc}</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                   </div>
                  </div>
    `;
    container.appendChild(col)
})



