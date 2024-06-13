var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
function compendiumColor() {
  if (game.modules.get("compendium-themer")?.active) {
    game.modules.get("compendium-themer").api.addModule(MODULE_ID, [
      // ACTOR
      {
        dataPack: `${MODULE_ID}.HnD-dons`,
        colorText: `#90EE90`,
        iconText: `fa-solid fa-helmet-battle`,
        bannerImage: `modules/${MODULE_ID}/assets/images/banner.webp`,
        backgroundColorText: ``
      },
      {
        dataPack: `${MODULE_ID}.HnD-capacites-de-classes`,
        colorText: `#90EE90`,
        iconText: `fa-solid fa-helmet-battle`,
        bannerImage: `modules/${MODULE_ID}/assets/images/banner.webp`,
        backgroundColorText: ``
      },
      {
        dataPack: `${MODULE_ID}.HnD-grimoire`,
        colorText: `#90EE90`,
        iconText: `fa-solid fa-helmet-battle`,
        bannerImage: `modules/${MODULE_ID}/assets/images/banner.webp`,
        backgroundColorText: ``
      },
      {
        dataPack: `${MODULE_ID}.HnD-races`,
        colorText: `#90EE90`,
        iconText: `fa-solid fa-helmet-battle`,
        bannerImage: `modules/${MODULE_ID}/assets/images/banner.webp`,
        backgroundColorText: ``
      },
      {
        dataPack: `${MODULE_ID}.HnD-traits-raciaux`,
        colorText: `#90EE90`,
        iconText: `fa-solid fa-helmet-battle`,
        bannerImage: `modules/${MODULE_ID}/assets/images/banner.webp`,
        backgroundColorText: ``
      },
      {
        dataPack: `${MODULE_ID}.HnD-equipement-aventurier`,
        colorText: `#90EE90`,
        iconText: `fa-solid fa-helmet-battle`,
        bannerImage: `modules/${MODULE_ID}/assets/images/banner.webp`,
        backgroundColorText: ``
      },
      {
        dataPack: `${MODULE_ID}.HnD-historiques`,
        colorText: `#90EE90`,
        iconText: `fa-solid fa-helmet-battle`,
        bannerImage: `modules/${MODULE_ID}/assets/images/banner.webp`,
        backgroundColorText: ``
      },
      {
        dataPack: `${MODULE_ID}.HnD-Classes-specialisations`,
        colorText: `#90EE90`,
        iconText: `fa-solid fa-helmet-battle`,
        bannerImage: `modules/${MODULE_ID}/assets/images/banner.webp`,
        backgroundColorText: ``
      },
      {
        dataPack: `${MODULE_ID}.HnD-aptitudes-historiques`,
        colorText: `#90EE90`,
        iconText: `fa-solid fa-helmet-battle`,
        bannerImage: `modules/${MODULE_ID}/assets/images/banner.webp`,
        backgroundColorText: ``
      },
      // ITEM
      {
        dataPack: `${MODULE_ID}.HnD-objets-magiques-et-tresors`,
        colorText: `#90EE90`,
        iconText: `fa-solid fa-sword`,
        bannerImage: `modules/${MODULE_ID}/assets/images/banner.webp`,
        backgroundColorText: ``
      },
      {
        dataPack: `${MODULE_ID}.HnD-poisons-et-maladies`,
        colorText: `#90EE90`,
        iconText: `fa-solid fa-sword`,
        bannerImage: `modules/${MODULE_ID}/assets/images/banner.webp`,
        backgroundColorText: ``
      },
      // RULES
      {
        dataPack: `${MODULE_ID}.HnD-tables-de-tresors`,
        colorText: `#90EE90`,
        iconText: `fa-solid fa-pen-ruler`,
        bannerImage: `modules/${MODULE_ID}/assets/images/banner.webp`,
        backgroundColorText: ``
      },
      {
        dataPack: `${MODULE_ID}.HnD-conditions`,
        colorText: `#90EE90`,
        iconText: `fa-solid fa-pen-ruler`,
        bannerImage: `modules/${MODULE_ID}/assets/images/banner.webp`,
        backgroundColorText: ``
      },
      {
        dataPack: `${MODULE_ID}.HnD-bestaire`,
        colorText: `#90EE90`,
        iconText: `fa-solid fa-pen-ruler`,
        bannerImage: `modules/${MODULE_ID}/assets/images/banner.webp`,
        backgroundColorText: ``
      },
      {
        dataPack: `${MODULE_ID}.HnD-capacites-du-bestiaire`,
        colorText: `#90EE90`,
        iconText: `fa-solid fa-pen-ruler`,
        bannerImage: `modules/${MODULE_ID}/assets/images/banner.webp`,
        backgroundColorText: ``
      },
      {
        dataPack: `${MODULE_ID}.HnD-tables-de-rencontres-aleatoires`,
        colorText: `#90EE90`,
        iconText: `fa-solid fa-pen-ruler`,
        bannerImage: `modules/${MODULE_ID}/assets/images/banner.webp`,
        backgroundColorText: ``
      },
      {
        dataPack: `${MODULE_ID}.HnD-tables-d_evenements-aleatoires`,
        colorText: `#90EE90`,
        iconText: `fa-solid fa-pen-ruler`,
        bannerImage: `modules/${MODULE_ID}/assets/images/banner.webp`,
        backgroundColorText: ``
      },
      {
        dataPack: `${MODULE_ID}.HnD-folies`,
        colorText: `#90EE90`,
        iconText: `fa-solid fa-pen-ruler`,
        bannerImage: `modules/${MODULE_ID}/assets/images/banner.webp`,
        backgroundColorText: ``
      },
      {
        dataPack: `${MODULE_ID}.HnD-pieges`,
        colorText: `#90EE90`,
        iconText: `fa-solid fa-pen-ruler`,
        bannerImage: `modules/${MODULE_ID}/assets/images/banner.webp`,
        backgroundColorText: ``
      }
    ]);
  }
}
__name(compendiumColor, "compendiumColor");
const MODULE_ID = "srd-heros-et-dragons";
Hooks.once("init", function() {
  game.settings.register("srd-heros-et-dragons", "HDcompendiumColor", {
    name: "couleur des compendium H&D et DD5",
    hint: "affiche les compendium H&D en vert, DD5 en rouge",
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
    onChange: () => window.location.reload()
  });
});
Hooks.once("ready", async () => {
  if (game.settings.get("srd-heros-et-dragons", "HDcompendiumColor")) {
    compendiumColor();
  }
});
export {
  MODULE_ID
};
//# sourceMappingURL=module.js.map
