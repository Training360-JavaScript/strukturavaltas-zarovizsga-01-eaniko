function manipulateDom() {
    const elements = document.querySelectorAll('.quote');
    elements.forEach((e) => {
        e.style.border = 'blue';
        e.style.backgroundColor = 'lightblue';
        e.style.fontStyle = 'italic';
    });
}

export { manipulateDom };