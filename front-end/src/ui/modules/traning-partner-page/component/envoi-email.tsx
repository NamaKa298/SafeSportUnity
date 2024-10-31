export const handleEmailClick = (nomUtilisateur: string, emailUtilisateur: string) => {
    // Logique pour envoyer l'e-mail (peut-être via une fonction API ou un service tiers)
    const emailBody = `Bonjour ${nomUtilisateur},\n\nJe suis intéressé par votre activité d'entraînement.`;
    const mailtoLink = `mailto:${emailUtilisateur}?subject=Demande d'information&body=${encodeURIComponent(emailBody)}`;

    console.log("email:", emailUtilisateur);
    window.open(mailtoLink, '_blank'); // Ouvrir le client de messagerie dans une nouvelle fenêtre
};