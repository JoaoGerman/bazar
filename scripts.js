function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section.classList.contains('show')) {
        section.classList.remove('show');
    } else {
        // Fecha qualquer seção aberta antes de abrir outra (opcional)
        document.querySelectorAll('.card-section').forEach(sec => sec.classList.remove('show'));
        section.classList.add('show');
    }
}
