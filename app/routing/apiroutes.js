var friends = require("../data/friends.js");



module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });


    app.post("/api/friends", function (req, res) {
        console.log(req.body.scores);

        var user = req.body;

        for (var i = 0; i < user.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
        }

        var friendIndex = 0;
        var minDifference = 50;

        for (var i = 0; i < friends.length; i++) {
            var totalDifference = 0;
            for (var j = 0; j < friends[i].scores.length; j++) {
                var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
                totalDifference += difference;
            }

            if (totalDifference < minDifference) {
                friendIndex = i;
                minDifference = totalDifference;
            }
        }

        friends.push(user);

        res.json(friends[friendIndex]);
    });
};