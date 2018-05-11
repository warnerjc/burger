// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-devoured").on("click", function (event) {
    let id = $(this).data("id");

    let isDevoured = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: isDevoured
    }).then(
      function () {
        console.log("changed devoured to: " + isDevoured.devoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let newBurger = {
      burgerName: $("#new-burger").val().trim()
    };

    console.log("my new burger: " + newBurger);

    if (newBurger.burgerName === "") {
      alert("Enter a valid burger name!");
    } else {
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    }
  });
});