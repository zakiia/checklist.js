function pageCalculator(book1Qunatity, book2Quantity, book3Quantity) {
    const book1Page = 100;
    const book2Page = 200;
    const book3Page = 300;
    
    const book1PageRequirement = book1Page * book1Qunatity;
    const book2PageRequirement = book2Page * book2Quantity;
    const book3PageRequirement = book3Page * book3Quantity;

     const totalPage = book1PageRequirement + book2PageRequirement + book3PageRequirement;
     return totalPage;
}

const pageRequirment = pageCalculator(5, 7, 3);
console.log(pageRequirment);