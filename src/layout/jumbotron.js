import React from "react";
import {classNames, hyperscript as h} from "neutrine-utils";
import {omit} from "kofi";

import "siimple/scss/layout/_jumbotron.scss";

//Jumbotron base component
export class Jumbotron extends React.Component {
    render() {
        //Clone the jumbotron props 
        let props = omit(this.props, ["children", "className", "color", "size"]);
        //Initialize the jumbotron class names list
        let classList = ["siimple-jumbotron"];
        //Check the jumbotron color
        if (typeof this.props.color === "string") {
            classList.push("siimple-jumbotron--" + this.props.color.toLowerCase());
        }
        //Check the jumbotron size property
        if (typeof this.props.size === "string") {
            classList.push("siimple-jumbotron--" + this.props.size.toLowerCase());
        }
        //Generate the jumbotron classname
        props.className = classNames(classList, this.props.className);
        //Return the parent div
        return h("div", props, this.props.children);
    }
}

//Jumbotron default props
Jumbotron.defaultProps = {
    color: null, 
    size: null,
    style: null
};

//Jumbotron title
export class JumbotronTitle extends React.Component {
    render() {
        //Clone the jumbotron props
        let props = omit(this.props, ["children", "className"]);
        props.className = classNames("siimple-jumbotron-title", this.props.className);
        //Return the jumbotron title element
        return h("div", props, this.props.children);
    }
}

//Jumbotron title default props 
JumbotronTitle.defaultProps = {
    style: null
};

//Jumbotron subtitle 
export class JumbotronSubtitle extends React.Component {
    render() {
        //Clone the jumbotron subtitle props
        let props = omit(this.props, ["children", "className"]);
        props.className = classNames("siimple-jumbotron-subtitle", this.props.className);
        //Return the jumbotron subititle element
        return h("div", props, this.props.children);
    }
}

//Jumbotron subtitle default props 
JumbotronSubtitle.defaultProps = {
    style: null
};

//Jumbotron detail component 
export class JumbotronDetail extends React.Component {
    render() {
        //Clone the jumbotron detail props
        let props = omit(this.props, ["children", "className"]);
        props.className = classNames("siimple-jumbotron-detail", this.props.className);
        //Return the jumbotron detail element
        return h("div", props, this.props.children);
    }
}

//Jumbotron detail default props 
JumbotronDetail.defaultProps = {
    style: null
};

