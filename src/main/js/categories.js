const categoriesStartListener = () => {
    $('#category-btn').click(createCategories);
    $('.button-hero').click(createCategories);
};

// const createCategories = event => {
//     event.preventDefault();
//     $('.hero-banner').remove();
//     $('#categories-block').remove();
//     $('#products-block').remove();
//     const categories = $('<div/>', {id: 'categories-block'}).prependTo($('.site-main'));
//     categories.append($('<div/>').addClass('container'));
//     fetch(categoriesUrl)
//         .then(res => {
//             return res.json();
//         })
//         .then(res => {
//             createBlockOfCategories(res);
//         })
//         .catch(reject => {
//             console.log("Ups");
//             console.log(reject);
//         });
// };

const createCategories = event => {
    event.preventDefault();

    $('section').removeClass('active');
    $('.category-page').addClass('active');

    const categories = document.querySelector('.category-list');
    // categories.append($('<div/>').addClass('container'));
    fetch(categoriesUrl)
        .then(res => {
            return res.json();
        })
        .then(res => {
            $('.main-categories ul').children().remove(); //fix duplicate
            createBlockOfCategories(res);
        })
        .catch(reject => {
            console.log("Oops");
            console.log(reject);
        });
};

const createBlockOfCategories = (response) => {
    response.forEach(categoryItem => {
        const parent = document.querySelector('.main-categories ul');
        
        const {id, name, description, img} = categoryItem;

        const listItem = document.createElement('li');
        listItem.classList.add("filter-list");

        const radio = document.createElement('input');
        radio.setAttribute('type', 'radio');
        radio.setAttribute('name', 'category');
        radio.setAttribute('id', `category-${id}`);
        radio.setAttribute('category-id', id);
        radio.className = 'pixel-radio';

        const label = document.createElement('label');
        label.setAttribute('for', `category-${id}`);
        label.textContent = name;

        listItem.appendChild(radio);
        listItem.appendChild(label);

        listItem.addEventListener('click', () => {
            showProductsByCategory(listItem);
        })

        parent.appendChild(listItem);
    })
};