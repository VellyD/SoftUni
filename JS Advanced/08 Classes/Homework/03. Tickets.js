function solve(ticketArr, sortingCreteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

        compare (other, criteria){
            if (typeof this[criteria] == 'string'){
                return this[criteria].localeCompare(other[criteria])
            }else{
                return this[criteria] - other[criteria]
            }
        }

    }

    let output = []

    ticketArr.forEach(ticket => {
        let [destination, price, status] = ticket.split('|')
        price = Number(price)
        output.push(new Ticket(destination, price, status))
    });


    return output.sort((a, b) => a.compare(b, sortingCreteria))
}

console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'destination'
));