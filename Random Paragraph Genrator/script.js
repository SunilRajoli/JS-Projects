const paragraphs = [
    'JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved.',
    'It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.',
    'APIs are ready-made sets of code building blocks that allow a developer to implement programs that would otherwise be hard or impossible to implement.',
    'They do the same thing for programming that ready-made furniture kits do for home building — it is much easier to take ready-cut panels and screw them together to make a bookshelf than it is to work out the design yourself, go and find the correct wood, cut all the panels to the right size and shape, find the correct-sized screws, and then put them together to make a bookshelf.'
];


const item = document.getElementById("items");
const dataContainer = document.getElementById("data");

function shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;

    while(currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}

function generate() {
    if(item.value == 0) {
        alert("Value cannot be Zero");
    } else if(item.value > paragraphs.length) {
        const randomIndex = Math.floor(Math.random() * paragraphs.length);
        dataContainer.innerHTML = `<p>${paragraphs[randomIndex]}</p>`;
    } else {
        const shuffleParagaraphs = paragraphs;
        shuffle(paragraphs);

        const selectedParagraphs = shuffleParagaraphs.slice(0, item.value);
        const paragraphsHTML = selectedParagraphs.map(paragraphs => `${paragraphs}`).join("");
        dataContainer.innerHTML = paragraphsHTML;
    }
}