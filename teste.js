Array.prototype.insert = function ( index, ...items ) {
    this.splice( index, 0, ...items );
};

var arr = [ 'A', 'B', 'E' ];
arr.insert(2, 'C', 'D');

console.log("🚀 ~ arr:", arr)
