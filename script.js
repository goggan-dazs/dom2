// Exercise 1
//Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)

const paragraph = document.querySelector('p');
paragraph.innerHTML = paragraph.innerText
    .split(' ')
    .map(word => word.length > 8 ? `<span style="background-color: yellow">${word}</span>`: word)
    .join(' ');


    //Exercise 2
    //Add a link back to the source of the text after the paragraph tag.
    //(https://forcemipsum.com/)

    const link = document.createElement('a');
    link.href = 'https://forcemipsum.com/';
    link.innerText = 'Text generated from Forcem Ipsum';
    document.body.appendChild(link);

    //Exercise 3
    //Split each new sentence on to a seperate line in the paragraph text.
    //A sentence can be assumed to be a string of text terminated with a period (.)

paragraph.innerHTML = paragraph.innerHTML
    .split('.')
    .join('.</p><p>') + '</p>';

    //Exercise 4
    //Count the number of words in the paragraph tag and display the count after the heading.
    //You can assume that all words are separated by one singular whitespace.

    const wordCount = paragraph.innerText.split(' ').length;
    const wordCountElem = document.createElement('div');
    wordCountElem.innerText = `${wordCount} words`;
    document.body.insertBefore(wordCountElem, paragraph);

    







