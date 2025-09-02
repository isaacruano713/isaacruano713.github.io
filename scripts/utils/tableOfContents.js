// Turns an object into an array if it isn't already an array.
function arrayForce(object) {
    return Array.isArray(object) ? object : [object];
}

// Turns an array into a map where the values of the array become the
// keys of the map and the indexes become the values of the map
function mapFromArray(arr) {
    let result = new Map();
    for (let i = 0; i < arr.length; i++) {
        result.set(arr[i], i);
    }
    return result;
}

// Returns the next sibling of an element (node) with the same tag (tag)
// !!!!! Try to find a way to fix the function to only need to check one
// null case
//
// Make sure your tags are all uppercase
function nextSibWithTag(node, tags) {
    tags = arrayForce(tags);
    if (!node) {
        return null;
    }
    node = node.nextElementSibling;
    if (!node) {
        return null;
    }
    if (tags.includes(node.tagName)) {
        return node;
    }
    return nextSibWithTag(node, tags);
}

// Returns all of the next siblings of an element (node) with the same tag (tag)
function allNextSibWithTag(node, tags) {
    let siblings = [];
    node = nextSibWithTag(node, tags);
    while (node !== null) {
        siblings.push(node);
        node = nextSibWithTag(node, tags);
    }
    return siblings;
}

// Creates a table of contents in a block elemement
//
// Properties
// ----------
// table[HTML El] - an HTML element where the table will be created
//      - If not specified, selects the first element of class "table-of-contents"
// section[HTML El] - an HTML element where the headings for the table are sourced
//      - If not specified, uses the parent of the table object
// tags[Arr(str)] - an array of capitalized strings indicating which tags should
// be searched for to create the table of contents
// title[str] - the title of the table of contents given as a string
// types[Arr(str)] - an array of strings that indicates what types the lists
// should be for each level of the table of contents
// marginTop[str] - a string indicating how much margin that should be at the top
// after the links from the table of contents take you to another element
//      - The default is 0, but it is worth increasing especially if there are
//      any absolute or sticky positioned elements at the top of the window
// ntags[int] - the number of types of tags used to make the table
// tagMap[Map(str, int)] - a map that maps the names of the tags to their indexes
// in the tags array
//
// Output
// ------
// A div with a title and links to each heading or otherwise specified tag that
// serves as a table of contentss
class TableOfContents {
    constructor(table = document.getElementsByClassName("table-of-contents")[0],
                section = undefined,
                tags = ["H2", "H3"],
                title = "Table of Contents",
                types = ["1", "a", "i", "1", "a", "i"],
                marginTop = "0rem") {
        this.table = table;
        this.section = section;
        this.tags = tags;
        this.title = title;
        this.tagMap = mapFromArray(this.tags);
        this.ntags = tags.length;
        this.types = types;
        this.marginTop = marginTop;
    }
    build() {
        this.table.innerHTML = "";
        let title = document.createElement("h2");
        let titleText = document.createTextNode(this.title);
        title.appendChild(titleText);
        this.table.appendChild(title);

        let current;
        if (this.section) {
            current = this.section.getElementsByTagName(this.tags[0])[0];
        } else {
            current = nextSibWithTag(this.table, this.tags[0]);
        }
        let contentsList = document.createElement("ol");
        contentsList.type = this.types[0];
        let nodes = [contentsList, ...new Array(this.ntags).fill(0)];
        while (current) {
            let index = this.tagMap.get(current.tagName);
            let newItem = document.createElement("li");
            current.style.scrollMarginTop = this.marginTop;
            newItem.addEventListener("click", ((node) => {
                return () => { node.scrollIntoView(); };
            })(current));
            let textNode = document.createTextNode(current.innerText);
            newItem.appendChild(textNode);
            if (nodes[index] === 0) {
                for (let i = 1; i <= index; i++) {
                    if (nodes[i] !== 0) {
                        continue;
                    }
                    let newList = document.createElement("ol");
                    newList.type = this.types[i];
                    nodes[i - 1].appendChild(newList);
                    nodes[i] = newList;
                }
            }
            nodes[index].appendChild(newItem);
            for (let i = index + 1; i < this.ntags; i++) {
                nodes[i] = 0;
            }
            current = nextSibWithTag(current, this.tags);
        }
        this.table.appendChild(contentsList);
    }
}