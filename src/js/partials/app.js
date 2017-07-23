var model = {
    players: [
        {
            "name": "Patrick",
            "surname": "Valentine",
            "email": "patrickvalentine@kinetica.com",
            "phone": "9184823551",
            "birthday": "01.11.1984"
        },
        {
            "name": "Trudy",
            "surname": "Bruce",
            "email": "trudybruce@kinetica.com",
            "phone": "9534612188",
            "birthday": "12.10.1990"
        },
        {
            "name": "Mcgowan",
            "surname": "Ortega",
            "email": "mcgowanortega@kinetica.com",
            "phone": "9104783953",
            "birthday": "16.12.1993"
        },
        {
            "name": "Morton",
            "surname": "Schwartz",
            "email": "mortonschwartz@kinetica.com",
            "phone": "8445823666",
            "birthday": "03.10.1989"
        },
        {
            "name": "Shawna",
            "surname": "Hinton",
            "email": "shawnahinton@kinetica.com",
            "phone": "8415812175",
            "birthday": "24.10.1983"
        },
        {
            "name": "Renee",
            "surname": "Wilkins",
            "email": "reneewilkins@kinetica.com",
            "phone": "9344422271",
            "birthday": "12.05.1989"
        },
        {
            "name": "Martha",
            "surname": "Ferguson",
            "email": "marthaferguson@kinetica.com",
            "phone": "8564023639",
            "birthday": "22.03.1996"
        },
        {
            "name": "Lindsey",
            "surname": "Johnson",
            "email": "lindseyjohnson@kinetica.com",
            "phone": "9415992890",
            "birthday": "11.08.1980"
        }
    ]
};


var app = angular.module("lotteryApp", ['ui.utils.masks']);
app.controller("lotteryCtrl", function ($scope) {
    $scope.list = model;
    $scope.state = 'save';
    $scope.winnerText = '';

    //add new player
    $scope.addNewPlayer = function() {
        $scope.list.players.push({
            name: $scope.addName,
            surname: $scope.addSurname,
            email: $scope.addEmail,
            phone: $scope.addPhone,
            birthday: $scope.addBirthday
        });
        $scope.addName = '';
        $scope.addSurname = '';
        $scope.addEmail = '';
        $scope.addPhone = '';
        $scope.addBirthday = '';
        console.log(model.players.length);
    };

    //delete player
    $scope.deletePlayer = function(id) {
        $scope.list.players.splice(id, 1);
        console.log(model.players.length);
    };

    //fil fields of edit form
    $scope.editPlayer = function(id) {
        $scope.state = 'edit';
        $scope.eIndex = id;
        $scope.eName = $scope.list.players[id].name;
        $scope.eSurname = $scope.list.players[id].surname;
        $scope.eEmail = $scope.list.players[id].email;
        $scope.ePhone = $scope.list.players[id].phone;
        $scope.eBirthday = $scope.list.players[id].birthday;
    };

    //edit player
    $scope.saveEditedPlayer = function(id, name, surname, email, phone, birthday) {
        $scope.list.players[id].name = name;
        $scope.list.players[id].surname = surname;
        $scope.list.players[id].email = email;
        $scope.list.players[id].phone = phone;
        $scope.list.players[id].birthday = birthday;
        $scope.state = 'save';
        $scope.eIndex = '';
        $scope.eName = '';
        $scope.eSurname = '';
        $scope.eEmail = '';
        $scope.ePhone = '';
        $scope.eBirthday = '';
    };

    $scope.changeState = function () {
        $scope.state = 'save';
        $scope.eIndex = '';
        $scope.eName = '';
        $scope.eSurname = '';
        $scope.eEmail = '';
        $scope.ePhone = '';
        $scope.eBirthday = '';
    };

    $scope.formState = function (state) {
        return state ? "save" : "edit";
    };

    $scope.winner = function() {
        var winId = Math.floor(Math.random() * model.players.length);
        $scope.winnerText = model.players[winId].name + ' ' + model.players[winId].surname;
    };

    $scope.winner();
});