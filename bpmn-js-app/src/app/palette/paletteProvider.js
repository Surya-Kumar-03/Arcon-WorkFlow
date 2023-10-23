export default class MyPaletteProvider {
  constructor(eventBus, palette, translate) {
    this.eventBus = eventBus;
    this.translate = translate;

    palette.registerProvider(this);
  }

  getPaletteEntries(element) {
    return function (entries) {
      const entriesToDelete = [
        "hand-tool",
        "space-tool",
        "lasso-tool",
        "global-connect-tool",
        "create.data-store",
      ];
      entriesToDelete.forEach((entryId) => {
        if (entries[entryId]) {
          delete entries[entryId];
        }
      });

      return entries;
    };
  }
}

MyPaletteProvider.$inject = ["eventBus", "palette", "translate"];
