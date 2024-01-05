const courseDB = require('../Config/courseDB')
class Course{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    save(){
        let sql = `INSERT INTO course (name, price)
        VALUES ('${this.name}', '${this.price}')`;
     return courseDB.execute(sql);
    }



    edit(id){
      if (id === undefined || id === null) {
        throw new Error('Invalid id provided');
      }

      let sql = `UPDATE course SET name = '${this.name}', price = '${this.price}' WHERE id = ? ;`

      let values = [id];

   return courseDB.execute(sql,values);
  }


       delete(id){
      if (id === undefined || id === null) {
        throw new Error('Invalid id provided');
      }

      let sql = `DELETE FROM course WHERE id = ?;`;

      let values = [id];

   return courseDB.execute(sql,values);
  }




    static findAll() {
        let sql = `SELECT * FROM course;`;
         return courseDB.execute(sql);
       }

      static findById(id) {
        if (id === undefined || id === null) {
          throw new Error('Invalid id provided');
        }
      
        let sql = `SELECT * FROM course WHERE id = ?;`;
        let values = [id];
      
        return courseDB.execute(sql, values);
      }
      
}
module.exports = Course;