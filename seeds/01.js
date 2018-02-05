
exports.seed = function(knex, Promise) {
  return knex('userinformation').del()
    .then(function () {
      return knex('userinformation').insert([
        {id: 1,
          username: "demouser",
          password: "1234",
          name: "Demo User",
          email: "demouser@gmail.com",
          firstInterest: "science",
          firstInterestTime: 0,
          secondInterest: "sports",
          secondInterestTime: 0,
          thirdInterest: "business",
          thirdInterestTime: 0
        }
      ]).then(() => {
        return knex.raw("ALTER SEQUENCE userinformation_id_seq RESTART WITH 2;");
      });
    });
};
