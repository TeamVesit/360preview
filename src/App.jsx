import "./App.css";
import PhotoSphereViewer from "./PhotoSphereViewer";

function App() {
  // Gallery items
  const galleryItems = [
    {
      id: "1",
      panorama: "/1.jpg",
      thumbnail: "/1.jpg",
      name: "A 1",
      options: {
        caption: "A 1",
      },
    },
    {
      id: "2",
      panorama: "/2.jpg",
      thumbnail: "/2.jpg",
      name: "2",
      options: {
        caption: "2",
      },
    },
    {
      id: "3",
      panorama: "/3.jpg",
      thumbnail: "/3.jpg",
      name: "3",
      options: {
        caption: "3",
      },
    },
  ];

  return (
    <div className="app-container">
      <h1 style={{ fontFamily: "cursive" }}>VOYAGEHACK Photo Sphere Demo</h1>
      <PhotoSphereViewer
        panorama="/1.jpg"
        caption="A 1"
        galleryItems={galleryItems}
      />
    </div>
  );
}

export default App;
