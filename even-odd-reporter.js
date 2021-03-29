// const links = document.getElementsByTagName("a");

// for (i = 1; i <= links.length; i++) {
//     console.log("This is  link number " + i);
// }

// document.write("all links now looped");

// const isEven = 0;

// !!OPDRACHT 1!!
// for (i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//         console.log(i + " is even")
//     } else {
//         console.log(i + " is oneven")
//     }
// };

// !!OPDRACHT 2!!
// const tafeltje = function (nummer) {
//     for (i = 1; i <= 10; i++)
//         console.log(i + " x " + nummer + " = " + i * nummer);
// }
// tafeltje(5);

function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'E';
    }
}

const scoreloop = function () {

    for (i = 60; i <= 100; i++) {
        // console.log("Voor " + i + " punten, krijg je een ");
        if (i > 90) {
            console.log("Voor " + i + " punten, krijg je een A");
        } else if (i > 80) {
            console.log("Voor " + i + " punten, krijg je een B");
        } else if (i > 70) {
            console.log("Voor " + i + " punten, krijg je een C");
        } else if (i > 65) {
            console.log("Voor " + i + " punten, krijg je een D");
        } else {
            console.log("Voor " + i + " punten, krijg je een E");
        }
    }

}
scoreloop();