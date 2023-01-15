const mongoose = require("mongoose");
const User = require("./User");
mongoose.set("strictQuery", true);

mongoose.connect(
  "mongodb://localhost/testdb"
  //   () => {
  //     console.log("connected");
  //   },
  //   (e) => console.error(e)
);

run();
async function run() {
  //   Method 1 one of create a new record
  //   const newUser = new User({ name: "Chinaza", age: 26 });
  //   await newUser.save();
  //   console.log("User Saved", newUser);

  try {
    const user = await User.create({
      name: "Mary",
      age: 24,
      email: "TEST@test.com",
      hobbies: ["Weight Lifting", "Bowling"],
      address: {
        street: "Main Str",
        city: "Umuahia",
      },
    });
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}
