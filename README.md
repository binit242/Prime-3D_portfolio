# Prime 3D Portfolio

A creative developer portfolio for **Binit Ghosh**, built around an interactive
3D experience. The site combines development work, design background, project
showcases, career history, and contact information in a scroll-driven interface.

This repository contains the deployable production snapshot of the portfolio.

## Highlights

- Interactive animated 3D character rendered in the browser
- Scroll-driven scene transitions and page animations
- Responsive layout for desktop and mobile screens
- About, services, career, projects, technology stack, and contact sections
- Project screenshots and video demonstrations
- Encrypted character model loaded at runtime
- Draco decoder assets for compressed 3D geometry

## Built With

| Area | Technology |
| --- | --- |
| UI | React |
| Build output | Vite |
| 3D rendering | Three.js |
| Animation | GSAP and ScrollTrigger |
| Model format | Encrypted GLB asset with Draco decoding |
| Styling | CSS |

## Portfolio Sections

| Section | Purpose |
| --- | --- |
| Landing | Introduces the portfolio with the animated 3D character |
| About | Summarizes the blend of design, editing, 3D, and development skills |
| Services | Presents the creative and technical work offered |
| Career | Shows freelance design and creative experience from 2019 onward |
| Projects | Displays selected work with screenshots and demo videos |
| Tech stack | Highlights technologies used across development projects |
| Contact | Provides social links and ways to connect |

## Repository Structure

```text
.
|-- assets/                 # Bundled JavaScript and CSS production assets
|-- draco/                  # Draco decoder JavaScript and WebAssembly files
|-- images/                 # Logos, technology icons, and project screenshots
|-- models/
|   |-- character.enc       # Encrypted 3D character loaded by the site
|   |-- char_enviorment.hdr # Environment lighting asset
|   `-- encrypt.cjs         # Utility used to encrypt the source GLB model
|-- *.mp4                   # Project demonstration videos
|-- NEW IT RESUME.pdf       # Resume document
`-- index.html              # Static application entry point
```

## Run Locally

The site uses root-relative asset paths such as `/assets/`, `/models/`, and
`/draco/`. Serve the repository root through a local web server instead of
opening `index.html` directly.

```bash
git clone https://github.com/binit242/Prime-3D_portfolio.git
cd Prime-3D_portfolio
python -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

On systems where Python is exposed as `python3`, use:

```bash
python3 -m http.server 4173
```

## Deployment

This snapshot can be deployed as a static site. Use the repository root as the
publish directory so the root-relative asset paths continue to resolve.

Suitable static hosting options include:

- GitHub Pages
- Netlify
- Vercel
- Render Static Sites

No backend service is required for the portfolio snapshot.

Project repository and deployed-site link maintenance is documented in
[`PORTFOLIO-LINKS.md`](PORTFOLIO-LINKS.md).

## Model Asset Notes

The browser loads `models/character.enc`, which contains the encrypted character
model used by the 3D scene. The original `models/character.glb` source is ignored
because the usable runtime asset is already included in the repository.

The project videos are intentionally committed as showcase assets. Several are
larger than GitHub's recommended 50 MB file size, so future updates may benefit
from external media hosting or Git LFS.

## Development Note

This repository currently stores the generated production files. The original
React source modules and package configuration are not included in this
snapshot. For significant feature development, restore or add the source
project and generate a fresh production build before deployment.

## Author

**Binit Ghosh**

- GitHub: [binit242](https://github.com/binit242)
- LinkedIn: [Binit Ghosh](https://www.linkedin.com/in/binit-ghosh)

## License

This portfolio and its assets are personal work. Please contact the author
before reusing the design, media, or 3D assets.
