// Utilizing the .concat() method
function full_sentence() {
    var part_1 = "Guess what time ";
    var part_2 = "it is... ";
    var part_3 = "Time to study!";
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("StringMethod").innerHTML = whole_sentence;
}

// Utilizing the .slice() method
function slice_Method(){
    var Sentence = "My cat, Pixie, loves to chase butterflies in the garden.";
    var Section = Sentence.slice(8,13);
    document.getElementById("Slice").innerHTML = Section;
}

// Utilizing the .toString() method
function string_Method() {
    var X = 777;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

// Utilizing the .toPrecision() method
function precision_Method() {
    var X = 1231.1312777
    document.getElementById("Precision").innerHTML = X.toPrecision(10)
}