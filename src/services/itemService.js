var data = [
    {
        _id: "1",
        title: "Boogie Board",
        description:"This is a boogie board",
        image: "boogie-board.jpg",
        price: 59.99,
        category: "Boogie Boards",
        discount: 5,
    },
    {
        _id: "2",
        title: "Grom Board",
        description:"This is a board for kids",
        image: "gromboard.jpg",
        price: 175.99,
        category: "Kids Boards",
        discount: 5,
    },
    {
        _id: "3",
        title: "Hybrid Board",
        description:"This is a hybrid step up board",
        image: "hybrid-board.jpg",
        price: 599.99,
        category: "Hybrid Boards",
        discount: 5,
    },
    {
        _id:"4",
        title: "Longboard",
        description:"This is a long board",
        image: "longboard.jpg",
        price: 899.99,
        category: "Long Boards",
        discount: 5,
    },
    {
        _id:"5",
        title: "Midlength Board",
        description:"This is a mid length board",
        image: "Midlength-board.jpg",
        price: 399.99,
        category: "Boogie Boards",
        discount: 5,
    },
    {
        _id:"6",
        title: "Short Board",
        description:"This is a short board",
        image: "shortboard.jpg",
        price: 699.99,
        category: "Short Boards",
        discount: 5,
    },
    {
        _id:"7",
        title: "Softboard",
        description:"This is a soft top board",
        image: "softboard.jpg",
        price: 199.99,
        category: "Soft Boards",
        discount: 5,
    },
    {
        _id:"8",
        title: "Skim Board",
        description:"This is a skim board",
        image: "skimboard.jpg",
        price: 79.99,
        category: "Skim Boards",
        discount: 5,
    },
    {
        _id:"9",
        title: "Step Up Board",
        description:"This is a step board",
        image: "stepupboard.jpg",
        price: 399.99,
        category: "Step Up Boards",
        discount: 5,
    }, 
];

class ItemService {
    getCatalog(){
        // logic to connect to a server and retrieve the list of items
        // return mock data  
        return data;
    }

    getStock(itemId){

    }

    getItemPrice(coupon){

    }


}

export default ItemService;
