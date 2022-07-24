let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: "Faiths most severe tests come not when we see nothing, but when we see a stunning array of evidence that seems to prove our faith vain.",
        person: 'Elisabeth Elliot'
    },
    {
        quote: "It was sadness, lostness, and the worst thing about it was the way it seemed like a default—like it was there all the time, and all her other expressions were just an array of masks she used to cover it up.",
        person: 'Laini Taylor'
    },
    {
        quote: "Without feelings insignificant decisions become excruciating attempts to compare endless arrays of inconsequential things. It's just easier to handle those with emotions.",
        person: 'Ann Leckie'
    },
    {
        quote: "Children are not a zoo of entertainingly exotic creatures, but an array of mirrors in which the human predicament leaps out at us.",
        person: 'John Updike'
    },
    {
        quote: "The Lord said: Time [death] I am, the destroyer of the worlds, who has come to annihilate everyone. Even without your taking part all those arrayed in the [two] opposing ranks will be slain!",
        person: 'The Bhagavad Gita'
    },
    {
        quote: '...human beings are a species splendid in their array of moral equipment, tragic in their propensity to misuse it, and pathetic in their ignorance of the misuse.',
        person: 'Robert Wright'
    },
    {
        quote: 'For what was a person but the sum of all the scraps of their memory and experience: a finite set of components with an infinite array of expressions',
        person: 'Laini Taylor'
    },
    {
        quote: 'The stars moved slowly above her, an array of possibilities, and for the first time in a long time, she felt them mirrored in her heart.',
        person: 'Maggie Stiefvater'
    },
    {
        quote: "The boy took his seat at one side of the fire, his men arrayed about him like the spikes on a porcupine's back, all bristling with spears.",
        person: 'Tony Debajo'
    },
    {
        quote: 'His serenity was but the array of wild flowers niched in his ruin.',
        person: 'Henry James'
    },
];

btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});