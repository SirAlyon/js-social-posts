/* Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post, numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes. */

const posts = [
    {
        id: 1,
        name: 'Alessio',
        user_img: 'https://picsum.photos/200',
        date: '04/12/2022',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sapiente veniam vero unde cumque pariatur natus laboriosam, cupiditate nobis voluptate tempora. Atque repellat debitis unde',
        image: 'https://picsum.photos/200/300',
        likes: 80
    },
    {
        id: 2,
        name: 'Alessandro',
        user_img: 'https://picsum.photos/200/300',
        date: '04/12/2022',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sapiente veniam vero unde cumque pariatur natus laboriosam, cupiditate nobis voluptate tempora. Atque repellat debitis unde',
        image: 'https://picsum.photos/200/300',
        likes: 60
    },
    {
        id: 3,
        name: 'Martina',
        user_img: 'https://picsum.photos/200/300',
        date: '03/15/2022',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sapiente veniam vero unde cumque pariatur natus laboriosam, cupiditate nobis voluptate tempora. Atque repellat debitis unde',
        image: 'https://picsum.photos/200/300',
        likes: 150
    }
]


console.log(posts);
console.log(posts[1].name);



const postsElement = document.getElementById('posts')
const postMarkup = `
<div class="post bg-white p-2 mt-5">
<div class="header d-flex align-items-center">
    <div class="user_logo">
        <img src="${posts[i].user_img}" alt="">
    </div>
    <div class="d-flex flex-column mx-3">
        <span>${posts[i].name}</span>
        <span>${posts[i].date}</span>
    </div>
</div>
<div class="content mt-2">
    <p>${posts[i].text}</p>
    <div class="post_image">
        <img class="w-100" src="${posts[i].image}" alt="">
    </div>
</div>
<div class="likes d-flex justify-content-around p-3">
    <span><i class="fa-solid fa-thumbs-up"></i> Mi piace</span>
    <span>Piace a <strong>${posts[i].likes}</strong> persone</span>
</div>
</div>`

posts.forEach((element, i) =>{
    postsElement.insertAdjacentHTML('beforeend', postMarkup)

})


