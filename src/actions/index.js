import 'whatwg-fetch';

export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const FETCH_PROJECT_BYID = 'FETCH_PROJECT_BYID';
export const FETCH_PROJECT_BYUSERID = 'FETCH_PROJECT_BYUSERID';

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

export function fetchProjectById(id) {

    const request = fetch(`${ROOT_URL}/projects/${id}`)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        return json;
    });

    return {
        type: FETCH_PROJECT_BYID,
        payload: request
    };

}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

export function fetchProjectByUserId(userid) {

    const request = fetch(`${ROOT_URL}/users/${userid}/projects`)
    .then(checkStatus)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        return json;
    }).catch(function(error) {
        console.log('request failed', error);
        return false;
    });

    return {
        type: FETCH_PROJECT_BYUSERID,
        payload: request
    };

}

