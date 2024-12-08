document.addEventListener("DOMContentLoaded", () => {
    const citations = [
        "'La vie est belle.'",
        "'Le succès n’est pas la clé du bonheur, le bonheur est la clé du succès.'",
        "'Apprends comme si tu vivais pour toujours, vis comme si tu devais mourir demain.'",
        "'Le bonheur n’est pas quelque chose de prêt à l’emploi. Il vient de vos propres actions.'",
        "'Ne juge pas chaque jour à la récolte que tu fais, mais aux graines que tu plantes.'",
        "'Le courage n'est pas l'absence de peur, mais la capacité de la vaincre.'",
        "'La meilleure façon de prédire l’avenir est de le créer.'",
        "'L’échec est le fondement de la réussite.'"
    ];

    let index = 0;
    const citationElement = document.getElementById("citation");

    function afficherCitation() {
        citationElement.textContent = citations[index];
        index = (index + 1) % citations.length;
    }

    setInterval(afficherCitation, 3500);
    afficherCitation();
});
