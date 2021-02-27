import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import Home from "./views/Home.js";



const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        {path: "/", view: Home},
        {path: "/posts", view: Posts},
        {path: "/home", view: Home}
        // {path: "/posts", view: () => console.log("Posts")},
        // {path: "/settings", view: () => console.log("Settings")},
    ];
    //Test
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);
    
    if(!match){
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    const view = new match.route.view(); //nova instancia

    document.querySelector("#app").innerHTML = await view.getHtml();

    
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if(e.target.matches("[data-link")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
})