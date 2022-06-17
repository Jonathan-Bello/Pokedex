const TopBar = () => {
  return (
    <>
      <div className="topbar d-none d-lg-block">
        <img
          src="./assets/dots.svg"
          alt="dots de pokedex vieja"
          className="d-inline-block align-text-top topbar__img"
        />
      </div>
      {/* // TopBar Mobile */}
      <div className="d-lg-none topbar--mobile"></div>
      <div className="d-lg-none bottombar--mobile"></div>
    </>
  );
};

export default TopBar;
