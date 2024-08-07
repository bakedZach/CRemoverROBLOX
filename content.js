function changeText() {
    const link = document.querySelector('a.charts-rename-exp-treatment[href="/charts"]');
    if (link && link.textContent.trim() === 'Charts') {
        link.textContent = 'Experiences';
    }

    const header = document.querySelector('div.games-list-header > h1');
    if (header && header.textContent.trim() === 'Charts') {
        header.textContent = 'Experiences';
    }
}

changeText();

const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        if (mutation.type === 'childList' || mutation.type === 'subtree') {
            changeText();
        }
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});