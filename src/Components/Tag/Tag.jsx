import React from "react";
import './tag.css'
const Tag = () =>{
    return(
        <div id="hide-header" className="container-tag">
            <a href="#"><h1>Coventry</h1></a>
        </div>
    )
}
var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if(prevScrollpos > currentScrollPos) {
            document.getElementById("hide-header").style.top = "-80px";
        }else{
            document.getElementById("hide-header").style.top = "0";
        }prevScrollpos = currentScrollPos;
    }

export default Tag