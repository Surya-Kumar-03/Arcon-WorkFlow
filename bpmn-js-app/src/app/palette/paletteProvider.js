export default class MyPaletteProvider {
  constructor(eventBus, palette, translate) {
    this.eventBus = eventBus;
    this.translate = translate;

    palette.registerProvider(this);
  }

  getPaletteEntries(element) {
    return function (entries) {
      const entriesToDelete = [
        
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
