export const useOffer = (desc, price) => {
    const numberCut = price * desc;
    const newPrice = (price - numberCut).toFixed(2);
    return {
        newPrice
    }
}