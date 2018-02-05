exports.seed = function(knex, Promise) {
  return knex('activity').del()
    .then(function () {
      return knex('activity').insert([
        {id: 1,
          interest: "science",
          articleURL: "https://apnews.com/7fb0980b01e44421af41e6ef530c20b7",
          headline: "Trump Vindicated",
          image: "https://storage.googleapis.com/afs-prod/media/media:c0a0996113e24273884ea1c9fb6b71cd/800.jpeg",
          timeReading: 10,
          date: "2018-02-08",
          _userId: 1
        }
      ]).then(() => {
        return knex.raw("ALTER SEQUENCE activity_id_seq RESTART WITH 2;");
      });
    });
};
