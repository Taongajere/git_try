document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to the button
    document.getElementById("newsletter_button").addEventListener("click", function() {
        // Open a new popup window with the specified URL
        var popup = window.open("forms/form.html", "Popup", "width=450,height=650");
    });
});

console.log("hi bro")