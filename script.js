
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".game-card");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove a classe 'active' de todos os botões e adiciona no clicado
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filterValue = button.getAttribute("data-filter");

            cards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");

                // Se for 'all' ou corresponder à categoria, mostra. Senão, esconde.
                if (filterValue === "all" || filterValue === cardCategory) {
                    card.style.display = "flex";
                    // Pequeno truque para efeito de fade-in
                    setTimeout(() => {
                        card.style.opacity = "1";
                    }, 10);
                } else {
                    card.style.opacity = "0";
                    card.style.display = "none";
                }
            });
        });
    });
});
