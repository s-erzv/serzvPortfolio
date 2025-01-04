const navResponsive = document.getElementById('nav-mobile');

function menuOnMobile(){
    navResponsive.classList.toggle('hidden');
}
 
function showModal(title, content, imageSrc) {
    // Atur konten modal
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalContent').textContent = content;

    // Atur gambar modal
    const modalImage = document.getElementById('modalImage');
    modalImage.src = imageSrc; // Gambar diubah sesuai parameter
    modalImage.alt = title; // Alt disesuaikan dengan judul

    // Tampilkan modal
    document.getElementById('modal').classList.remove('hidden');
}

function closeModal() {
    // Sembunyikan modal
    document.getElementById('modal').classList.add('hidden');
}


// const nameChanger = document.getElementById('name-changer');
// const names = ['Nupers', 'Serzv', 'Sarah'];
// let index = 0;
// let charIndex = 0;
// function typeEffect() {
//     nameChanger.textContent = '';

//     function typeChar() {
//         if (charIndex < names[index].length) {
//             nameChanger.textContent += names[index][charIndex];
//             charIndex++;
//             setTimeout(typeChar, 100); 
//         } else {
//             setTimeout(() => {
//                 charIndex = 0;
//                 index = (index + 1) % names.length;
//                 typeEffect();
//             }, 2000); 
//         }
//     }

//     typeChar();
// }

// typeEffect();