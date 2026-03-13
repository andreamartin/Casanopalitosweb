# Casa Nopalitos Website

This is the official website for Casa Nopalitos, a beautiful rental property in El Sauzal, Mexico.

## Features
- Responsive design with Tailwind CSS
- Smooth animations with Motion
- High-quality imagery
- Integration with Airbnb for bookings
- Detailed amenities and location information

## Development

To run the project locally:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment to GitHub Pages

To host this on GitHub Pages:

1. Install the `gh-pages` package:
   ```bash
   npm install gh-pages --save-dev
   ```

2. Add the following scripts to your `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. Add a `homepage` field to your `package.json`:
   ```json
   "homepage": "https://<your-username>.github.io/<your-repo-name>"
   ```

4. Run the deploy command:
   ```bash
   npm run deploy
   ```

## Credits
- Built with React, Tailwind CSS, and Lucide Icons.
- Images from Unsplash.
