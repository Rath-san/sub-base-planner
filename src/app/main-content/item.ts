export class Item {
    image: {url: string, alt: string};
    text: {title: string, description: string};
    materials: {
        raw: Object[],
        basic: Object [],
        advanced: Object[]
    };

    constructor(
        image: { url: string, alt: string },
        text: { title: string, description: string },
        materials: {
            raw: Object[],
            basic: Object[],
            advanced: Object[]
        }
    ) {
        this.image = image;
        this.text = text;
        this.materials = materials;
    }

    getMaterialsRaw() {
        return this.materials.raw;
    }

    getMaterialsBasic() {
        return this.materials.raw;
    }

    getMaterialsAdvanced() {
        return this.materials.raw;
    }

}

// domain model database create items from here
