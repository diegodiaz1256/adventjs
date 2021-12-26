function checkIsSameTree(treeA, treeB) {
    // ¡No olvides compartir tu solución en redes!
    function treeToList(tree) {
        let elements = [];
        for (let key in tree) {
            if (typeof tree[key] === 'object') {
                elements = elements.concat(treeToList(tree[key]));
            } else if (tree[key] !== null) {
                elements.push(key+'-'+tree[key]);
            }
        }
        return elements;
    }
    function serializeTree(tree) {
        let list = treeToList(tree);
        let sorted = list.sort(function(a, b) {
            if (a > b) {
                return 1;
            } else if (b > a) {
                return -1;
            }
            return 0;
        });
        return sorted.join('-');
    }

    let serializedTreeA = serializeTree(treeA);
    let serializedTreeB = serializeTree(treeB);

    return serializedTreeA === serializedTreeB;

}

module.exports=checkIsSameTree