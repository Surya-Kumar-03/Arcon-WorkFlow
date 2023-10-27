export default class MyPaletteProvider {
  constructor(eventBus, palette, translate) {
    this.eventBus = eventBus;
    this.translate = translate;
    console.log(palette);
    palette.registerProvider(this);
  }

  getPaletteEntries(element) {
    return function (entries) {
      console.log(entries);
      const entriesToDelete = [
        "create.subprocess-expanded",
        "create.participant-expanded",
        "hand-tool",
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
