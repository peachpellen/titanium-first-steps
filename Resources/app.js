// Hide the status bar
Titanium.UI.iPhone.hideStatusBar()

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor("#f00");

// create a new window called "screen1" and make the background color light blue
var screen1 = Titanium.UI.createWindow({
	backgroundColor: "#0df"
})

// create a new button called "button" and set width, height and top. It will be centered on x by default
var button = Titanium.UI.createButton({
	title: "Press Me",
	top: "80%",
	width: 100,
	height: 50
})

// function for when the button is pressed
pressButton = function (event)
{
	// this is a print statement
	Titanium.API.info("User clicked the button")
}
// add the event listener to the button
button.addEventListener("click", pressButton)

// add the button to screen1
screen1.add(button)

// open screen1
screen1.open()