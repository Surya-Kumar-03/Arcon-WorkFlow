export default class CustomContextPadProvider {
  constructor(contextPad) {
    contextPad.registerProvider(this);
  }

  getContextPadEntries(element) {
    return function (entries) {
      const entriesToDelete = ["append.text-annotation", "replace"];
      entriesToDelete.forEach((entryId) => {
        if (entries[entryId]) {
          delete entries[entryId];
        }
      });

      return entries;
    };
  }
}

CustomContextPadProvider.$inject = ["contextPad"];
