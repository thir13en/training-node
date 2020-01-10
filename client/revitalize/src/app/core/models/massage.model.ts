export class MassageModel {
  readonly id: string;
  readonly created: Date;
  readonly type: string;
  readonly description: string;
  readonly imageUrl: string;

  constructor(massageRes: any) {
    this.id = massageRes._id;
    this.created = massageRes.created;
    this.type = massageRes.type;
    this.description = massageRes.description;
    this.imageUrl = massageRes.imageUrl;
  }

}
