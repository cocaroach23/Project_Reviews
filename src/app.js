let currentIndex = 0

let reviews = [
    {   
        
        name: 'Nikole',
        image:'image/bag.jpg',
        publicationDate: '27/07/21',
        datePurchases: '20/07/21',
        grade: '5',
        feedback: 'The quality of materials and finishes is impressive. The bag is well made and looks durable. The design of the bag is simple yet elegant. It is suitable for both casual outings and more formal occasions.'
    },
    {   
        
        name: 'Den',
        image: 'image/boots.jpg',
        publicationDate: '30/01/21',
        datePurchases: '30/01/21',
        grade: '5',
        feedback:'The men`s boots that I purchased turned out to be the perfect choice for me. They look very stylish and elegant, which allows me to wear them both at work and in everyday looks. The quality of materials and workmanship of the boots is at a high level. They are well-tailored and have a durable outsole, which guarantees their durability.'
    },
    {   
        
        name: 'Liza',
        image: 'image/coat.jpg',
        publicationDate: '30/04/21',
        datePurchases: '25/04/21',
        grade: '4',
        feedback: 'The coat has a stylish and fashionable design that stands out from other coats. I love its silhouette and the color scheme that goes well with my wardrobe. The quality of the materials is also decent. However, there are some points that do not allow me to give it a 5. For example, the collar is a bit stiff and uncomfortable, which causes some discomfort when worn.'
    }
]

const container = document.getElementById("container")

function renderReviews() {
    const review = reviews[currentIndex]
        container.innerHTML = `
        <div class="card_reviews>
            <img class="img_book" src="${review.image}" alt="">
                <div class="card_items">
                    <p class="card_name">${review.name}</p>
                    <p class="card_gradee">${review.grade}</p>
                    <p class="card_publicationDate">${review.publicationDate}</p>
                    <p class="card_feedback">${review.feedback}</p>
                    <p class="datePurchases">${review.datePurchases}</p>
                </div>
        </div>
    `
}

const myButtonRight = document.getElementById('button-right')

myButtonRight.addEventListener('click', () => {
    //currentIndex++ 
    if ( currentIndex < 2){
        currentIndex++ 
    } else {
        сorrentIndex = 0
    }


    renderReviews()
})

const myButtonLeft = document.getElementById('button-left')

myButtonLeft.addEventListener('click', () => {
    //currentIndex--
    if ( currentIndex >= -1){
        currentIndex-- 
    } else {
        сorrentIndex = 2
    }
    renderReviews()
})

renderReviews()