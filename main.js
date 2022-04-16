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
        surname: 'Sada',
        user_img: 'https://picsum.photos/200',
        date: '04/12/2022',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sapiente veniam vero unde cumque pariatur natus laboriosam, cupiditate nobis voluptate tempora. Atque repellat debitis unde',
        image: 'https://picsum.photos/480/250',
        likes: 80
    },
    {
        id: 2,
        name: 'Alessandro',
        surname: 'Rossi',
        user_img: 'https://picsum.photos/200',
        date: '04/12/2022',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sapiente veniam vero unde cumque pariatur natus laboriosam, cupiditate nobis voluptate tempora. Atque repellat debitis unde',
        image: 'https://picsum.photos/480/250',
        likes: 60
    },
    {
        id: 3,
        name: 'Martina',
        surname: 'Bianchi',
        user_img: '',
        date: '03/15/2022',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sapiente veniam vero unde cumque pariatur natus laboriosam, cupiditate nobis voluptate tempora. Atque repellat debitis unde',
        image: 'https://picsum.photos/480/250',
        likes: 150
    },
    {
        id: 4,
        name: 'Fabio',
        surname: 'Bianchi',
        user_img: '',
        date: '03/15/2022',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sapiente veniam vero unde cumque pariatur natus laboriosam, cupiditate nobis voluptate tempora. Atque repellat debitis unde',
        image: 'https://picsum.photos/480/250',
        likes: 150
    }
]

const likedPosts = []
// console.log(posts);



const postsElement = document.getElementById('posts')

posts.forEach((element) =>{
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
                <span>${object_name.name + " " + object_name.surname}</span>
                <span class="date">${object_name.date}</span>
            </div>
        </div>
        <div class="content mt-2">
            <p>${object_name.text}</p>
            <div class="post_image">
                <img class="w-100" id="post_image" src="${object_name.image}" alt="">
            </div>
        </div>
        <div class="d-flex justify-content-around p-3">
            <span class="likes" id="like-button-${object_name.id}"><i class="fa-solid fa-thumbs-up"></i> Mi piace</span>
            <span>Piace a <strong class="counter">${object_name.likes}</strong> persone</span>
        </div>
    </div>`)


    if (object_name.user_img === ""){
        object_name.user_img = object_name.name.charAt(0) + object_name.surname.charAt(0)
        //console.log(object_name.image);
        const postNumber = document.getElementById("post-" + object_name.id);
        //console.log(postNumber);
        const postImageElement = postNumber.querySelector('.user_logo')
        //console.log(postImageElement);
        postImageElement.innerHTML = `<span class="no_image">${object_name.user_img}</span>`
    }

    //Cambio il formato della data da americano ad italiano
    const postNumber = document.getElementById("post-" + object_name.id);
    const postDate = postNumber.querySelector('.date').innerHTML
    /* console.log(postDate); */
    const splitDate = postDate.split("/")
    console.log(splitDate, splitDate[1]);
    const finalDate = `${splitDate[1]}/${splitDate[0]}/${splitDate[2]}`
    /* console.log(finalDate); */
    /* console.log(postNumber); */
    const postDateElement = postNumber.querySelector('.date')
    /* console.log(postDateElement); */
    postDateElement.innerHTML = finalDate
}