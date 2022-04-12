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
        image: 'https://picsum.photos/480/250',
        likes: 80
    },
    {
        id: 2,
        name: 'Alessandro',
        user_img: 'https://picsum.photos/200',
        date: '04/12/2022',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sapiente veniam vero unde cumque pariatur natus laboriosam, cupiditate nobis voluptate tempora. Atque repellat debitis unde',
        image: 'https://picsum.photos/480/250',
        likes: 60
    },
    {
        id: 3,
        name: 'Martina',
        user_img: 'https://picsum.photos/200',
        date: '03/15/2022',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sapiente veniam vero unde cumque pariatur natus laboriosam, cupiditate nobis voluptate tempora. Atque repellat debitis unde',
        image: 'https://picsum.photos/480/250',
        likes: 150
    }
]

const likedPosts = []
// console.log(posts);



const postsElement = document.getElementById('posts')

posts.forEach((element, i) =>{
    generatedPosts(postsElement, element)
})



const likes = document.querySelectorAll('.likes');
likes.forEach((like) => {
    like.addEventListener('click', function(){
        this.classList.add('liked');
        console.log(this.id);

        const postId = this.id.replace("like-button-", "")
        console.log(postId);

        const postElement = document.getElementById("post-" + postId);
        console.log(postElement)

        const counterElement = postElement.querySelector(".counter");
        console.log(counterElement);

        counterElement.innerHTML = Number(counterElement.innerHTML) + 1

        if (!likedPosts.includes(postId)){
            likedPosts.push(postId)
        }

        console.log(likedPosts);
        
        /* console.log(this.id);
        const postId = this.id.replace("like-button-", "")
        console.log(postId);

        const postElement = document.getElementById("post-" + postId);
        console.log(postElement)

        const counterElement = postElement.querySelector(".counter");
        console.log(counterElement);

        counterElement += 1 */
        // posts.likes += 1
        // postsElement.innerHTML = ''
        // posts.forEach((element, i) =>{
        //     generatedPosts(postsElement, element)
        // })
        
    })
})



function generatedPosts(father_element, object_name) {
    
    father_element.insertAdjacentHTML('beforeend', `
    <div class="post bg-white p-2 mt-5 mb-3" id="post-${object_name.id}">
        <div class="header d-flex align-items-center">
            <div class="user_logo">
                <img src="${object_name.user_img}" alt="">
            </div>
            <div class="d-flex flex-column mx-3">
                <span>${object_name.name}</span>
                <span>${object_name.date}</span>
            </div>
        </div>
        <div class="content mt-2">
            <p>${object_name.text}</p>
            <div class="post_image">
                <img class="w-100" src="${object_name.image}" alt="">
            </div>
        </div>
        <div class="d-flex justify-content-around p-3">
            <span class="likes" id="like-button-${object_name.id}"><i class="fa-solid fa-thumbs-up"></i> Mi piace</span>
            <span>Piace a <strong class="counter">${object_name.likes}</strong> persone</span>
        </div>
    </div>`)
}