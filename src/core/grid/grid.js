import React from "react";

//Import components utils
import classNames from "../../class-names.js";
import getProps from "../../get-props.js";

//Import grid styles
import "siimple/scss/grid/_grid.scss";

//Grid class
export class Grid extends React.Component {
    render() {
        let props = getProps(this.props, ["className"]);
        props.className = classNames("siimple-grid", this.props.className);
        return React.createElement("div", props, this.props.children);
    }
}

//Grid row class
export class GridRow extends React.Component {
    render() {
        let props = getProps(this.props, ["className"]);
        props.className = classNames("siimple-grid-row", this.props.className);
        return React.createElement("div", props, this.props.children);
    }
}

//Grid column class
export class GridCol extends React.Component {
    render() {
        let props = getProps(this.props, ["className", "size", "extraLarge", "large", "medium", "small", "extraSmall"]);
        let classList = ["siimple-grid-col"];
        //Check the column size
        if (typeof this.props.size === "number" || typeof this.props.size === "string") {
            classList.push("siimple-grid-col--" + this.props.size);
        }
        if (typeof this.props.extraLarge === "number" || typeof this.props.extraLarge === "string") {
            classList.push("siimple-grid-col--xl-" + this.props.extraLarge);
        }
        if (typeof this.props.large === "number" || typeof this.props.large === "string") {
            classList.push("siimple-grid-col--lg-" + this.props.large);
        }
        if (typeof this.props.medium === "number" || typeof this.props.medium === "string") {
            classList.push("siimple-grid-col--md-" + this.props.medium);
        }
        if (typeof this.props.small === "number" || typeof this.props.small === "string") {
            classList.push("siimple-grid-col--sm-" + this.props.medium);
        }
        if (typeof this.props.extraSmall === "number" || typeof this.props.extraSmall === "string") {
            classList.push("siimple-grid-col--xs-" + this.props.extraSmall);
        }
        props.className = classNames(classList, this.props.className);
        return React.createElement("div", props, this.props.children);
    }
}

//Column default props
GridCol.defaultProps = {
    "size": null, 
    "extraLarge": null,
    "large": null, 
    "medium": null, 
    "small": null,
    "extraSmall": null
};
