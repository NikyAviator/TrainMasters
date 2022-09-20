// A base class for sub classes
// where each sub class corresponds to an entity
// in our REST-api/database
// ironboy 2022

/*
const { Product } = factory;

await Product.find()              // get all products
await Product.findOne(1)          // get the product with id 1

let someProduct = new Product();  // create new product
await someProduct.save()          // save new product in db

let aProduct = await Product.findOne(3);
await aProduct.save()             // save changes to db

await aProduct.delete()           // delete from database
*/

export class FetchHelper {

  static async find(parameter = '') {
    parameter && (parameter = '/' + parameter);
    return [(await (await fetch(`/api/${this.route}${parameter}`)).json())]
      .flat().map(x => x ? new this(x) : null);
  }

  static async findOne(parameter) {
    return (await this.find(parameter))[0] || null;
  }

  constructor(props) {
    // Props = all properties for the object as an object
    // copy to this (the object being created)
    Object.assign(this, props);
  }

  async save() {
    let method = this.id ? 'PUT' : 'POST';
    let result = await (await fetch(`/api/${this.route}${method === 'PUT' ? '/' + this.id : ''}`, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this)
    })).json();
    // In this particular REST-api lastInsertRowid is returned
    // on posts and is the id of the newly created item
    if (method === 'POST' && result.lastInsertRowid) {
      this.id = result.lastInsertRowid;
    }
    // in this particular REST-api the property _errror
    // signals that things have gone wrong
    if (result._error) {
      throw (new Error(result));
    }
  }

  async delete() {
    if (!this.id) { return { error: 'No id, can not delete' } };
    return await (await fetch(`/api/${this.route}/${this.id}`, {
      method: 'DELETE'
    }));
  }

}

// What ever property you ask the factory for it
// will create a class with that name that extends FetchHelper
export const factory = new Proxy({}, {
  get(object, property) {
    // just to get nice class names when logging in chrome dev tools
    let func = x => x;
    try {
      func = new Function('x', `return class ${property} extends x {}`);
    } catch (e) { }
    // create a sub class to FetchHelper
    let routeName = property.toLowerCase() + 's';
    return func(class extends FetchHelper {
      static set route(val) { routeName = val; }
      static get route() { return routeName; }
      get route() { return routeName; }
    });
  }
});