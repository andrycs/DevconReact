import 'whatwg-fetch';

export const FETCH_PROJECTS = 'FETCH_PROJECTS';

const ROOT_URL = 'http://oauth.dev/v1';
const API_KEY = 'Bearer vsoS5n3cpXGckLflGVlM6vQeyO27IhovDKKGffVZ';

export function fetchProjects() {

    const request = fetch(`${ROOT_URL}/projects`)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        return json;
    });

    return {
        type: FETCH_PROJECTS,
        payload: request
    };

}
