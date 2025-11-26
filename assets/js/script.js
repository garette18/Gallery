var content = document.getElementById("content");
content.innerHTML = '';
for (let i = 0; i < categories.length; i++) {
    let category = categories[i];
    let categoryHtml = `
                    <div class="category-section mb-5">
                        <h2 class="text-dark-brown fw-bold text-center mb-4">${category.name}</h2>
                        <p class="lead text-muted text-center mb-4">${category.desc}</p>
                        <div class="row g-4 justify-content-center">`;

    for (let j = 0; j < category.dishes.length; j++) {
        let dish = category.dishes[j];
        categoryHtml += `
                        <div class="col-12 col-sm-6 col-md-4">
                            <div class="card h-100 border-0 shadow-sm">
                                <img src="${dish.image}" class="card-img-top" style="height: 200px; object-fit: cover;">
                                <div class="card-body p-2">
                                    <h6 class="card-title text-dark-brown fw-bold">${dish.name}</h6>
                                    <p class="card-text small text-muted">${dish.desc}</p>
                                </div>
                            </div>
                        </div>`;
    }
    categoryHtml += `
                        </div> </div> `;

    content.innerHTML += categoryHtml;
};