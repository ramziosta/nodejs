import * as url from "node:url";


let photo = {
    title: this.title,
    author: this.author,
    url: this.url,
    description: this.description,
    snap: function() {
        console.log("snapping");
    }
};