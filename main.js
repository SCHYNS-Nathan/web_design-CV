// Fade-in

const items = document.querySelectorAll('.fade-in');
for (const item of items) {
    item.classList.add('fade');
}

const cb = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('inview');
        }
    });
}

const obs = new IntersectionObserver(cb);
for(let i=0; i < items.length; i++){
    obs.observe(items[i]);
}


