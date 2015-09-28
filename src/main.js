export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-animator-css')
    .plugin('aurelia-dialog')
    .plugin('aurelia-validation')
    .plugin('dice');

  aurelia.start().then(a => a.setRoot());
}
