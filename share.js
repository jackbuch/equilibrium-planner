(function () {
  function createBuildUrl(code) {
    const url = new URL('build.html', window.location.href);
    url.search = '';
    url.hash = code;
    return url.href;
  }

  window.EquilibriumShare = { createBuildUrl };
}());
