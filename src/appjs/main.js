let init = () => {
  document.getElementById("servers").style.display = "block";
  document.getElementById("web3api").style.display = "none";
  document.getElementById("solanaapi").style.display = "none";
  document.getElementById("web3alerts").style.display = "none";
  document.getElementById("speedynodes").style.display = "none";
};

export function one() {
  document.getElementById("servers").style.display = "block";
  document.getElementById("web3api").style.display = "none";
  document.getElementById("solanaapi").style.display = "none";
  document.getElementById("web3alerts").style.display = "none";
  document.getElementById("speedynodes").style.display = "none";
}

export function two() {
  document.getElementById("servers").style.display = "none";
  document.getElementById("web3api").style.display = "block";
  document.getElementById("solanaapi").style.display = "none";
  document.getElementById("web3alerts").style.display = "none";
  document.getElementById("speedynodes").style.display = "none";
}

export function three() {
  document.getElementById("servers").style.display = "none";
  document.getElementById("web3api").style.display = "none";
  document.getElementById("solanaapi").style.display = "block";
  document.getElementById("web3alerts").style.display = "none";
  document.getElementById("speedynodes").style.display = "none";
}
export function four() {
  document.getElementById("servers").style.display = "none";
  document.getElementById("web3api").style.display = "none";
  document.getElementById("solanaapi").style.display = "none";
  document.getElementById("web3alerts").style.display = "block";
  document.getElementById("speedynodes").style.display = "none";
}
export function five() {
  document.getElementById("servers").style.display = "none";
  document.getElementById("web3api").style.display = "none";
  document.getElementById("solanaapi").style.display = "none";
  document.getElementById("web3alerts").style.display = "none";
  document.getElementById("speedynodes").style.display = "block";
}

setTimeout(function () {
  init();
}, 3 * 1000);
