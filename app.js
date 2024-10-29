let main = document.querySelectorAll('.clickable')

main.forEach(item => {
    item.addEventListener('click', () => {
        let color = document.querySelectorAll('.clickable');
        
        color.forEach(i => {
            i.classList.remove('clicked');
        });
        
        item.classList.add('clicked');
    });
});