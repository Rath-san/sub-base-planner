export class Mat {
    name: string;
    count: number;
    loaded: boolean;
    mats: Mat[];
    type: string;
    subtype?: string;
    constructor(
        name: string,
        count: number,
        loaded: false,
        mats: Mat[],
        type: string,
        subtype?: string
    ) {
        this.name = name;
        this.count = count;
        this.mats = mats;
        this.type = type;
        this.subtype = subtype;
    }
    getImage() {
        return `http://subnautica.wikia.com/wiki/Special:FilePath/${this.name}.png`;
    }

    getLink(title: string) {
        return `http://subnautica.wikia.com/${this.name.replace('.png', '')}`;
    }

}
