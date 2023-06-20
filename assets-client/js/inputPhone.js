$(document).ready(() => {

    $("#telephone").intlTelInput({
        showFlags: true,
        preferredCountries: ["az"],
        autoPlaceholder: "polite",
        nationalMode: false,
    });
    
})

