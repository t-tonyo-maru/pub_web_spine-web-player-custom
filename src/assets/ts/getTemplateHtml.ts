/**
 * spine web playerを内包したhtml
 *
 * @param {string} runtimeJs - spine web player runtime JavaScript
 * @param {string} runtimeCss - spine web player runtime Css
 * @param {object} spienExportData - spine export data
 * @return {string} html
 */
export const getTemplateHtml = ({
  runtimeJs,
  runtimeCss,
  spienExportData: { core, atlas, png }
}: {
  runtimeJs: string
  runtimeCss: string
  spienExportData: {
    core: { fileName: string; dataUrl: string; isJson: boolean }
    atlas: { fileName: string; dataUrl: string }
    png: { fileName: string; dataUrl: string }
  }
}) => {
  const coreUrlOption = core.isJson ? 'jsonUrl' : 'skelUrl'

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Spine Web Player</title>
      <style>html,body{padding:0;margin:0}${runtimeCss}</style>
    </head>
    <body>
      <div id="player-container"></div>
      <script>${runtimeJs}</script>
      <script>
      new spine.SpinePlayer("player-container", {
        premultipliedAlpha: true,
        preserveDrawingBuffer: false,
        ${coreUrlOption}: "${core.fileName}",
        atlasUrl: "${atlas.fileName}",
        rawDataURIs: {
          ["${core.fileName}"]: "${core.dataUrl}",
          ["${atlas.fileName}"]: "${atlas.dataUrl}",
          ["${png.fileName}"]: "${png.dataUrl}",
        }
      });
      </script>
    </body>
  </html>
  `
}
