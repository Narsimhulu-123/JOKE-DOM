const url = 'https://jokes-always.p.rapidapi.com/common';

let div = document.createElement("div");
div.className = "div";
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'df2893c22amshba6f0e1d8d25f5ep1449bejsnba547212240c',
        'x-rapidapi-host': 'jokes-always.p.rapidapi.com'
    }
};
async function getData() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        jokeText = result[Object.keys(result)[0]];
        div.innerText = jokeText;
        execute();
    } catch (error) {
        console.error(error);
    }
}
getData();
function execute() {
    document.body.appendChild(div)

}


