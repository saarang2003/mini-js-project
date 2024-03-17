collection =[{
        "quote":"Life isn’t about getting and having, it’s about giving and being.",
        "author":"Kevin Kruse"},
 {
        "quote":"Whatever the mind of man can conceive and believe, it can achieve.",
        "author":"Napoleon Hill"},
 {
        "quote":"Strive not to be a success, but rather to be of value.",
        "author":"Albert Einstein"},
 {
        "quote":"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
        "author":"Robert Frost"},
 {
        "quote":"I attribute my success to this: I never gave or took any excuse.",
        "author":"Florence Nightingale"},
 {
        "quote":"You miss 100% of the shots you don’t take.",
        "author":"Wayne Gretzky"},
 {
        "quote":"The most difficult thing is the decision to act, the rest is merely tenacity.",
        "author":"Amelia Earhart"},
 {
        "quote":"Every strike brings me closer to the next home run.",
        "author":"Babe Ruth"},
 {
        "quote":"Definiteness of purpose is the starting point of all achievement.",
        "author":"W. Clement Stone"},
 {
        "quote":"We must balance conspicuous consumption with conscious capitalism.",
        "author":"Kevin Kruse"},
 {
        "quote":"Life is what happens to you while you’re busy making other plans.",
        "author":"John Lennon"},
 {
        "quote":"We become what we think about.",
        "author":"Earl Nightingale"
 }]



 function generateQoute(){
    const box = document.querySelector(".qoute");
    const ans = document.getElementById("line");

    
        const random = Math.floor(Math.random()*collection.length);
        console.log(random);
        console.log(collection[random].quote);
        ans.textContent = collection[random].quote;
        const author = document.createElement('span');
        author.textContent = ` - ${collection[random].author}`;
        box.innerHTML = '';
        box.append(ans);
        box.append(author);
    


}

generateQoute();

const button = document.getElementById("next");
button.addEventListener("click",()=>{
    generateQoute();
});