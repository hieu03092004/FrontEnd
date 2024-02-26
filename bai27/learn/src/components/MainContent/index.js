function MainContent() {
  let name = "nguyenvana";
  const css = {
    // color: "red",
    // backgroundColor: "blue",
  };
  return (
    <>
      <div className="box">
        <div style={css}> Xin chào {name} </div>
        <div style={css}> Xin chào {name} </div>
      </div>
    </>
  );
}
export default MainContent;
