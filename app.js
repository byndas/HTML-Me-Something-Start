const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        console.log('entry:', entry);
    });
    if (entry.isIntersecting) {
        entry.target.classList.add('show');
    } else {
        entry.classList.remove('show');
    }
});


const hiddenTags = document.querySelectorAll(".hidden");
hiddenTags.forEach(el => { observer.observe(el) });