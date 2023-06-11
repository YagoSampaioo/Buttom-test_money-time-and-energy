$(function () {
    $(".toggleButton").click(function () {
        var buttonId = $(this).attr("id");
        var selectedButtons = $(".toggleButton.on").map(function () {
            return $(this).attr("id");
        }).get();
        var shouldDeselect = false;
        if (selectedButtons.length === 2) {
            if ((buttonId === "toggleButton1" && selectedButtons.includes("toggleButton3")) ||
                (buttonId === "toggleButton3" && selectedButtons.includes("toggleButton1"))) {
                shouldDeselect = true;
            } else if (buttonId === "toggleButton2") {
                shouldDeselect = true;
            }
        }
        if (shouldDeselect) {
            var deselectedButtonId = selectedButtons.find(function (selectedButtonId) {
                return selectedButtonId !== buttonId;
            });
            $("#" + deselectedButtonId).removeClass("on");
        }
        $(this).toggleClass("on");
    });
});