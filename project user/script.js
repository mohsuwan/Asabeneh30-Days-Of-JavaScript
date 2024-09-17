const validateInput = (inputId, pattern, errorMessage) => {
  const input = inputId.value;
  const errorDiv = inputId.nextElementSibling;
  if (!pattern.test(input)) {
    errorDiv.textContent = errorMessage;
    return false;
  } else {
    errorDiv.textContent = "";
    return true;
  }
};
 
const firstNameValid = () => {
  return validateInput(
    (FirstName = document.getElementById("First-Name")),
    /^[A-Za-z0-9]{3,16}$/,
    "First Name most be alphanumeric and contain 3-16 characters"
  );
};

const lastNameValid = () => {
  return validateInput(
    (LastName = document.getElementById("Last-Name")),
    /^[A-Za-z0-9]{3,16}$/,
    "Last Name most be alphanumeric and contain 3-16 characters"
  );
};
const emailValid = () => {
  return validateInput(
    (Email = document.getElementById("Email")),
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
    "Email most be a valid address e.g. example@example.com"
  );
};

const passwordValid = () => {
  return validateInput(
    (Password = document.getElementById("Password")),
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,20}$/,
    "Password must be alphanumeric (@,_and-are also are allowed) and btween 6-20 character"
  );
};

const telephoneValid = () => {
  return validateInput(
    (Telephone = document.getElementById("Telephone")),
    /^\d{3}-\d{3}-\d{4}$/,
    "A valid  Telephone number(11 siget and 333-333-3334)"
  );
};

const bioValid = () => {
  return validateInput(
    (YourBio = document.getElementById("Your-bio")),
    /^[A-Za-z0-9,\.\s'"-]{8,50}$/,
    "Bio must contain only alphanumeric letters, underscores, hyphen and be 8 - 50 characters"
  );
};
let allInfoCard = {
  firstName: "",
  lastName: "",
  Email: "",
  Password: "",
  Telephone: "",
  Bio: "",
};

// let arrayOfInputs = [];

document.getElementById("Submit-button").addEventListener(
  "click",
  (onSubmit = () => {
    allInfoCard = {
      firstName: document.getElementById("First-Name").value,
      lastName: document.getElementById("Last-Name").value,
      Email: document.getElementById("Email").value,
      Password: document.getElementById("Password").value,
      Telephone: document.getElementById("Telephone").value,
      Bio: document.getElementById("Your-bio").value,
    };

    if (
      firstNameValid() &&
      lastNameValid() &&
      emailValid() &&
      passwordValid() &&
      telephoneValid() &&
      bioValid()
    ) {
      console.log(allInfoCard);
    }

    // arrayOfInputs.push(allInfoCard);

    // };

    //  firstStep : function onclick
    // SeccondStep :Show required msg for inputs
    // ThirdStep:  collect data froim inputs

    //  console.log("")
    //   //   console.log(validateForm())
    //   if (
    //     firstNameValid &&
    //     lastNameValid &&
    //     emailValid &&
    //     passwordValid &&
    //     telephoneValid &&
    //     bioValid
    //   ) {

    //     document.getElementById("Submit-button").className = "buttonIfAll";
    //   } else {
    //     document.getElementById("Submit-button").className = "buttonAll";
    //   }

    //   return (
    //     firstNameValid ||
    //     lastNameValid ||
    //     emailValid ||
    //     passwordValid ||
    //     telephoneValid ||
    //     bioValid
    //   );
    // };
    // if (
    //   document.getElementById("First-Name").value == "" &&
    //   document.getElementById("Last-Name").value == "" &&
    //   document.getElementById("Email").value == "" &&
    //   document.getElementById("Password").value == "" &&
    //   document.getElementById("Telephone").value == "" &&
    //   document.getElementById("Your-bio").value == ""
    // ) {
    //   validateForm = () => {
    //     firstNameValid = () => {
    //       validateInput(
    //         (FirstName = document.getElementById("First-Name")),
    //         /^[A-Za-z0-9]{3,16}$/,
    //         "First Name most be alphanumeric and contain 3-16 characters"
    //       );
    //     };
    //     // console.log(firstNameValid());

    //     lastNameValid = () => {
    //       validateInput(
    //         (LastName = document.getElementById("Last-Name")),
    //         /^[A-Za-z0-9]{3,16}$/,
    //         "Last Name most be alphanumeric and contain 3-16 characters"
    //       );
    //     };
    //     emailValid = () => {
    //       validateInput(
    //         (Email = document.getElementById("Email")),
    //         /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
    //         "Email most be a valid address e.g. example@example.com"
    //       );
    //     };

    //     passwordValid = () => {
    //       validateInput(
    //         (Password = document.getElementById("Password")),
    //         /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,20}$/  ,
    //         "Password must be alphanumeric (@,_and-are also are allowed) and btween 6-20 character"
    //       );
    //     };

    //     telephoneValid = () => {
    //       validateInput(
    //         (Telephone = document.getElementById("Telephone")),
    //         /^\d{3}-\d{3}-\d{4}$/,
    //         "A valid  Telephone number(11 siget and 333-333-3334)"
    //       );
    //     };

    //     bioValid = () => {
    //       validateInput(
    //         (YourBio = document.getElementById("Your-bio")),
    //         /^[A-Za-z0-9,\.\s'"-]{8,50}$/,
    //         "Bio must contain only alphanumeric letters, underscores, hyphen and be 8 - 50 characters"
    //       );
    //     };
    //   };
    // } else {
    // }

    // if (
    //   document.getElementById("First-Name").value &&
    //   document.getElementById("Last-Name").value &&
    //   document.getElementById("Email").value &&
    //   document.getElementById("Password").value &&
    //   document.getElementById("Telephone").value &&
    //   document.getElementById("Your-bio").value
    // ) {
    //   //     arrayOfInputs.push(allInfoCard) = {

    //   //   };
    //   console.log();
    // }
  })
);
