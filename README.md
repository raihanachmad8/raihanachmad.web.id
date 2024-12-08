# Astro Simple Portfolio

Is a free and open-source portfolio template site built with Astro. It's a great starting point for building your own portfolio site.

This project leverages **Astro v5-beta**, incorporating the latest features that Astro has to offer.
### Features

- **Astro v5-beta**: Utilizes the latest features of Astro for a fast and optimized static site.
- **Tailwind CSS**: Includes Tailwind CSS for easy and efficient styling.
- **ShadCN**: Implements ShadCN components for a modern and cohesive design system.
- **TypeScript**: Written in TypeScript for type safety and better developer tooling.
- **React Components**: Supports React components to provide a familiar component-based development workflow.
- **MDX Support**: Includes MDX support for writing content with Markdown and JSX.

### Figma Design

This project is based on the following Figma design: [Simple Resume Portfolio](https://www.figma.com/community/file/1213010685692032886/simple-resume-portfolio).

## Table of Contents

- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Customization](#customization-and--styling)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- npm (usually comes with Node.js)

### Installation

1. **Clone the repository:**

    ```sh
    git clone <repository-url>
    cd astro-simple-portfolio
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Start the development server:**

    ```sh
    npm run dev
    ```

This will start the Astro development server. Open a browser and visit `http://localhost:4321` to see the site.

## Project Structure

| File/Folder      | Description                                                                                    |
|------------------|------------------------------------------------------------------------------------------------|
| `src/assets`     | Contains images and other assets used in the project.                                          |
| `src/components` | Contains React components used in the project.                                                 |
| `src/content`    | Contains the content for the site, such as projects, experiences, and educational information. |
| `src/data`       | Contains data files for the site, such as jobs, education, and skills.                         |
| `src/icons`      | Contains SVG icons used in the project.                                                        |
| `src/layouts`    | Contains the layout components for the site.                                                   |
| `src/pages`      | Contains the pages for the site.                                                               |
| `src/styles`     | Contains global styles for the site.                                                           |
| `src/config.ts`  | Contains configurations for the site.                                                          |
| `src/lib`        | Contains utility functions used in the project.                                                |
| `public`         | Contains static files such as images, favicons, and other assets.                              |

## Configuration

To configure the project, you can edit the following files:

### `src/config.ts`

This file contains several configurations for the site such as the site title, description, other metadata, and your personal details. This file has three main sections:

- SITE
- ME
- SOCIAL

---

You can add, edit, or remove entries from these files to customize the content presented on your portfolio. Each file
typically exports an array of objects or strings that are consumed by various components in the project.

---

## Customization and  Styling

Styles can be customized in the `tailwind.config.js` file
and add your custom styles in the `src/styles/globals.css`.

To customize the colors, you can edit the theme section in the `tailwind.config.js` file.

```javascript
module.exports = {
  theme: {
    extend: {
        colors: {
            // Light mode colors
            'light-theme': '#E9EBEC', // Background color for light mode
            'primary-light': '#FBD144', // Primary color for light mode
            'primary-hover-light': '#FFE071', // Primary hover color for light mode

            // Dark mode colors
            'dark-theme': '#0C151D', // Background color for dark mode
            'primary-dark': '#FFE071', // Primary color for dark mode
            'primary-hover-dark': '#FBD144', // Primary hover color for dark mode
            'text-dark': '#d7d9da', // Text color for dark mode

            // Neutrals
            'n900': '#222222', // this is the color for the Navbar and other elements
            'n700': '#171F26', // Text color for light mode
            'n500': '#555555', // Text color secundary texts, borders, etc
        },
    },
  },
};
```

---

## Deployment

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/vito8916/REPO#NODE_VERSION=20)

Or follow the steps below:

1. **Build the project:**

    ```sh
    npm run build
    ```

   This will generate the static files in the `dist` directory.

2. **FTP Deployment:**

   Upload the contents of the `dist` directory to your web server using FTP.

3. **Vercel Deployment:**

   Follow the steps on the [Vercel website](https://vercel.com/docs) to deploy your Astro project.

4. **GitHub Pages Deployment:**

   You can also deploy to GitHub Pages by pushing the `dist` folder to the `gh-pages` branch of your repository.

---

## Contributing

[GitHub Repository](https://github.com/raihanachmad8)

Contributions are welcome! Please submit a pull request or open an issue to discuss changes.

---

## License

This project is licensed under the [MIT License](LICENSE).