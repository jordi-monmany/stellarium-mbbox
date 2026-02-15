// Configuration for Sun Arc Travel Script (sun_arc_travel.ssc)
// Edit these values to customize the tour

var TourConfig = {
    // Latitude settings
    startLat: -90,
    endLat: 90,
    latStep: 0.5, // Degrees to move per frame
    enableLocationChange: false,

    // Animation settings
    waitDuration: 0.05, // Seconds to wait between frames (lower = faster)
    returnTrip: true,   // If true, goes back to startLat after reaching endLat

    // Date settings
    // Format: "YYYY-MM-DDT00:00:00"
    enableFixedDate: true,
    fixedDate: "2025-03-21T12:00:00",

    // Visual settings
    showHud: true,
    enableTrails: true,
    enableSolarArc: true,
    enableArchaeoLines: true,
    fontSize: 20,
    fontColor: "#00FF00" // Hex color code
};
