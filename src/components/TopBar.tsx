const TopBar = () => {
  return (
    <>
      <div className="topbar d-none d-md-block">
        <img
          src="./assets/dots.svg"
          alt="dots de pokedex vieja"
          className="d-inline-block align-text-top topbar__img"
        />
      </div>
      {/* // TopBar Mobile */}
      <div className="d-md-none topbar--mobile"></div>
      <div className="d-md-none bottombar--mobile"></div>
    </>
  );
};

export default TopBar;
