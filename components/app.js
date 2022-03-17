(function(){
    var app = new Vue ({
        el: '#app',
        data: {
            title: "Selected Profile",
            people: [],
            chosenPerson: null,
            endpoint: "https://randomuser.me/api/?results=",
            quantity: 5,
            key: 0,
        },
        methods: {
            getPeople: function () {
                axios.get(this.endpoint + this.quantity)
                    .then((rsp)=>this.people = this.people.concat(rsp.data.results));
            },
            getChosenPerson: function (key) {
                this.chosenPerson = this.people[key];
                this.chosenPerson.dob.date = this.chosenPerson.dob.date.split('T')[0];

                // FIXME: This is making errors in console
                this.chosenPerson.registered.date = this.chosenPerson.registered.date.split('T');
                this.chosenPerson.registered.date[1] = this.chosenPerson.registered.date[1].split('.')[0];
            },
        },
        created: function () {
            this.getPeople();
        },
    });

})()
