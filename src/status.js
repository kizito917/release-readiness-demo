function getReleaseStatus(testsPassed, environmentReady) {
  return testsPassed && environmentReady
    ? "Ready for release"
    : "Not ready for release";
}

console.log(getReleaseStatus(true, true));

module.exports = { getReleaseStatus };