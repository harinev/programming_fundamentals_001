function addVAT(price) {
    return price + (0.2 * price);
}
function getFullName (firstName, lastName){
    return firstName +" "+ lastName
}
function makeHalfPrice(price) {
    var disc= price/2;
    return disc
    }
function countBooks(arr){
    return arr.length;
    }

module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,
    countBooks
};
