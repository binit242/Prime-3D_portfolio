# Portfolio Link Maintenance

The portfolio repository currently stores minified production files. Project
links are configured in `assets/maincontainer-btxgfx5j.js`.

Each project card has two link types:

- The `onClick:()=>q("...")` value opens the GitHub repository when a visitor
  clicks the project card or title.
- The `liveLink:"..."` value opens the deployed website when a visitor clicks
  the media preview. It also enables the green blinking `LIVE` badge.

To add a deployed URL later, find the relevant project media component and add
or update its `liveLink` value:

```js
e.jsx(g,{
  image:"/images/example.png",
  video:"example.mp4",
  alt:"Example Project",
  liveLink:"https://your-deployed-project.example"
})
```

If `liveLink` is omitted, the media preview remains visible but does not open a
deployed website and no `LIVE` badge is displayed.
