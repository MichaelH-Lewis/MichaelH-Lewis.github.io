// Program Header
// Program Author: Michael Lewis
// Program Description: A basic flashlight application
// Program Date: December 7th, 2024
// Program Last Edit: December 10th, 2024

using Microsoft.Maui.Controls;
using Microsoft.Maui.ApplicationModel;

namespace FlashlightApp
{
    public partial class MainPage : ContentPage
    {
        // setting the flashlight off by default
        private bool isFlashlightTurnedOn = false;

        public MainPage()
        {
            InitializeComponent();
        }
        // the functionality for my flashlight button
        private async void FlashlightOn(object sender, EventArgs e)
        {
            isFlashlightTurnedOn = !isFlashlightTurnedOn;

            // if the earlier stated bool flips to true, i.e. the user clicks taps the button, the flashlight turns on
            if (isFlashlightTurnedOn)
            {
                // making use of the built-in MAUI flashlight functionality
                await Flashlight.TurnOnAsync();
            }
            // otherwise it'll be off by default
            else
            {
                await Flashlight.TurnOffAsync();
            }

           // setting the label text to correspond with the flashlight being turned on and off
            StatusLabel.Text = isFlashlightTurnedOn ? "ON" : "OFF";
        }
    }
}
