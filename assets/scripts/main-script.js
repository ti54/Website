// Function to open a new email window with a set receiver
function lahetaPostia(href)
{
    let vastaanottaja = "timo.uimonendev";
    vastaanottaja += "@gmail.com";
    let uri = "mailto:";
    uri += encodeURIComponent(vastaanottaja);
    window.location.href = uri;
};
