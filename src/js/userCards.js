export const userCards = (arr) => {
    const cards =  arr.map(user => `
    <div class="col-6 col-md-3">
        <div class="card m-2">
        <img src="${user.avatar}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${user.first_name} ${user.last_name}</h5>
            <p class="card-text">${user.email}</p>
        </div>
        </div>
    </div>
        `)
    document.getElementById("users-cards").innerHTML = cards.join("");
};