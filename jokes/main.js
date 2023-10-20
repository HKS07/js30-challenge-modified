// const endpoint = 'https://github.com/15Dkatz/official_joke_api/blob/master/jokes/index.json';
const endpoint = 'https://api.chucknorris.io/jokes/random';


function showJoke(e)
{
    const prom = fetch(endpoint)
                .then(reponse => {
                    if(!reponse.ok)
                    {
                        throw new Error('Network response not ok');
                    }
                    return reponse.json();
                })
                .then(data => {
                    showJoke(data.value);
                })
                .catch(error => {
                    console.log(error);
                });
    const joke1 = document.querySelector('.joke1');
    joke1.textContent = e;
}

const button = document.querySelector('.joke');
button.addEventListener('click',showJoke);
// document.addEventListener('')



