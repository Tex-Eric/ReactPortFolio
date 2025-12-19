function WallpaperV02() {
    const positionFixed = {
        position: "fixed",
        width: "100%",
        height: "100vh",
        zIndex: '-2',
        // backgroundColor: "#212442"
        background: "radial-gradient(circle,#212442 0%, #0E1419 100%)"
    }
    return (
      <div style={positionFixed}>
      </div>
    );
  }
  
  export default WallpaperV02;
