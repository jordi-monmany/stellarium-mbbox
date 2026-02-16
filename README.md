# Stellarium Mbbox

A customizable script for [Stellarium](https://stellarium.org/) that visualizes the Sun's path across different latitudes. Suitable for better understanding of some specific celestial mechanics.

## Features
- **Configurable Tour**: Set start/end latitudes, speed, and date via `sun_arc_travel-config.js`.
- **Heads-Up Display (HUD)**: Live display of Latitude, Date, and Sun Altitude.
- **Smooth Animation**: Automated travel along the meridian.

## Manual Installation
1. Locate your Stellarium User Data Directory:
   - **Linux**: `~/.stellarium/`
   - **Windows**: `%APPDATA%\Stellarium\`
   - **macOS**: `~/Library/Application Support/Stellarium/`
2. Create a `scripts` folder inside if it doesn't exist.
3. Copy `sun_arc_travel.ssc` and `sun_arc_travel-config.js` into the `scripts` folder.

## Usage
1. Open Stellarium.
2. Open the **Script Console** (F12).
3. Select `sun_arc_travel.ssc` from the list and click **Run**.

## Configuration
Open `sun_arc_travel-config.js` in any text editor to change:
- `startLat` / `endLat`: The latitude range for the tour.
- `waitDuration`: Speed of the animation (lower is faster).
- `showHud`: Toggle the on-screen text display.

## Keyboard Shortcuts
While the script is running, you can still use standard Stellarium controls:
- **Arrow Keys**: Pan view.
- **Page Up / Page Down**: Zoom in/out.
- **J / L**: Rewind / Fast Forward time (if you want to see the sun move faster at a specific latitude).
- **K**: Reset time to normal.

## Development Quick Start (Linux/macOS)
Run the provided helper script to automatically deploy files and start the tour:
```bash
./run_tour.sh
```
