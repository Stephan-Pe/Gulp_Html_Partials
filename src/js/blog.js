const app = document.getElementById('app');
const url = "http://localhost/blogsite_API/posts";

async function myFetch() {
    let response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();

}

myFetch().then((data) => {
    let posts = data;

    posts.forEach((post, id) => {
        if (app) {
            app.innerHTML += `  <div class="blog">
            <div class="blog__image">
                <img loading="lazy" src="${post.image}" alt="${post.title}">
            </div>
            <div class="blog__text spacing">
                <h1 class="blog__title">${post.title}</h1>
                <h3 class="blog__subtitle">${post.sub_title}</h3>
                <p>${post.blog_text}</p>
            </div>
        </div>`;
        }

    })


    return data;
}).catch(e => console.log(e));
