const Course = require('../Model/CourseData');
const CourseData = require('../Model/CourseData')

module.exports.getAllCourses = async (req, res,next) => {
    try{    
        const [cousres,_] = await CourseData.findAll();
     
        res.status(200).json({cousres})
    
    }catch(error){
        next(error)
    }
  };
  module.exports.postCourses = async(req,res,next)=>{
    try{
        let { name, price} = req.body;
        let course = new CourseData(name,price);
  
        course = await course.save();

        res.status(201).json({mesaage : 'Course created'});

     }catch(error){
        next(error)
     }
    
  };

  module.exports.getSingleCourse = async(req,res,next)=>{
    try {
      let courseId = req.params.id;
      console.log('Course ID:', courseId);
      let [course, _] = await CourseData.findById(courseId);
        res.status(200).json({ course: course[0] });
      } catch (error) {
        next(error);
      }
  }

  module.exports.editCourse = async(req,res,next)=>{
    try{
      let courseId = req.params.id;
 
      let { name, price} = req.body;

      let course = new CourseData(name,price)

       course = await course.edit(courseId)   
     
       res.status(201).json({mesaage : 'Course Edited'});

      }
   
  catch(error){
     next(error)
  }
  }

  module.exports.deleteCourse = async(req,res,next)=>{
    try{
      let courseId = req.params.id;
        let course = new Course()
      course = await course.delete(courseId)   
     
       res.status(201).json({mesaage : 'Course deleted'});
      }
   
  catch(error){
     next(error)
  }
  }

    

//module.exports = getAllCourses;