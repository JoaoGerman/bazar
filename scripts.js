function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.classList.contains('show')) {
        section.classList.remove('show');
    } else {
        section.classList.add('show');
    }
}
