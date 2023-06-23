window.onload = () => {
  const enter = document.getElementById("enter");

  enter.onclick = () => {
    console.log("hey");
    document.body.style.transform = "translateX(-100%)";
  };
};
