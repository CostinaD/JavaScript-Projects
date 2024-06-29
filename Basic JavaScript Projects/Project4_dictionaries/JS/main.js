function my_Dictionary() {
    var travels = {
        destination1: "Paris",
        destination2: "New York",
        destination3: "Tokyo",
        destination4: "Sydney",
    };
    delete travels.destination1; // This removes the Genre KVP from the dictionary before it is displayed
    document.getElementById("Dictionary").innerHTML = travels.destination1;
}
