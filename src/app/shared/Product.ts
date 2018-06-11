export class Product {
    constructor(
        public id: number,
        public version: number,
        public productId: string,
        public descripcion: string,
        public imageUrl: string,
        public price: number
    ){}
}