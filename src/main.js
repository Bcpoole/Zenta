export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-animator-css')
    .plugin('aurelia-dialog')
    .plugin('aurelia-validation');

  aurelia.start().then(a => a.setRoot());
}
