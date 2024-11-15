const themeToggle = document.getElementById('theme-toggle');
if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-mode');
themeToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) localStorage.setItem('theme', 'dark');
    else localStorage.setItem('theme', 'light');
});

//# sourceMappingURL=index.c719088e.js.map