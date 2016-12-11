import fetch from 'whatwg-fetch';

export class Fetch {
    public get(url){
        fetch(url)
        .then((response) => (response.text))
        .catch((ex) => {
            console.error(ex);
        });
    }
}